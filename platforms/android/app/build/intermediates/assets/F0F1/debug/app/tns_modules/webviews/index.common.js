"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web_view_1 = require("tns-core-modules/ui/web-view");
var fs = require("tns-core-modules/file-system");
var webViewInterfaceModule = require("nativescript-webview-interface");
var Handlebars = require("handlebars");
var platform_1 = require("platform");
var colorModule = require("color");
var WebViews = (function () {
    function WebViews(webViewElementRef, folder, file) {
        this.isDebugEnabled = false;
        this.element = webViewElementRef;
        this.documents = fs.knownFolders.currentApp();
        this.path = fs.path.join(this.documents.path, folder, file);
        if (this.isDebugEnabled)
            console.log('WebViewService: Path', this.path);
        this.htmlFile = this.documents.getFolder(folder).getFile(file);
        this.context = {
            scripts: [],
            styles: []
        };
    }
    WebViews.prototype.debug = function (value) {
        if (value === void 0) { value = true; }
        this.isDebugEnabled = value;
    };
    WebViews.prototype.set = function (key, value) {
        this.context[key] = value;
    };
    WebViews.prototype.get = function (key) {
        return this.context[key];
    };
    WebViews.prototype.load = function (initialContext) {
        var _this = this;
        if (initialContext) {
            for (var index in initialContext) {
                if (initialContext.hasOwnProperty(index)) {
                    this.context[index] = initialContext;
                }
            }
        }
        return new Promise(function (resolve, reject) {
            var webView = _this.element.nativeElement;
            _this.element = webView;
            if (platform_1.isIOS) {
                webView.ios.scrollView.bounces = false;
                var translucent = new colorModule.Color("#00ff0000");
                _this.element.ios.backgroundColor = translucent.ios;
                _this.element.ios.opaque = false;
            }
            else if (platform_1.isAndroid) {
                webView.android.setBackgroundColor(0x00000000);
                webView.android.setLayerType(webView.android.view.View.LAYER_TYPE_SOFTWARE, null);
            }
            _this.htmlFile.readText().then(function (content) {
                var contentBefore = "\n                <!DOCTYPE html>\n                    <html>\n                        <head>\n                            {{#each styles}}\n                                <style>{{{ this }}}</style>\n                            {{/each}}\n\n                            <script>\n                                " + NSWebViewinterface + "\n                            </script>\n\n                            {{#scripts}}\n                                <script {{#params }} {{key}}=\"{{value}}\" {{/params}}>{{{ content }}}</script>\n                            {{/scripts}}\n                        <head>\n                        <body>";
                var contentAfter = '<body></html>';
                var finalContent = contentBefore + content + contentAfter;
                var template = Handlebars.compile(finalContent);
                var html = template(_this.context);
                if (_this.isDebugEnabled)
                    console.log('WebView: context: ', _this.context);
                if (_this.isDebugEnabled)
                    console.log('WebView: index.html content: {', html.replace(/\n/gi, '<br>'), '}');
                _this.loadEventHandler = _this.loadEventHandlerWrapper(resolve, reject);
                webView.on('loadFinished', _this.loadEventHandler);
                _this.interface = new webViewInterfaceModule.WebViewInterface(_this.element, html);
            }).catch(function (err) {
                if (_this.isDebugEnabled)
                    console.error('WebView: Error reading index.html', err);
                reject(err);
            });
        });
    };
    WebViews.prototype.addScript = function (folderName, fileName, params) {
        var _this = this;
        var fileReference = this.documents.getFolder(folderName).getFile(fileName);
        return new Promise(function (resolve, reject) {
            fileReference.readText().then(function (content) {
                _this.context.scripts.push({ content: content, params: params || [] });
                resolve();
            }).catch(function (err) {
                if (_this.isDebugEnabled)
                    console.log('WebView: Error reading index.html', err);
                reject(err);
            });
        });
    };
    WebViews.prototype.addStyle = function (folderName, fileName) {
        var _this = this;
        var fileReference = this.documents.getFolder(folderName).getFile(fileName);
        return new Promise(function (resolve, reject) {
            fileReference.readText().then(function (content) {
                _this.context.styles.push(content);
                resolve();
            }).catch(function (err) {
                if (_this.isDebugEnabled)
                    console.log('WebView: Error reading index.html', err);
                reject(err);
            });
        });
    };
    WebViews.prototype.dispatch = function () {
        this.element.off(web_view_1.WebView.loadFinishedEvent, this.loadEventHandler);
    };
    WebViews.prototype.loadEventHandlerWrapper = function (resolve, reject) {
        var _this = this;
        var loadedTimes = 0;
        if (this.isDebugEnabled)
            console.log('\nWebView: loadEventHandler called');
        return function (args) {
            loadedTimes++;
            var webview = args.object;
            if (platform_1.isAndroid) {
                webview.android.getSettings().setDisplayZoomControls(false);
            }
            if (_this.isDebugEnabled)
                console.log('\n WebView: loadEventHandler function within called #', loadedTimes);
            for (var index in args) {
                if (_this.isDebugEnabled)
                    console.log('WebView: ARG', index, '=', args[index]);
            }
            var message;
            if (!args.error) {
                message = "WebView finished loading " + args.url;
                if (_this.isDebugEnabled)
                    console.log('WebView: webViewModule.WebView.loadFinishedEvent message', message);
            }
            else {
                message = "Error loading [" + args.url + "]: " + args.error;
                if (_this.isDebugEnabled)
                    console.log('WebView:  webViewModule.WebView.loadFinishedEvent message', message);
            }
            resolve();
        };
    };
    return WebViews;
}());
exports.WebViews = WebViews;
var NSWebViewinterface = "\n/*\n Extracted from  \"nativescript-webiew-interface\" module.\n*/\n\n/**\n * WebViewInterface class to handle communication between webView and Android/iOS.\n */\nvar NSWebViewinterface = (function () {\n    function NSWebViewinterface() {\n        \n        /**\n         * Mapping of native eventName and its handler in webView\n         */\n        this.eventListenerMap = {};\n        \n        /**\n         * Mapping of JS Call responseId and result for iOS\n         */\n        this._iosResponseMap = {};\n        \n        /**\n         * Counter of iOS JS Call responseId\n         */\n        this._iosCntResponseId = 0;\n    }\n    \n    /**\n     * Handles events/commands emitted by android/ios. This function is called from nativescript.\n     * @param   {string}    eventName - Native event/command name\n     * @param   {data}      data - Payload for the event/command\n     */\n    NSWebViewinterface.prototype._onNativeEvent = function (eventName, data) {\n        var lstEvtListeners = this.eventListenerMap[eventName] || [];\n        for (var _i = 0; _i < lstEvtListeners.length; _i++) {\n            var listener = lstEvtListeners[_i];\n            var retnVal = listener && listener(data);\n            // if any handler return false, not executing any further handlers for that event.\n            if (retnVal === false) {\n                break;\n            }\n        }\n    };\n    \n   /**\n     * Handles JS function calls by android/ios. This function is called from nativescript.\n     * Result value of JS function call can be promise or any other data.\n     * @param   {number}    reqId - Internal communication id\n     * @param   {string}    functionName - Function to be executed in webView\n     * @param   {any[]}     args  \n     */\n    NSWebViewinterface.prototype._callJSFunction = function (reqId, functionName, args) {\n        var _this = this;\n        var resolvedFn = _this._getResolvedFunction(functionName);\n        if(resolvedFn){\n            var retnVal = resolvedFn.apply(window, args);\n            if (retnVal && retnVal.then) {\n                retnVal.then(function (value) {\n                    _this._sendJSCallResponse(reqId, value);\n                }, function(error){\n                    _this._sendJSCallResponse(reqId, error, true);\n                });\n            }\n            else {\n                this._sendJSCallResponse(reqId, retnVal);\n            }\n        }\n    }\n    \n    /**\n     * Resolves a function, if the function to be executed is in deep object chain.\n     * e.g If we want to execute a function 'parent.child.child.fn' from native app, \n     * this function will extract fn from the object chain. \n     * We can do it by using eval also, but as there is a way, why to invite unknown security risks? \n     * \n     */\n    NSWebViewinterface.prototype._getResolvedFunction = function(functionName){\n        if(functionName && (functionName = functionName.trim()).length){\n            functionName = functionName.indexOf('window.') === 0 ? functionName.replace('window.', '') : functionName;\n            var arrFnPath = functionName.split('.');\n            var fn = window;\n            for(var i =0; i < arrFnPath.length; i++){\n                if(!fn[arrFnPath[i]]){\n                    fn = null;\n                    break;\n                }\n                fn = fn[arrFnPath[i]]; \n            }\n            return fn;\n        }\n    }\n    \n    /**\n     * Returns JS Call response by emitting internal _jsCallRespone event\n     */\n    NSWebViewinterface.prototype._sendJSCallResponse = function (reqId, response, isError) {\n        var oResponse = {\n            reqId: reqId,\n            response: response || null,\n            isError: !!isError\n        };\n        this.emit('_jsCallResponse', oResponse);\n    };\n    \n    /**\n     * Creates temporary iFrame element to load custom url, for sending handshake message \n     * to iOS which is necessary to initiate data transfer from webView to iOS\n     */\n    NSWebViewinterface.prototype._createIFrame = function (src) {\n        var rootElm = document.documentElement;\n        var newFrameElm = document.createElement(\"IFRAME\");\n        newFrameElm.setAttribute(\"src\", src);\n        rootElm.appendChild(newFrameElm);\n        return newFrameElm;\n    };\n    \n    /**\n     * Sends handshaking signal to iOS using custom url, for sending event payload or JS Call response.\n     * As iOS do not allow to send any data from webView. Here we are sending data in two steps.\n     * 1. Send handshake signal, by loading custom url in iFrame with metadata (eventName, unique responseId)\n     * 2. On intercept of this request, iOS calls _getIOSResponse with the responseId to fetch the data.\n     */\n    NSWebViewinterface.prototype._emitEventToIOS = function (eventName, data) {\n        this._iosResponseMap[++this._iosCntResponseId] = data;\n        var metadata = { eventName: eventName, resId: this._iosCntResponseId };\n        var url = 'js2ios:' + JSON.stringify(metadata);\n        var iFrame = this._createIFrame(url);\n        iFrame.parentNode.removeChild(iFrame);\n    };\n    \n    /**\n     * Returns data to iOS. This function is called from iOS.\n     */\n    NSWebViewinterface.prototype._getIOSResponse = function (resId) {\n        var response = this._iosResponseMap[resId];\n        delete this._iosResponseMap[resId];\n        return response;\n    };\n    \n    /**\n     * Calls native android function to emit event and payload to android\n     */\n    NSWebViewinterface.prototype._emitEventToAndroid = function (eventName, data) {\n        window.androidWebViewInterface.handleEventFromWebView(eventName, data);\n    };\n    \n    /**\n     * Registers handlers for android/ios event/command\n     */\n    NSWebViewinterface.prototype.on = function (eventName, callback) {\n        var lstListeners = this.eventListenerMap[eventName] || (this.eventListenerMap[eventName] = []);\n        lstListeners.push(callback);\n    };\n    \n    /**\n     * Emits event to android/ios\n     */\n    NSWebViewinterface.prototype.emit = function (eventName, data) {\n        var strData = typeof data === 'object' ? JSON.stringify(data) : data;\n        if (window.androidWebViewInterface) {\n            this._emitEventToAndroid(eventName, strData);\n        }\n        else {\n            this._emitEventToIOS(eventName, strData);\n        }\n    };\n    return NSWebViewinterface;\n})();\nwindow.nsWebViewInterface = new NSWebViewinterface();\n";
//# sourceMappingURL=index.common.js.map