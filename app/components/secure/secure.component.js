"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var auth_service_1 = require("../../services/auth.service");
var users_service_1 = require("../../services/bundledocs/users.service");
var bundles_service_1 = require("../../services/bundledocs/bundles.service");
var download_helper_1 = require("../../helpers/download.helper");
var SecureComponent = (function () {
    function SecureComponent(_changeDetectionRef, _router, _authService, _bdUserService, _bdBundlesService, _downloadHelper) {
        this._changeDetectionRef = _changeDetectionRef;
        this._router = _router;
        this._authService = _authService;
        this._bdUserService = _bdUserService;
        this._bdBundlesService = _bdBundlesService;
        this._downloadHelper = _downloadHelper;
    }
    Object.defineProperty(SecureComponent.prototype, "bdUser", {
        get: function () { return this._bdUser; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SecureComponent.prototype, "searchPhrase", {
        get: function () { return this._searchPhrase; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SecureComponent.prototype, "bdUserBundles", {
        get: function () {
            return this._bdUserBundles;
        },
        enumerable: true,
        configurable: true
    });
    SecureComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    };
    SecureComponent.prototype.onPullToRefreshInitiated = function ($event) {
        this.initBundles();
    };
    SecureComponent.prototype.ngOnInit = function () {
        this.initBundles();
        this._changeDetectionRef.detectChanges();
        console.log('secure.component.ngOnInit');
    };
    SecureComponent.prototype.initBundles = function () {
        var _this = this;
        this._bdUserBundles = new observable_array_1.ObservableArray();
        //subscribe to the data
        this._bdUserService.me().subscribe(function (response) {
            _this._bdUser = response.data[0];
            _this._bdUserEmail = _this._bdUser.Email;
            for (var i = 0; i <= _this._bdUser.Briefs.length; i++) {
                var currentBrief = _this._bdUser.Briefs[i];
                _this._bdUserBundles.push(currentBrief);
            }
        }, function (err) { return console.log(err); });
        //push each data item onto the obserbvable array
    };
    SecureComponent.prototype.logout = function () {
        this._authService.setAccessToken(null);
        this._router.navigate(["/"]);
        console.log('secure.component.logout');
    };
    SecureComponent.prototype.emailSupport = function () {
        this._downloadHelper.Download("mailto:support@bundledocs.com");
    };
    SecureComponent.prototype.downloadBundle = function (bundle) {
        this._bdBundlesService.download(bundle);
    };
    SecureComponent.prototype.downloadManual = function () {
        this._downloadHelper.Download("https://app.bundledocs.com/bundledocs-app-user-manual");
    };
    __decorate([
        core_1.ViewChild("txtSearchPhrase"),
        __metadata("design:type", core_1.ElementRef)
    ], SecureComponent.prototype, "_txtSearchPhrase", void 0);
    SecureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-secure",
            templateUrl: "secure.component.html"
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            router_1.Router,
            auth_service_1.AuthService,
            users_service_1.BundledocsUserService,
            bundles_service_1.BundledocsBundlesService,
            download_helper_1.DownloadHelper])
    ], SecureComponent);
    return SecureComponent;
}());
exports.SecureComponent = SecureComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEY7QUFFNUYsMENBQXlDO0FBSXpDLDJFQUF5RTtBQUt6RSw0REFBMEQ7QUFDMUQseUVBQWdGO0FBQ2hGLDZFQUFxRjtBQUNyRixpRUFBK0Q7QUFPL0Q7SUFpQkkseUJBQ1ksbUJBQXNDLEVBQ3RDLE9BQWUsRUFDZixZQUF5QixFQUN6QixjQUFxQyxFQUNyQyxpQkFBMkMsRUFFM0MsZUFBK0I7UUFOL0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFFM0Msb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBRTNDLENBQUM7SUF0QkQsc0JBQUksbUNBQU07YUFBVixjQUF3QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBTTlDLHNCQUFJLHlDQUFZO2FBQWhCLGNBQTZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFHekQsc0JBQUksMENBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQWFELHVDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsa0RBQXdCLEdBQXhCLFVBQXlCLE1BQU07UUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVPLHFDQUFXLEdBQW5CO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksa0NBQWUsRUFBYSxDQUFDO1FBQ3ZELHVCQUF1QjtRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDdkMsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdkMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbkQsSUFBSSxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFDTCxDQUFDLEVBQ0csVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUMxQixDQUFDO1FBQ0YsZ0RBQWdEO0lBQ3BELENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxNQUFpQjtRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsdURBQXVELENBQUMsQ0FBQztJQUMzRixDQUFDO0lBcEVEO1FBREMsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQztrQ0FDSCxpQkFBVTs2REFBQztJQVA1QixlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQW1CbUMsd0JBQWlCO1lBQzdCLGVBQU07WUFDRCwwQkFBVztZQUNULHFDQUFxQjtZQUNsQiwwQ0FBd0I7WUFFMUIsZ0NBQWM7T0F4QmxDLGVBQWUsQ0E0RTNCO0lBQUQsc0JBQUM7Q0FBQSxBQTVFRCxJQTRFQztBQTVFWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xyXG5cclxuaW1wb3J0IHsgQXBwQnVuZGxlIH0gZnJvbSBcIi4uLy4uL21vZGVsL0FwcEJ1bmRsZVwiO1xyXG5pbXBvcnQgeyBBcHBVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVsL0FwcFVzZXJcIjtcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJ1bmRsZWRvY3NVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9idW5kbGVkb2NzL3VzZXJzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQnVuZGxlZG9jc0J1bmRsZXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2J1bmRsZWRvY3MvYnVuZGxlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERvd25sb2FkSGVscGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZG93bmxvYWQuaGVscGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJucy1zZWN1cmVcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInNlY3VyZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWN1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfYmRVc2VyOiBBcHBVc2VyO1xyXG5cclxuICAgIHByaXZhdGUgX2JkVXNlckVtYWlsOiBzdHJpbmc7XHJcbiAgICBnZXQgYmRVc2VyKCk6IEFwcFVzZXIgeyByZXR1cm4gdGhpcy5fYmRVc2VyOyB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChcInR4dFNlYXJjaFBocmFzZVwiKVxyXG4gICAgcHJpdmF0ZSBfdHh0U2VhcmNoUGhyYXNlOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHByaXZhdGUgX3NlYXJjaFBocmFzZTogc3RyaW5nO1xyXG4gICAgZ2V0IHNlYXJjaFBocmFzZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc2VhcmNoUGhyYXNlOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYmRVc2VyQnVuZGxlczogT2JzZXJ2YWJsZUFycmF5PEFwcEJ1bmRsZT47XHJcbiAgICBnZXQgYmRVc2VyQnVuZGxlcygpOiBPYnNlcnZhYmxlQXJyYXk8QXBwQnVuZGxlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JkVXNlckJ1bmRsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2JkVXNlclNlcnZpY2U6IEJ1bmRsZWRvY3NVc2VyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9iZEJ1bmRsZXNTZXJ2aWNlOiBCdW5kbGVkb2NzQnVuZGxlc1NlcnZpY2UsXHJcblxyXG4gICAgICAgIHByaXZhdGUgX2Rvd25sb2FkSGVscGVyOiBEb3dubG9hZEhlbHBlclxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25UZXh0Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoJGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5pbml0QnVuZGxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEJ1bmRsZXMoKTtcclxuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWN1cmUuY29tcG9uZW50Lm5nT25Jbml0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0QnVuZGxlcygpIHtcclxuICAgICAgICB0aGlzLl9iZFVzZXJCdW5kbGVzID0gbmV3IE9ic2VydmFibGVBcnJheTxBcHBCdW5kbGU+KCk7XHJcbiAgICAgICAgLy9zdWJzY3JpYmUgdG8gdGhlIGRhdGFcclxuICAgICAgICB0aGlzLl9iZFVzZXJTZXJ2aWNlLm1lKCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYmRVc2VyID0gcmVzcG9uc2UuZGF0YVswXTtcclxuICAgICAgICAgICAgdGhpcy5fYmRVc2VyRW1haWwgPSB0aGlzLl9iZFVzZXIuRW1haWw7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuX2JkVXNlci5CcmllZnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QnJpZWYgPSB0aGlzLl9iZFVzZXIuQnJpZWZzW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmRVc2VyQnVuZGxlcy5wdXNoKGN1cnJlbnRCcmllZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy9wdXNoIGVhY2ggZGF0YSBpdGVtIG9udG8gdGhlIG9ic2VyYnZhYmxlIGFycmF5XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNldEFjY2Vzc1Rva2VuKG51bGwpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VjdXJlLmNvbXBvbmVudC5sb2dvdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBlbWFpbFN1cHBvcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fZG93bmxvYWRIZWxwZXIuRG93bmxvYWQoXCJtYWlsdG86c3VwcG9ydEBidW5kbGVkb2NzLmNvbVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZEJ1bmRsZShidW5kbGU6IEFwcEJ1bmRsZSkge1xyXG4gICAgICAgIHRoaXMuX2JkQnVuZGxlc1NlcnZpY2UuZG93bmxvYWQoYnVuZGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBkb3dubG9hZE1hbnVhbCgpIHtcclxuICAgICAgICB0aGlzLl9kb3dubG9hZEhlbHBlci5Eb3dubG9hZChcImh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2J1bmRsZWRvY3MtYXBwLXVzZXItbWFudWFsXCIpO1xyXG4gICAgfVxyXG59Il19