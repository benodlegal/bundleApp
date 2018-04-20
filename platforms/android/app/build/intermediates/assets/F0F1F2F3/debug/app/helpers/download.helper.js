"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("utils/utils");
var DownloadHelper = (function () {
    function DownloadHelper() {
    }
    //class used for downloading the bundles/manual
    DownloadHelper.prototype.download = function (url) {
        utils.openUrl(url);
    };
    return DownloadHelper;
}());
exports.DownloadHelper = DownloadHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG93bmxvYWQuaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXFDO0FBRXJDO0lBQUE7SUFNQSxDQUFDO0lBSkcsK0NBQStDO0lBQ3hDLGlDQUFRLEdBQWYsVUFBZ0IsR0FBVztRQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIERvd25sb2FkSGVscGVyIHtcblxuICAgIC8vY2xhc3MgdXNlZCBmb3IgZG93bmxvYWRpbmcgdGhlIGJ1bmRsZXMvbWFudWFsXG4gICAgcHVibGljIGRvd25sb2FkKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHV0aWxzLm9wZW5VcmwodXJsKTtcbiAgICB9XG59Il19