"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//high priority class, most components exist in this class
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var auth_service_1 = require("../../services/auth.service");
var users_service_1 = require("../../services/bundledocs/users.service");
var bundles_service_1 = require("../../services/bundledocs/bundles.service");
var download_helper_1 = require("../../helpers/download.helper");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var SecureComponent = (function () {
    function SecureComponent(_changeDetectionRef, _router, _authService, _bdUserService, _bdBundlesService, _downloadHelper) {
        this._changeDetectionRef = _changeDetectionRef;
        this._router = _router;
        this._authService = _authService;
        this._bdUserService = _bdUserService;
        this._bdBundlesService = _bdBundlesService;
        this._downloadHelper = _downloadHelper;
        this.count = 0; //used to decide whether the searchbar is visible or hidden
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
    //updates real time on the console 
    SecureComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    };
    //this class decides whether to display the searchbar or not, 1 or 0
    SecureComponent.prototype.onClickSearch = function () {
        this.count++;
        console.log(this.count);
        if (this.count == 1) {
            this._txtSearchPhrase.nativeElement.visibility = "visible";
            this.count--;
            this.count--;
        }
        else if (this.count == 0) {
            this._txtSearchPhrase.nativeElement.visibility = "hidden";
        }
    };
    //refreshing the listview
    SecureComponent.prototype.onPullToRefreshInitiated = function (args) {
        this.initBundles();
        var listView = args.object;
        listView.notifyPullToRefreshFinished();
    };
    //all these actions happen once initialised
    SecureComponent.prototype.ngOnInit = function () {
        this.initBundles();
        this._changeDetectionRef.detectChanges();
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
        this.mainContentText = "Side Drawer Button";
    };
    Object.defineProperty(SecureComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    //class used for opening and displaying the side drawer 
    //count is used once again for the purpose of deciding
    //whether the drawer is opened or closed
    SecureComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
        this.count++;
        console.log(this.count);
        if (this.count == 1) {
            this.count--;
            this.count--;
        }
        else if (this.count == 0) {
            this.onCloseDrawerTap();
        }
    };
    //called once count is 0
    SecureComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    SecureComponent.prototype.initBundles = function () {
        var _this = this;
        this._bdUserBundles = new observable_array_1.ObservableArray();
        //subscribe to the data
        this._bdUserService.me().subscribe(function (response) {
            _this._bdUser = response.data[0];
            //push each data item onto the obserbvable array
            for (var i = 0; i < _this._bdUser.Briefs.length; i++) {
                var currentBrief = _this._bdUser.Briefs[i];
                _this._bdUserBundles.push(currentBrief);
            }
        }, function (err) { return console.log(err); });
    };
    //TODO, not fully functioal yet 
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
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SecureComponent.prototype, "drawerComponent", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBMEQ7QUFDMUQsc0NBQTRGO0FBRTVGLDBDQUF5QztBQUd6QywyRUFBeUU7QUFLekUsNERBQTBEO0FBQzFELHlFQUFnRjtBQUNoRiw2RUFBcUY7QUFDckYsaUVBQStEO0FBSy9ELDhEQUE0RjtBQVk1RjtJQXVCSSx5QkFDWSxtQkFBc0MsRUFDdEMsT0FBZSxFQUNmLFlBQXlCLEVBQ3pCLGNBQXFDLEVBQ3JDLGlCQUEyQyxFQUMzQyxlQUErQjtRQUwvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUMzQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUE1QnBDLFVBQUssR0FBVyxDQUFDLENBQUMsQ0FBQywyREFBMkQ7SUE2QmpGLENBQUM7SUF6Qkwsc0JBQUksbUNBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBT0Qsc0JBQUkseUNBQVk7YUFBaEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDBDQUFhO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFjRCxtQ0FBbUM7SUFDbkMsdUNBQWEsR0FBYixVQUFjLElBQUk7UUFDZCxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsU0FBUyxDQUFDLElBQUks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TSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQXlCbUMsd0JBQWlCO1lBQzdCLGVBQU07WUFDRCwwQkFBVztZQUNULHFDQUFxQjtZQUNsQiwwQ0FBd0I7WUFDMUIsZ0NBQWM7T0E3QmxDLGVBQWUsQ0F3STNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhJRCxJQXdJQztBQXhJWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vaGlnaCBwcmlvcml0eSBjbGFzcywgbW9zdCBjb21wb25lbnRzIGV4aXN0IGluIHRoaXMgY2xhc3NcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcblxuaW1wb3J0IHsgQXBwQnVuZGxlIH0gZnJvbSBcIi4uLy4uL21vZGVsL0FwcEJ1bmRsZVwiO1xuaW1wb3J0IHsgQXBwVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbC9BcHBVc2VyXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJ1bmRsZWRvY3NVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9idW5kbGVkb2NzL3VzZXJzLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJ1bmRsZWRvY3NCdW5kbGVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9idW5kbGVkb2NzL2J1bmRsZXMuc2VydmljZVwiO1xuaW1wb3J0IHsgRG93bmxvYWRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9kb3dubG9hZC5oZWxwZXJcIjtcblxuaW1wb3J0IHsgUGFnZSwgdmlzaWJpbGl0eVByb3BlcnR5IH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xuXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zaWRlZHJhd2VyJ1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJucy1zZWN1cmVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJzZWN1cmUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTZWN1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyID0gMDsgLy91c2VkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBzZWFyY2hiYXIgaXMgdmlzaWJsZSBvciBoaWRkZW5cbiAgICBwcml2YXRlIF9iZFVzZXI6IEFwcFVzZXI7XG4gICAgcHJpdmF0ZSBfbWFpbkNvbnRlbnRUZXh0OiBzdHJpbmc7XG5cbiAgICBnZXQgYmRVc2VyKCk6IEFwcFVzZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmRVc2VyO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoXCJ0eHRTZWFyY2hQaHJhc2VcIilcbiAgICBwcml2YXRlIF90eHRTZWFyY2hQaHJhc2U6IEVsZW1lbnRSZWY7XG5cbiAgICAvL3N0cmluZyB0aGF0IGlzIGVudGVyZWQgaW4gdGhlIHNlYXJjaGJhciBcbiAgICBwcml2YXRlIF9zZWFyY2hQaHJhc2U6IHN0cmluZztcbiAgICBnZXQgc2VhcmNoUGhyYXNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWFyY2hQaHJhc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYmRVc2VyQnVuZGxlczogT2JzZXJ2YWJsZUFycmF5PEFwcEJ1bmRsZT47XG4gICAgZ2V0IGJkVXNlckJ1bmRsZXMoKTogT2JzZXJ2YWJsZUFycmF5PEFwcEJ1bmRsZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmRVc2VyQnVuZGxlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2JkVXNlclNlcnZpY2U6IEJ1bmRsZWRvY3NVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfYmRCdW5kbGVzU2VydmljZTogQnVuZGxlZG9jc0J1bmRsZXNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9kb3dubG9hZEhlbHBlcjogRG93bmxvYWRIZWxwZXJcbiAgICApIHsgfVxuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuXG4gICAgLy91cGRhdGVzIHJlYWwgdGltZSBvbiB0aGUgY29uc29sZSBcbiAgICBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICB9XG5cbiAgICAvL3RoaXMgY2xhc3MgZGVjaWRlcyB3aGV0aGVyIHRvIGRpc3BsYXkgdGhlIHNlYXJjaGJhciBvciBub3QsIDEgb3IgMFxuICAgIG9uQ2xpY2tTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb3VudCk7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ID09IDEpIHtcbiAgICAgICAgICAgICg8U2VhcmNoQmFyPnRoaXMuX3R4dFNlYXJjaFBocmFzZS5uYXRpdmVFbGVtZW50KS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICB0aGlzLmNvdW50LS07XG4gICAgICAgICAgICB0aGlzLmNvdW50LS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAoPFNlYXJjaEJhcj50aGlzLl90eHRTZWFyY2hQaHJhc2UubmF0aXZlRWxlbWVudCkudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3JlZnJlc2hpbmcgdGhlIGxpc3R2aWV3XG4gICAgb25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuaW5pdEJ1bmRsZXMoKTtcbiAgICAgICAgbGV0IGxpc3RWaWV3OiBSYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBsaXN0Vmlldy5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcbiAgICB9XG5cbiAgICAvL2FsbCB0aGVzZSBhY3Rpb25zIGhhcHBlbiBvbmNlIGluaXRpYWxpc2VkXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEJ1bmRsZXMoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLm1haW5Db250ZW50VGV4dCA9IFwiU2lkZSBEcmF3ZXIgQnV0dG9uXCI7XG4gICAgfVxuXG4gICAgZ2V0IG1haW5Db250ZW50VGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21haW5Db250ZW50VGV4dDtcbiAgICB9XG5cbiAgICBzZXQgbWFpbkNvbnRlbnRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbWFpbkNvbnRlbnRUZXh0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy9jbGFzcyB1c2VkIGZvciBvcGVuaW5nIGFuZCBkaXNwbGF5aW5nIHRoZSBzaWRlIGRyYXdlciBcbiAgICAvL2NvdW50IGlzIHVzZWQgb25jZSBhZ2FpbiBmb3IgdGhlIHB1cnBvc2Ugb2YgZGVjaWRpbmdcbiAgICAvL3doZXRoZXIgdGhlIGRyYXdlciBpcyBvcGVuZWQgb3IgY2xvc2VkXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvdW50KTtcbiAgICAgICAgaWYgKHRoaXMuY291bnQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5jb3VudC0tO1xuICAgICAgICAgICAgdGhpcy5jb3VudC0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY291bnQgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlRHJhd2VyVGFwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2NhbGxlZCBvbmNlIGNvdW50IGlzIDBcbiAgICBwdWJsaWMgb25DbG9zZURyYXdlclRhcCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRCdW5kbGVzKCkge1xuICAgICAgICB0aGlzLl9iZFVzZXJCdW5kbGVzID0gbmV3IE9ic2VydmFibGVBcnJheTxBcHBCdW5kbGU+KCk7XG4gICAgICAgIC8vc3Vic2NyaWJlIHRvIHRoZSBkYXRhXG4gICAgICAgIHRoaXMuX2JkVXNlclNlcnZpY2UubWUoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5fYmRVc2VyID0gcmVzcG9uc2UuZGF0YVswXTtcblxuICAgICAgICAgICAgLy9wdXNoIGVhY2ggZGF0YSBpdGVtIG9udG8gdGhlIG9ic2VyYnZhYmxlIGFycmF5XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2JkVXNlci5CcmllZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEJyaWVmID0gdGhpcy5fYmRVc2VyLkJyaWVmc1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9iZFVzZXJCdW5kbGVzLnB1c2goY3VycmVudEJyaWVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy9UT0RPLCBub3QgZnVsbHkgZnVuY3Rpb2FsIHlldCBcbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWN1cmUuY29tcG9uZW50LmxvZ291dCcpO1xuXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNldEFjY2Vzc1Rva2VuKG51bGwpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XG4gICAgfVxuXG4gICAgZW1haWxTdXBwb3J0KCkge1xuICAgICAgICB0aGlzLl9kb3dubG9hZEhlbHBlci5kb3dubG9hZChcIm1haWx0bzpzdXBwb3J0QGJ1bmRsZWRvY3MuY29tXCIpO1xuICAgIH1cblxuICAgIGRvd25sb2FkQnVuZGxlKGJ1bmRsZTogQXBwQnVuZGxlKSB7XG4gICAgICAgIHRoaXMuX2JkQnVuZGxlc1NlcnZpY2UuZG93bmxvYWQoYnVuZGxlKTtcbiAgICB9XG5cbiAgICBkb3dubG9hZE1hbnVhbCgpIHtcbiAgICAgICAgdGhpcy5fZG93bmxvYWRIZWxwZXIuZG93bmxvYWQoXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9idW5kbGVkb2NzLWFwcC11c2VyLW1hbnVhbFwiKTtcbiAgICB9XG5cbn1cbiJdfQ==