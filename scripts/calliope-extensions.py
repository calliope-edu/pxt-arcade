#!/usr/bin/env python3
# Calliope edition: copy the GitHub extensions that arcade.makecode.com lists into libs/,
# so they are part of the editor (also the static version) and need neither GitHub nor the
# MakeCode cloud. Each one becomes libs/<folder> with the files from its pxt.json, its
# LICENSE and README; GitHub dependencies point to the copies (file:../<folder>). The repo
# icon becomes docs/static/libs/<folder>.png (the card image), unless that file exists.
#
# Usage (in the repository root):  scripts/calliope-extensions.py [folder ...]
#   no arguments: all extensions below; otherwise only the named folders.
# To update an extension, change its tag below and run the script again. New extensions
# also need an entry in pxtarget.json (bundleddirs) and targetconfig.json (see CALLIOPE.md).
# None of them contains C++, so the runtime in the hex cache stays the same.
import io, json, os, re, shutil, sys, tarfile, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# (GitHub repo, tag, folder = package name in libs/)
EXTENSIONS = [
    ("jwunderl/arcade-sprite-util", "v0.6.0", "arcade-sprite-util"),
    ("microsoft/pxt-settings-blocks", "v1.0.0", "settings-blocks"),
    ("microsoft/arcade-tile-util", "v1.2.0", "arcade-tile-util"),
    ("riknoll/arcade-mini-menu", "v0.1.0", "arcade-mini-menu"),
    ("jwunderl/pxt-color", "v0.2.3", "color-fading"),
    ("jwunderl/pxt-button-combos", "v0.0.24", "pxt-button-combos"),
    ("adafruit/circuit-playground-character-icons", "v0.0.8", "circuit-playground-character-icons"),
    # Calliope edition: seesaw hidden (not in pxtarget.json / targetconfig.json)
    # ("adafruit/pxt-seesaw", "v0.0.19", "seesaw"),
    ("jwunderl/pxt-status-bar", "v0.4.2", "pxt-status-bar"),
    ("jwunderl/pxt-scaling", "v0.1.2", "pxt-scaling"),
    ("microsoft/arcade-sprite-data", "v0.2.1", "arcade-sprite-data"),
    ("microsoft/arcade-grid", "v1.3.0", "sprite-grid"),
    ("microsoft/arcade-minimap", "v0.6.1", "arcade-minimap"),
    ("microsoft/arcade-timers", "v1.1.0", "timers"),
    ("microsoft/arcade-text", "v1.3.0", "arcade-text"),
    ("microsoft/pxt-tick-event", "v0.2.0", "pxt-tick-event"),
    ("microsoft/pxt-tilemaps", "v1.12.0", "tilemaps"),
    ("microsoft/arcade-storytelling", "v1.0.3", "arcade-story"),
    ("microsoft/arcade-background-scroll", "v0.1.2", "arcade-background-scroll"),
    ("microsoft/arcade-character-animations", "v0.1.0", "arcade-character-animations"),
    ("microsoft/arcade-piano-roll", "v0.0.1", "arcade-piano-roll"),
    ("mr-coxall/turtle-logo", "v1.0.0", "turtle-logo"),
    ("aqeeaqee/pxt-raycasting", "v0.3.18", "pxt-raycasting"),
    # Calliope edition: Makey Makey hidden (not in pxtarget.json / targetconfig.json)
    # ("joylabz/makeymakey-makecode-arcade-extension", "1.0.3", "makeymakey"),
    ("kohanmathers/makecodespritefx", "v1.3.0", "sprite-fx"),
    ("bladebaillio/image-mapping", "v0.0.1", "image-mapping"),
    ("microsoft/arcade-carnival", "v0.0.7", "carnival"),
    ("riknoll/arcade-tile-scanner", "v0.0.1", "arcade-tile-scanner"),
    ("riknoll/arcade-fancy-text", "v0.2.2", "arcade-fancy-text"),
    # dependency of arcade-sprite-util, not listed on its own
    ("riknoll/arcade-extension-utils", "v0.1.0", "arcade-extension-utils"),
]
HIDDEN = {"arcade-extension-utils"}
# languages of this edition besides English; translations live in libs/<folder>/_locales/<lang>/
# (block texts) and libs/<folder>/docs/reference/<lang>/<folder>.md (reference page)
LANGS = ["ar", "ca", "cs", "da", "de", "el", "es", "fr", "it", "nl", "pl", "sl", "tr"]
# dependencies added to the copy: pxt-tick-event only depends on base, which does not
# compile on its own (on GitHub it is tested with device as test dependency)
EXTRA_DEPS = {"pxt-tick-event": {"device": "*"}}
# card images that are not in the release (only on the main branch)
ICON_URLS = {
    "circuit-playground-character-icons":
        "https://raw.githubusercontent.com/adafruit/Circuit-Playground-Character-Icons/master/icon.png",
    "image-mapping": "https://raw.githubusercontent.com/bladebaillio/image-mapping/master/icon.png",
    "pxt-scaling": "https://raw.githubusercontent.com/jwunderl/pxt-scaling/master/icon.png",
}
FOLDER_BY_REPO = {repo.lower(): folder for repo, _, folder in EXTENSIONS}
# keys of pxt.json that only matter on GitHub
DROP_KEYS = ["testFiles", "testDependencies", "targetVersions", "preferredEditor", "additionalFilePath"]


def fetch(repo, tag):
    url = "https://codeload.github.com/%s/tar.gz/refs/tags/%s" % (repo, tag)
    with urllib.request.urlopen(url) as r:
        data = r.read()
    files = {}
    with tarfile.open(fileobj=io.BytesIO(data)) as tar:
        for m in tar.getmembers():
            if m.isfile():
                files[m.name.split("/", 1)[1]] = tar.extractfile(m).read()
    return files


def dependency(name, ver):
    if ver.startswith("github:"):
        repo = ver[len("github:"):].split("#")[0].lower()
        if repo not in FOLDER_BY_REPO:
            sys.exit("%s: GitHub dependency %s is not in the list" % (name, repo))
        return FOLDER_BY_REPO[repo], "file:../" + FOLDER_BY_REPO[repo]
    if ver == "*":
        return name, "file:../" + name
    sys.exit("unsupported dependency %s: %s" % (name, ver))


def bundle(repo, tag, folder):
    files = fetch(repo, tag)
    cfg = json.loads(files["pxt.json"])
    dest = os.path.join(ROOT, "libs", folder)
    # keep our translations (block texts and reference page per language) across updates
    saved = {}
    for rel in [os.path.join("_locales", l) for l in LANGS] + \
               [os.path.join("docs", "reference", l) for l in LANGS + ["en"]]:
        if os.path.isdir(os.path.join(dest, rel)):
            saved[rel] = {f: open(os.path.join(dest, rel, f), "rb").read()
                          for f in os.listdir(os.path.join(dest, rel))}
    shutil.rmtree(dest, ignore_errors=True)
    os.makedirs(dest)
    for rel, content in saved.items():
        os.makedirs(os.path.join(dest, rel))
        for f, data in content.items():
            with open(os.path.join(dest, rel, f), "wb") as out:
                out.write(data)

    keep = [f for f in cfg.get("files", []) if not f.endswith(".png")]
    extra = [f for f in files if f.split(".")[0].upper() in ("LICENSE", "LICENCE") and "/" not in f]
    for f in keep + extra:
        if f not in files:
            sys.exit("%s: file %s missing in %s" % (folder, f, tag))
        path = os.path.join(dest, f)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "wb") as out:
            out.write(files[f])

    cfg["name"] = folder
    locales = sorted(os.path.join("_locales", l, f).replace(os.sep, "/")
                     for l in LANGS if os.path.isdir(os.path.join(dest, "_locales", l))
                     for f in os.listdir(os.path.join(dest, "_locales", l)))
    cfg["files"] = keep + locales
    deps = dict(cfg.get("dependencies", {}), **EXTRA_DEPS.get(folder, {}))
    cfg["dependencies"] = dict(dependency(n, v) for n, v in deps.items())
    for k in DROP_KEYS:
        cfg.pop(k, None)
    cfg["public"] = True
    if folder in HIDDEN:
        cfg["hidden"] = True
    with open(os.path.join(dest, "pxt.json"), "w") as out:
        out.write(json.dumps(cfg, indent=4, ensure_ascii=False) + "\n")

    icon = os.path.join(ROOT, "docs", "static", "libs", folder + ".png")
    if not os.path.exists(icon):
        data = files.get("icon.png")
        if not data and folder in ICON_URLS:
            with urllib.request.urlopen(ICON_URLS[folder]) as r:
                data = r.read()
        if data:
            with open(icon, "wb") as out:
                out.write(data)
    if folder not in HIDDEN:
        write_reference(repo, tag, folder, cfg, files)
    print("%-36s %s %s" % (folder, repo, tag))


# README sections that only make sense on GitHub (adding/editing the repo, build, metadata)
SKIP_SECTIONS = re.compile(
    r"use (as|this) extension|add this extension|edit this (project|extension)|blocks preview|"
    r"metadata|supported targets|contributing|trademarks|building|releasing|"
    r"to regenerate|create a project with|import the extension|how to use|^license$|^todo",
    re.I)
# images that only make sense on GitHub (build badges, generated block previews)
SKIP_IMAGES = re.compile(r"badge|travis-ci|/workflows/|\.github/makecode|\.makecode/blocks", re.I)


def write_reference(repo, tag, folder, cfg, files):
    # "Learn more" on the extension card opens /reference/<folder>; pxt also finds pages in
    # libs/<folder>/docs. The page is the README without its GitHub parts; its images go
    # to docs/static/libs/<folder>/ so the page works without internet.
    readme = next((files[f] for f in files if f.lower() == "readme.md"), b"").decode("utf8")
    static_dir = os.path.join(ROOT, "docs", "static", "libs", folder)
    shutil.rmtree(static_dir, ignore_errors=True)
    images = {}

    def local_image(url):
        if SKIP_IMAGES.search(url):
            return None
        if url not in images:
            path = re.sub(r"^\./", "", url.split("?")[0])
            if re.match(r"https?://", url):
                url_dl = re.sub(r"github\.com/([^/]+/[^/]+)/(blob|raw)/", r"raw.githubusercontent.com/\1/", url)
                try:
                    with urllib.request.urlopen(url_dl) as r:
                        data = r.read()
                        ctype = r.headers.get("Content-Type", "")
                except Exception as e:
                    print("   image skipped: %s (%s)" % (url, e))
                    return None
            elif path in files:
                data, ctype = files[path], ""
            else:
                return None
            ext = os.path.splitext(path)[1].lower()
            if ext not in (".png", ".gif", ".jpg", ".jpeg", ".svg"):
                ext = "." + (ctype.split("/")[-1].split(";")[0] or "png")
            name = "image%d%s" % (len(images) + 1, ext)
            os.makedirs(static_dir, exist_ok=True)
            with open(os.path.join(static_dir, name), "wb") as out:
                out.write(data)
            images[url] = "/static/libs/%s/%s" % (folder, name)
        return images[url]

    lines, skip_level = [], 0
    for line in readme.replace("\r\n", "\n").split("\n"):
        m = re.match(r"^(#+)\s+(.*)$", line)
        if m:
            level = len(m.group(1))
            title = re.sub(r"!\[[^\]]*\]\([^)]*\)|\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)", "", m.group(2)).strip()
            # a skipped section loses its own text; real subsections in it are kept
            skip_level = level if SKIP_SECTIONS.search(title) else 0
            if skip_level:
                continue
            line = m.group(1) + " " + title
        elif skip_level:
            continue
        if line.startswith("> Open this page at"):
            continue

        def image(m):
            src = local_image(m.group(2))
            return "![%s](%s)" % (m.group(1), src) if src else ""
        line = re.sub(r"\[(!\[[^\]]*\]\([^)]*\))\]\([^)]*\)", r"\1", line)  # linked images
        line = re.sub(r"!\[([^\]]*)\]\(([^)\s]+)[^)]*\)", image, line)
        line = re.sub(r'<img[^>]*src="([^"]+)"[^>]*>',
                      lambda m: ("![](%s)" % local_image(m.group(1))) if local_image(m.group(1)) else "", line)
        lines.append(line)

    body = "\n".join(lines).strip()
    # the page gets its own title (the README's first heading, if any) and no logo
    first = re.search(r"^# (.+)$", body, re.M)
    title = first.group(1).strip() if first else folder
    if first:
        body = body[:first.start()] + body[first.end():]
    body = re.sub(r"^---\n(?:\w+:.*\n)+---\n", "", body, flags=re.M)  # front matter
    body = re.sub(r"^!\[[^\]]*(logo|icon)[^\]]*\]\([^)]*\)\s*$", "", body, flags=re.M | re.I)
    body = re.sub(r"^#+\s*$", "", body, flags=re.M)  # empty headings
    body = re.sub(r"!\[[0-9a-f]{20,}\]", "![]", body)  # hashes as alt text
    body = re.sub(r"\n[ \t]*(\n[ \t]*)+\n", "\n\n", body).strip()
    md = "# %s\n\n" % title
    if cfg.get("description", "").strip():
        md += cfg["description"].strip() + "\n\n"
    if body:
        md += body + "\n\n"
    md += "Source: [%s](https://github.com/%s/tree/%s) (%s)\n\n" % (repo, repo, tag, tag)
    md += "```package\n%s\n```\n" % folder
    path = os.path.join(ROOT, "libs", folder, "docs", "reference", folder + ".md")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as out:
        out.write(md)


wanted = set(sys.argv[1:])
for repo, tag, folder in EXTENSIONS:
    if not wanted or folder in wanted:
        bundle(repo, tag, folder)
