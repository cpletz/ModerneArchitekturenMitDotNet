System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  meta: {
    "bootstrap": {
      "deps": [
        "jquery"
      ]
    }
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-rc.1.0.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-rc.1.0.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-rc.1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.2",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-rc.1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.1",
    "aurelia-validatejs": "npm:aurelia-validatejs@0.6.0",
    "aurelia-validation": "npm:aurelia-validation@0.10.0",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "ms-signalr-client": "npm:ms-signalr-client@2.2.3",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-binding@1.0.0-rc.1.0.3": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-rc.1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-rc.1.0.2",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-rc.1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-rc.1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-rc.1.0.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-rc.1.0.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-rc.1.0.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-framework@1.0.0-rc.1.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-history-browser@1.0.0-rc.1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-http-client@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader-default@1.0.0-rc.1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-loader@1.0.0-rc.1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-logging-console@1.0.0-rc.1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-metadata@1.0.0-rc.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0-rc.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-polyfills@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-rc.1.0.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-router@1.0.0-rc.1.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-task-queue@1.0.0-rc.1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0-rc.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-templating-resources@1.0.0-rc.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-templating-router@1.0.0-rc.1.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-rc.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:aurelia-templating@1.0.0-rc.1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-rc.1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-rc.1.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-rc.1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0"
    },
    "npm:aurelia-validatejs@0.6.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-validation": "npm:aurelia-validation@0.10.0",
      "validate.js": "npm:validate.js@0.10.0"
    },
    "npm:aurelia-validation@0.10.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-rc.1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-rc.1.0.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-rc.1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-rc.1.0.1"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.23"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ms-signalr-client@2.2.3": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:validate.js@0.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  depCache: {
    "app.js": [
      "aurelia-router",
      "aurelia-event-aggregator",
      "aurelia-framework",
      "./current-player",
      "./busy-state"
    ],
    "blur-image.js": [
      "aurelia-framework"
    ],
    "bootstrap-validation/bootstrap-form-validation-renderer.js": [
      "aurelia-dependency-injection",
      "aurelia-validation"
    ],
    "bootstrap-validation/index.js": [
      "./bootstrap-form-validation-renderer"
    ],
    "current-player.js": [
      "aurelia-event-aggregator",
      "aurelia-framework"
    ],
    "game/game.js": [
      "aurelia-http-client",
      "jquery",
      "ms-signalr-client",
      "aurelia-framework",
      "./../current-player"
    ],
    "main.js": [
      "bootstrap"
    ],
    "player/login.js": [
      "aurelia-framework",
      "./service-api",
      "aurelia-validation",
      "aurelia-validatejs",
      "aurelia-event-aggregator",
      "./../busy-state"
    ],
    "player/register.js": [
      "aurelia-framework",
      "./service-api",
      "aurelia-validation",
      "aurelia-validatejs",
      "aurelia-event-aggregator"
    ],
    "player/router.js": [
      "aurelia-router"
    ],
    "player/service-api.js": [
      "aurelia-framework",
      "aurelia-http-client",
      "./service-url"
    ],
    "stats/highscore.js": [
      "aurelia-framework",
      "./service-api"
    ],
    "stats/live.js": [
      "aurelia-framework",
      "jquery",
      "ms-signalr-client",
      "./service-url"
    ],
    "stats/router.js": [
      "aurelia-router"
    ],
    "stats/service-api.js": [
      "aurelia-framework",
      "aurelia-http-client",
      "./service-url"
    ]
  },
  bundles: {
    "app-build.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "blur-image.js",
      "bootstrap-validation/bootstrap-form-validation-renderer.js",
      "bootstrap-validation/index.js",
      "busy-state.js",
      "current-player.js",
      "game/game.css!github:systemjs/plugin-text@0.0.8.js",
      "game/game.html!github:systemjs/plugin-text@0.0.8.js",
      "game/game.js",
      "main.js",
      "nav-bar.html!github:systemjs/plugin-text@0.0.8.js",
      "player/login.html!github:systemjs/plugin-text@0.0.8.js",
      "player/login.js",
      "player/register.html!github:systemjs/plugin-text@0.0.8.js",
      "player/register.js",
      "player/router.html!github:systemjs/plugin-text@0.0.8.js",
      "player/router.js",
      "player/service-api.js",
      "player/service-url.js",
      "player/validation-summary.html!github:systemjs/plugin-text@0.0.8.js",
      "stats/highscore.html!github:systemjs/plugin-text@0.0.8.js",
      "stats/highscore.js",
      "stats/live.html!github:systemjs/plugin-text@0.0.8.js",
      "stats/live.js",
      "stats/router.html!github:systemjs/plugin-text@0.0.8.js",
      "stats/router.js",
      "stats/service-api.js",
      "stats/service-url.js"
    ],
    "aurelia.js": [
      "github:github/fetch@1.0.0.js",
      "github:github/fetch@1.0.0/fetch.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "github:twbs/bootstrap@3.3.6.js",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-text@0.0.8.js",
      "github:twbs/bootstrap@3.3.6/js/bootstrap.js",
      "npm:aurelia-animator-css@1.0.0-rc.1.0.0.js",
      "npm:aurelia-animator-css@1.0.0-rc.1.0.0/aurelia-animator-css.js",
      "npm:aurelia-binding@1.0.0-rc.1.0.3.js",
      "npm:aurelia-binding@1.0.0-rc.1.0.3/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0-rc.1.0.1.js",
      "npm:aurelia-bootstrapper@1.0.0-rc.1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1.js",
      "npm:aurelia-dependency-injection@1.0.0-rc.1.0.1/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0-rc.1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.1.js",
      "npm:aurelia-fetch-client@1.0.0-rc.1.0.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.0-rc.1.0.2.js",
      "npm:aurelia-framework@1.0.0-rc.1.0.2/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0-rc.1.0.0.js",
      "npm:aurelia-history-browser@1.0.0-rc.1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0-rc.1.0.0.js",
      "npm:aurelia-history@1.0.0-rc.1.0.0/aurelia-history.js",
      "npm:aurelia-http-client@1.0.0-rc.1.0.0.js",
      "npm:aurelia-http-client@1.0.0-rc.1.0.0/aurelia-http-client.js",
      "npm:aurelia-loader-default@1.0.0-rc.1.0.0.js",
      "npm:aurelia-loader-default@1.0.0-rc.1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0-rc.1.0.0.js",
      "npm:aurelia-loader@1.0.0-rc.1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0-rc.1.0.0.js",
      "npm:aurelia-logging-console@1.0.0-rc.1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0-rc.1.0.1.js",
      "npm:aurelia-logging@1.0.0-rc.1.0.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0-rc.1.0.1.js",
      "npm:aurelia-metadata@1.0.0-rc.1.0.1/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0-rc.1.0.1.js",
      "npm:aurelia-pal-browser@1.0.0-rc.1.0.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0-rc.1.0.0.js",
      "npm:aurelia-pal@1.0.0-rc.1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0-rc.1.0.0.js",
      "npm:aurelia-path@1.0.0-rc.1.0.0/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0-rc.1.0.0.js",
      "npm:aurelia-polyfills@1.0.0-rc.1.0.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0-rc.1.0.1.js",
      "npm:aurelia-route-recognizer@1.0.0-rc.1.0.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.0-rc.1.0.1.js",
      "npm:aurelia-router@1.0.0-rc.1.0.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0-rc.1.0.0.js",
      "npm:aurelia-task-queue@1.0.0-rc.1.0.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0-rc.1.0.1.js",
      "npm:aurelia-templating-binding@1.0.0-rc.1.0.1/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/compose.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/focus.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/hide.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/if.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/repeat.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/show.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0-rc.1.0.1/with.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.1.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.1/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.1/route-href.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.1/route-loader.js",
      "npm:aurelia-templating-router@1.0.0-rc.1.0.1/router-view.js",
      "npm:aurelia-templating@1.0.0-rc.1.0.1.js",
      "npm:aurelia-templating@1.0.0-rc.1.0.1/aurelia-templating.js",
      "npm:aurelia-validatejs@0.6.0.js",
      "npm:aurelia-validatejs@0.6.0/aurelia-validatejs.js",
      "npm:aurelia-validation@0.10.0.js",
      "npm:aurelia-validation@0.10.0/aurelia-validation.js",
      "npm:aurelia-validation@0.10.0/property-info.js",
      "npm:aurelia-validation@0.10.0/validate-binding-behavior.js",
      "npm:aurelia-validation@0.10.0/validate-trigger.js",
      "npm:aurelia-validation@0.10.0/validation-controller.js",
      "npm:aurelia-validation@0.10.0/validation-error.js",
      "npm:aurelia-validation@0.10.0/validation-errors-custom-attribute.js",
      "npm:aurelia-validation@0.10.0/validation-renderer-custom-attribute.js",
      "npm:aurelia-validation@0.10.0/validation-renderer.js",
      "npm:aurelia-validation@0.10.0/validator.js",
      "npm:jquery@2.2.4.js",
      "npm:jquery@2.2.4/dist/jquery.js",
      "npm:ms-signalr-client@2.2.3.js",
      "npm:ms-signalr-client@2.2.3/jquery.signalr-2.2.0.js",
      "npm:process@0.11.5.js",
      "npm:process@0.11.5/browser.js",
      "npm:validate.js@0.10.0.js",
      "npm:validate.js@0.10.0/validate.js"
    ]
  }
});