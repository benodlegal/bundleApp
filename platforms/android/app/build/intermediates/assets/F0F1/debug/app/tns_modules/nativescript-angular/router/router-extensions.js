Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ns_location_strategy_1 = require("./ns-location-strategy");
var frame_1 = require("tns-core-modules/ui/frame");
var RouterExtensions = (function () {
    function RouterExtensions(router, locationStrategy, frame) {
        this.router = router;
        this.locationStrategy = locationStrategy;
        this.frame = frame;
    }
    RouterExtensions.prototype.navigate = function (commands, extras) {
        if (extras) {
            this.locationStrategy._setNavigationOptions(extras);
        }
        return this.router.navigate(commands, extras);
    };
    RouterExtensions.prototype.navigateByUrl = function (url, options) {
        if (options) {
            this.locationStrategy._setNavigationOptions(options);
        }
        return this.router.navigateByUrl(url);
    };
    RouterExtensions.prototype.back = function () {
        this.locationStrategy.back();
    };
    RouterExtensions.prototype.canGoBack = function () {
        return this.locationStrategy.canGoBack();
    };
    RouterExtensions.prototype.backToPreviousPage = function () {
        this.frame.goBack();
    };
    RouterExtensions.prototype.canGoBackToPreviousPage = function () {
        return this.frame.canGoBack();
    };
    RouterExtensions.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    RouterExtensions.ctorParameters = function () { return [
        { type: router_1.Router, },
        { type: ns_location_strategy_1.NSLocationStrategy, },
        { type: frame_1.Frame, },
    ]; };
    return RouterExtensions;
}());
exports.RouterExtensions = RouterExtensions;
//# sourceMappingURL=router-extensions.js.map