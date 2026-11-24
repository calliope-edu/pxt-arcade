(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/editors/arcade/",
    "verprefix": "",
    "workerjs": "/editors/arcade/worker.js",
    "monacoworkerjs": "/editors/arcade/monacoworker.js",
    "gifworkerjs": "/editors/arcade/gifjs/gif.worker.js",
    "serviceworkerjs": "/editors/arcade/serviceworker.js",
    "typeScriptWorkerJs": "/editors/arcade/tsworker.js",
    "pxtVersion": "13.2.1",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/editors/arcade/",
    "commitCdnUrl": "/editors/arcade/",
    "blobCdnUrl": "/editors/arcade/",
    "cdnUrl": "/editors/arcade/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "arcade",
    "simUrl": "/editors/arcade/simulator.html",
    "simserviceworkerUrl": "/editors/arcade/simulatorserviceworker.js",
    "simworkerconfigUrl": "/editors/arcade/workerConfig.js",
    "partsUrl": "/editors/arcade/siminstructions.html",
    "runUrl": "/editors/arcade/run.html",
    "docsUrl": "/editors/arcade/docs.html",
    "multiUrl": "/editors/arcade/multi.html",
    "asseteditorUrl": "/editors/arcade/asseteditor.html",
    "isStatic": true,
    "kioskUrl": "/editors/arcade/kiosk.html",
    "teachertoolUrl": "/editors/arcade/teachertool.html",
    "tutorialtoolUrl": "/editors/arcade/tutorialtool.html",
    "skillmapUrl": "/editors/arcade/skillmap.html",
    "multiplayerUrl": "/editors/arcade/multiplayer.html",
    "authcodeUrl": "/editors/arcade/authcode.html"
};

    var scripts = [
        "/editors/arcade/highlight.js/highlight.pack.js",
        "/editors/arcade/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/editors/arcade/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/editors/arcade/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/editors/arcade/target.js");
    scripts.push("/editors/arcade/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.setInitCallbacks(pxtCallbacks)
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
