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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEY7QUFFNUYsMENBQXlDO0FBSXpDLDJFQUF5RTtBQUt6RSw0REFBMEQ7QUFDMUQseUVBQWdGO0FBQ2hGLDZFQUFxRjtBQUNyRixpRUFBK0Q7QUFPL0Q7SUFtQkkseUJBQ1ksbUJBQXNDLEVBQ3RDLE9BQWUsRUFDZixZQUF5QixFQUN6QixjQUFxQyxFQUNyQyxpQkFBMkMsRUFDM0MsZUFBK0I7UUFML0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFDM0Msb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBRTNDLENBQUM7SUF6QkQsc0JBQUksbUNBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBTUQsc0JBQUkseUNBQVk7YUFBaEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDBDQUFhO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFZRCx1Q0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELGtEQUF3QixHQUF4QixVQUF5QixJQUF1QjtRQUM1QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxRQUFRLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDeEMsUUFBUSxDQUFDLDJCQUEyQixFQUFFLENBQUE7SUFDMUMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU8scUNBQVcsR0FBbkI7UUFBQSxpQkFjQztRQWJHLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxrQ0FBZSxFQUFhLENBQUM7UUFDdkQsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUN2QyxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFaEMsZ0RBQWdEO1lBQ2hELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ25ELElBQUksWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMzQyxDQUFDO1FBQ0wsQ0FBQyxFQUNHLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FDMUIsQ0FBQztJQUNOLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxNQUFpQjtRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsdURBQXVELENBQUMsQ0FBQztJQUMzRixDQUFDO0lBeEVEO1FBREMsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQztrQ0FDSCxpQkFBVTs2REFBQztJQVA1QixlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQXFCbUMsd0JBQWlCO1lBQzdCLGVBQU07WUFDRCwwQkFBVztZQUNULHFDQUFxQjtZQUNsQiwwQ0FBd0I7WUFDMUIsZ0NBQWM7T0F6QmxDLGVBQWUsQ0FnRjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhGRCxJQWdGQztBQWhGWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcclxuXHJcbmltcG9ydCB7IEFwcEJ1bmRsZSB9IGZyb20gXCIuLi8uLi9tb2RlbC9BcHBCdW5kbGVcIjtcclxuaW1wb3J0IHsgQXBwVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbC9BcHBVc2VyXCI7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCdW5kbGVkb2NzVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYnVuZGxlZG9jcy91c2Vycy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJ1bmRsZWRvY3NCdW5kbGVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9idW5kbGVkb2NzL2J1bmRsZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEb3dubG9hZEhlbHBlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Rvd25sb2FkLmhlbHBlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtc2VjdXJlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJzZWN1cmUuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VjdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgX2JkVXNlcjogQXBwVXNlcjtcclxuICAgIGdldCBiZFVzZXIoKTogQXBwVXNlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JkVXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKFwidHh0U2VhcmNoUGhyYXNlXCIpXHJcbiAgICBwcml2YXRlIF90eHRTZWFyY2hQaHJhc2U6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2VhcmNoUGhyYXNlOiBzdHJpbmc7XHJcbiAgICBnZXQgc2VhcmNoUGhyYXNlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaFBocmFzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9iZFVzZXJCdW5kbGVzOiBPYnNlcnZhYmxlQXJyYXk8QXBwQnVuZGxlPjtcclxuICAgIGdldCBiZFVzZXJCdW5kbGVzKCk6IE9ic2VydmFibGVBcnJheTxBcHBCdW5kbGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmRVc2VyQnVuZGxlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYmRVc2VyU2VydmljZTogQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2JkQnVuZGxlc1NlcnZpY2U6IEJ1bmRsZWRvY3NCdW5kbGVzU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9kb3dubG9hZEhlbHBlcjogRG93bmxvYWRIZWxwZXJcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGV4dENoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICB0aGlzLmluaXRCdW5kbGVzKCk7XHJcbiAgICAgICAgbGV0IGxpc3RWaWV3OiBSYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGxpc3RWaWV3Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0QnVuZGxlcygpO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlY3VyZS5jb21wb25lbnQubmdPbkluaXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRCdW5kbGVzKCkge1xyXG4gICAgICAgIHRoaXMuX2JkVXNlckJ1bmRsZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PEFwcEJ1bmRsZT4oKTtcclxuICAgICAgICAvL3N1YnNjcmliZSB0byB0aGUgZGF0YVxyXG4gICAgICAgIHRoaXMuX2JkVXNlclNlcnZpY2UubWUoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9iZFVzZXIgPSByZXNwb25zZS5kYXRhWzBdO1xyXG5cclxuICAgICAgICAgICAgLy9wdXNoIGVhY2ggZGF0YSBpdGVtIG9udG8gdGhlIG9ic2VyYnZhYmxlIGFycmF5XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuX2JkVXNlci5CcmllZnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QnJpZWYgPSB0aGlzLl9iZFVzZXIuQnJpZWZzW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmRVc2VyQnVuZGxlcy5wdXNoKGN1cnJlbnRCcmllZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWN1cmUuY29tcG9uZW50LmxvZ291dCcpO1xyXG5cclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zZXRBY2Nlc3NUb2tlbihudWxsKTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW1haWxTdXBwb3J0KCkge1xyXG4gICAgICAgIHRoaXMuX2Rvd25sb2FkSGVscGVyLmRvd25sb2FkKFwibWFpbHRvOnN1cHBvcnRAYnVuZGxlZG9jcy5jb21cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRCdW5kbGUoYnVuZGxlOiBBcHBCdW5kbGUpIHtcclxuICAgICAgICB0aGlzLl9iZEJ1bmRsZXNTZXJ2aWNlLmRvd25sb2FkKGJ1bmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG93bmxvYWRNYW51YWwoKSB7XHJcbiAgICAgICAgdGhpcy5fZG93bmxvYWRIZWxwZXIuZG93bmxvYWQoXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9idW5kbGVkb2NzLWFwcC11c2VyLW1hbnVhbFwiKTtcclxuICAgIH1cclxufSJdfQ==