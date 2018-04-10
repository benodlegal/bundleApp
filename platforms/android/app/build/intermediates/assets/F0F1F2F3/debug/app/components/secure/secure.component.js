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
        get: function () {
            return this._bdUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SecureComponent.prototype, "searchPhrase", {
        get: function () {
            return this._searchPhrase;
        },
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
        this._txtSearchPhrase.nativeElement.visibility = "visible";
    };
    SecureComponent.prototype.onPullToRefreshInitiated = function (args) {
        this.initBundles();
        var listView = args.object;
        listView.notifyPullToRefreshFinished();
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
            //push each data item onto the obserbvable array
            for (var i = 0; i <= _this._bdUser.Briefs.length; i++) {
                var currentBrief = _this._bdUser.Briefs[i];
                _this._bdUserBundles.push(currentBrief);
            }
        }, function (err) { return console.log(err); });
    };
    SecureComponent.prototype.logout = function () {
        console.log('secure.component.logout');
        this._authService.setAccessToken(null);
        this._router.navigate(["/"]);
    };
    SecureComponent.prototype.emailSupport = function () {
        this._downloadHelper.download("mailto:support@bundledocs.com");
    };
    SecureComponent.prototype.downloadBundle = function (bundle) {
        this._bdBundlesService.download(bundle);
    };
    SecureComponent.prototype.downloadManual = function () {
        this._downloadHelper.download("https://app.bundledocs.com/bundledocs-app-user-manual");
    };
    SecureComponent.prototype.drawerService = function () {
        this._router.navigate(["/sideDrawer"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEY7QUFFNUYsMENBQXlDO0FBR3pDLDJFQUF5RTtBQUt6RSw0REFBMEQ7QUFDMUQseUVBQWdGO0FBQ2hGLDZFQUFxRjtBQUNyRixpRUFBK0Q7QUFrQi9EO0lBcUJJLHlCQUNZLG1CQUFzQyxFQUN0QyxPQUFlLEVBQ2YsWUFBeUIsRUFDekIsY0FBcUMsRUFDckMsaUJBQTJDLEVBQzNDLGVBQStCO1FBTC9CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDdEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUUzQyxDQUFDO0lBekJELHNCQUFJLG1DQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLHlDQUFZO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSwwQ0FBYTthQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBWUQsdUNBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFjLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsa0RBQXdCLEdBQXhCLFVBQXlCLElBQXVCO1FBQzVDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLFFBQVEsR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4QyxRQUFRLENBQUMsMkJBQTJCLEVBQUUsQ0FBQTtJQUMxQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxxQ0FBVyxHQUFuQjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGtDQUFlLEVBQWEsQ0FBQztRQUN2RCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ3ZDLEtBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoQyxnREFBZ0Q7WUFDaEQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbkQsSUFBSSxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFDTCxDQUFDLEVBQ0csVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUMxQixDQUFDO0lBQ04sQ0FBQztJQUVELGdDQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLE1BQWlCO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCx1Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUE5RUQ7UUFEQyxnQkFBUyxDQUFDLGlCQUFpQixDQUFDO2tDQUNILGlCQUFVOzZEQUFDO0lBVDVCLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBdUJtQyx3QkFBaUI7WUFDN0IsZUFBTTtZQUNELDBCQUFXO1lBQ1QscUNBQXFCO1lBQ2xCLDBDQUF3QjtZQUMxQixnQ0FBYztPQTNCbEMsZUFBZSxDQXdGM0I7SUFBRCxzQkFBQztDQUFBLEFBeEZELElBd0ZDO0FBeEZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xyXG5cclxuaW1wb3J0IHsgQXBwQnVuZGxlIH0gZnJvbSBcIi4uLy4uL21vZGVsL0FwcEJ1bmRsZVwiO1xyXG5pbXBvcnQgeyBBcHBVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVsL0FwcFVzZXJcIjtcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJ1bmRsZWRvY3NVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9idW5kbGVkb2NzL3VzZXJzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQnVuZGxlZG9jc0J1bmRsZXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2J1bmRsZWRvY3MvYnVuZGxlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERvd25sb2FkSGVscGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZG93bmxvYWQuaGVscGVyXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlLCB2aXNpYmlsaXR5UHJvcGVydHkgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcclxuXHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG5cclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zaWRlZHJhd2VyJ1xyXG5pbXBvcnQge1NpZGVEcmF3ZXJDb21wb25lbnR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NpZGVEcmF3ZXIvZHJhd2VyLmNvbXBvbmVudFwiXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtc2VjdXJlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJzZWN1cmUuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VjdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgX2JkVXNlcjogQXBwVXNlcjtcclxuICAgIHByaXZhdGUgX21haW5Db250ZW50VGV4dDogc3RyaW5nO1xyXG5cclxuICAgIGdldCBiZFVzZXIoKTogQXBwVXNlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JkVXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKFwidHh0U2VhcmNoUGhyYXNlXCIpXHJcbiAgICBwcml2YXRlIF90eHRTZWFyY2hQaHJhc2U6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2VhcmNoUGhyYXNlOiBzdHJpbmc7XHJcbiAgICBnZXQgc2VhcmNoUGhyYXNlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaFBocmFzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9iZFVzZXJCdW5kbGVzOiBPYnNlcnZhYmxlQXJyYXk8QXBwQnVuZGxlPjtcclxuICAgIGdldCBiZFVzZXJCdW5kbGVzKCk6IE9ic2VydmFibGVBcnJheTxBcHBCdW5kbGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmRVc2VyQnVuZGxlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYmRVc2VyU2VydmljZTogQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2JkQnVuZGxlc1NlcnZpY2U6IEJ1bmRsZWRvY3NCdW5kbGVzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9kb3dubG9hZEhlbHBlcjogRG93bmxvYWRIZWxwZXJcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGV4dENoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuXHJcbiAgICAgICAgKDxTZWFyY2hCYXI+dGhpcy5fdHh0U2VhcmNoUGhyYXNlLm5hdGl2ZUVsZW1lbnQpLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH1cclxuXHJcbiAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICB0aGlzLmluaXRCdW5kbGVzKCk7XHJcbiAgICAgICAgbGV0IGxpc3RWaWV3OiBSYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGxpc3RWaWV3Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0QnVuZGxlcygpO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlY3VyZS5jb21wb25lbnQubmdPbkluaXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRCdW5kbGVzKCkge1xyXG4gICAgICAgIHRoaXMuX2JkVXNlckJ1bmRsZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PEFwcEJ1bmRsZT4oKTtcclxuICAgICAgICAvL3N1YnNjcmliZSB0byB0aGUgZGF0YVxyXG4gICAgICAgIHRoaXMuX2JkVXNlclNlcnZpY2UubWUoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9iZFVzZXIgPSByZXNwb25zZS5kYXRhWzBdO1xyXG5cclxuICAgICAgICAgICAgLy9wdXNoIGVhY2ggZGF0YSBpdGVtIG9udG8gdGhlIG9ic2VyYnZhYmxlIGFycmF5XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuX2JkVXNlci5CcmllZnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QnJpZWYgPSB0aGlzLl9iZFVzZXIuQnJpZWZzW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmRVc2VyQnVuZGxlcy5wdXNoKGN1cnJlbnRCcmllZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWN1cmUuY29tcG9uZW50LmxvZ291dCcpO1xyXG5cclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zZXRBY2Nlc3NUb2tlbihudWxsKTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW1haWxTdXBwb3J0KCkge1xyXG4gICAgICAgIHRoaXMuX2Rvd25sb2FkSGVscGVyLmRvd25sb2FkKFwibWFpbHRvOnN1cHBvcnRAYnVuZGxlZG9jcy5jb21cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRCdW5kbGUoYnVuZGxlOiBBcHBCdW5kbGUpIHtcclxuICAgICAgICB0aGlzLl9iZEJ1bmRsZXNTZXJ2aWNlLmRvd25sb2FkKGJ1bmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRNYW51YWwoKSB7XHJcbiAgICAgICAgdGhpcy5fZG93bmxvYWRIZWxwZXIuZG93bmxvYWQoXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9idW5kbGVkb2NzLWFwcC11c2VyLW1hbnVhbFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3ZXJTZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvc2lkZURyYXdlclwiXSk7XHJcbiAgICB9XHJcbn1cclxuIl19