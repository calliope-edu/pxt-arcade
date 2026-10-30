#!/usr/bin/env python3
# Calliope edition: fixes the output of "pxt staticpkg" (run on the output folder, e.g. by
# cloudflare/pages/prepare.sh). Usage: scripts/calliope-staticfix.py <static editor folder>
#
# skillmap.html: staticpkg writes "var pxtConfig=null;", so the skillmap page does not know
# it is a static editor. It then loads the maps and tutorials from www.makecode.com and
# embeds the editor of arcade.makecode.com (pxtConfig.targetUrl is empty, so it falls back
# to appTheme.embedUrl). It gets the editor's pxtConfig instead, with the page's own
# address as targetUrl.
import re
import sys

out = sys.argv[1]
index = open(f"{out}/index.html", encoding="utf-8").read()
m = re.search(r"var pxtConfig = (\{.*?\});", index, re.S)
if not m:
    sys.exit("no pxtConfig in index.html")
config = re.sub(r'"targetUrl": "[^"]*"', '"targetUrl": location.origin', m.group(1))

path = f"{out}/skillmap.html"
page = open(path, encoding="utf-8").read()
if "var pxtConfig=null;" in page:
    page = page.replace("var pxtConfig=null;", f"var pxtConfig = {config};", 1)
    open(path, "w", encoding="utf-8").write(page)
    print("skillmap.html: static pxtConfig")
elif '"targetUrl": location.origin' in page:
    print("skillmap.html: already fixed")
else:
    sys.exit("skillmap.html: pxtConfig not found, check scripts/calliope-staticfix.py")
