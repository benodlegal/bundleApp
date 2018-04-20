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
    function SecureComponent(_changeDetectionRef, _router, //angular routing used to change between routes/classes
        _authService, //used for user authentication
        _bdUserService, _bdBundlesService, _downloadHelper) {
        this._changeDetectionRef = _changeDetectionRef;
        this._router = _router;
        this._authService = _authService;
        this._bdUserService = _bdUserService;
        this._bdBundlesService = _bdBundlesService;
        this._downloadHelper = _downloadHelper;
        this.count = 0; //used to decide whether the searchbar is visible or hidden
    }
    Object.defineProperty(SecureComponent.prototype, "bdUser", {
        //gets the bundledocs user info and returns it. Go to definition to see class
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
    //also used to push the listview down to accomodate for the searchbar when visible
    SecureComponent.prototype.onClickSearch = function () {
        this.count++;
        console.log(this.count);
        if (this.count == 1) {
            this._txtSearchPhrase.nativeElement.visibility = "visible";
            this.count--;
            this.count--;
            this._lstBundles.nativeElement.marginTop = 50;
        }
        else if (this.count == 0) {
            this._txtSearchPhrase.nativeElement.visibility = "hidden";
            this._lstBundles.nativeElement.marginTop = 0;
        }
    };
    //refreshing the listview
    SecureComponent.prototype.onPullToRefreshInitiated = function (args) {
        this.initBundles();
        var listView = args.object;
        listView.notifyPullToRefreshFinished();
    };
    //all these actions happen once class is initialised (once logged in)
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
    //opens up compose message to support@legalit from whatever 
    //account you have signed in on your device
    SecureComponent.prototype.emailSupport = function () {
        this._downloadHelper.download("mailto:support@bundledocs.com");
    };
    //downloads whatever bundle is clicked 
    SecureComponent.prototype.downloadBundle = function (bundle) {
        this._bdBundlesService.download(bundle);
    };
    //downloads the user manual describing bundledocs
    SecureComponent.prototype.downloadManual = function () {
        this._downloadHelper.download("https://app.bundledocs.com/bundledocs-app-user-manual");
    };
    __decorate([
        core_1.ViewChild("txtSearchPhrase"),
        __metadata("design:type", core_1.ElementRef)
    ], SecureComponent.prototype, "_txtSearchPhrase", void 0);
    __decorate([
        core_1.ViewChild("lstBundles"),
        __metadata("design:type", core_1.ElementRef)
    ], SecureComponent.prototype, "_lstBundles", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBMEQ7QUFDMUQsc0NBQTRGO0FBRTVGLDBDQUF5QztBQUd6QywyRUFBeUU7QUFLekUsNERBQTBEO0FBQzFELHlFQUFnRjtBQUNoRiw2RUFBcUY7QUFDckYsaUVBQStEO0FBSy9ELDhEQUE0RjtBQVc1RjtJQWlDSSx5QkFDWSxtQkFBc0MsRUFDdEMsT0FBZSxFQUFFLHVEQUF1RDtRQUN4RSxZQUF5QixFQUFFLDhCQUE4QjtRQUN6RCxjQUFxQyxFQUNyQyxpQkFBMkMsRUFDM0MsZUFBK0I7UUFML0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFDM0Msb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBdENwQyxVQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUMsMkRBQTJEO0lBdUNqRixDQUFDO0lBbENMLHNCQUFJLG1DQUFNO1FBRFYsNkVBQTZFO2FBQzdFO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFlRCxzQkFBSSx5Q0FBWTthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksMENBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQWVELG1DQUFtQztJQUNuQyx1Q0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNkLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsT0FBTyxDQUFD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SSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUEzSUQ7UUFEQyxnQkFBUyxDQUFDLGlCQUFpQixDQUFDO2tDQUNILGlCQUFVOzZEQUFDO0lBTXJDO1FBREMsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQ0osaUJBQVU7d0RBQUM7SUF3Qkk7UUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FBeUIsZ0NBQXNCOzREQUFDO0lBM0N6RSxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQW1DbUMsd0JBQWlCO1lBQzdCLGVBQU07WUFDRCwwQkFBVztZQUNULHFDQUFxQjtZQUNsQiwwQ0FBd0I7WUFDMUIsZ0NBQWM7T0F2Q2xDLGVBQWUsQ0EwSjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTFKRCxJQTBKQztBQTFKWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vaGlnaCBwcmlvcml0eSBjbGFzcywgbW9zdCBjb21wb25lbnRzIGV4aXN0IGluIHRoaXMgY2xhc3NcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcblxuaW1wb3J0IHsgQXBwQnVuZGxlIH0gZnJvbSBcIi4uLy4uL21vZGVsL0FwcEJ1bmRsZVwiO1xuaW1wb3J0IHsgQXBwVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbC9BcHBVc2VyXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJ1bmRsZWRvY3NVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9idW5kbGVkb2NzL3VzZXJzLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJ1bmRsZWRvY3NCdW5kbGVzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9idW5kbGVkb2NzL2J1bmRsZXMuc2VydmljZVwiO1xuaW1wb3J0IHsgRG93bmxvYWRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9kb3dubG9hZC5oZWxwZXJcIjtcblxuaW1wb3J0IHsgUGFnZSwgdmlzaWJpbGl0eVByb3BlcnR5IH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xuXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zaWRlZHJhd2VyJ1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJucy1zZWN1cmVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJzZWN1cmUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTZWN1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyID0gMDsgLy91c2VkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBzZWFyY2hiYXIgaXMgdmlzaWJsZSBvciBoaWRkZW5cbiAgICBwcml2YXRlIF9iZFVzZXI6IEFwcFVzZXI7XG4gICAgcHJpdmF0ZSBfbWFpbkNvbnRlbnRUZXh0OiBzdHJpbmc7XG5cbiAgICAvL2dldHMgdGhlIGJ1bmRsZWRvY3MgdXNlciBpbmZvIGFuZCByZXR1cm5zIGl0LiBHbyB0byBkZWZpbml0aW9uIHRvIHNlZSBjbGFzc1xuICAgIGdldCBiZFVzZXIoKTogQXBwVXNlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iZFVzZXI7IFxuICAgIH1cblxuICAgIC8vaW1wb3J0YW50IGZvciBkZWZpbmluZyB3aGV0aGVyIHRoZSBzZWFyY2ggYmFyIGlzIHZpc2libGUgb3IgaGlkZGVuXG4gICAgLy9zZXRzIGEgcHJpdmF0ZSB2YXJpYWJsZSB0aGF0IHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgb3V0Y29tZSBpbiB0aGUgb25DbGlja1NlYXJjaCgpIGNsYXNzXG4gICAgQFZpZXdDaGlsZChcInR4dFNlYXJjaFBocmFzZVwiKVxuICAgIHByaXZhdGUgX3R4dFNlYXJjaFBocmFzZTogRWxlbWVudFJlZjtcblxuICAgIC8vc2ltaWxhciB0byBhYm92ZSwgdGhpcyBpcyB1c2VkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBtYXJnaW4gb2YgdGhlIGxpc3QgdmlldyBzaG91bGQgYmUgc2V0LlxuICAgIC8vd2hlbiB0aGUgc2VhcmNoIGJhciBpcyB2aXNpYmxlLCB0aGUgbGlzdCB2aWV3IG5lZWRzIHRvIGJlIHB1c2hlZCBkb3duLCBhbmQgd2hlbiBpdCBnb2VzIGF3YXksIFxuICAgIC8vaXQgbmVlZHMgdG8gYmUgcHV0IGJhY2sgaW4gdGhlIHJpZ2h0IHBsYWNlXG4gICAgQFZpZXdDaGlsZChcImxzdEJ1bmRsZXNcIilcbiAgICBwcml2YXRlIF9sc3RCdW5kbGVzOkVsZW1lbnRSZWY7XG5cbiAgICAvL3N0cmluZyB0aGF0IGlzIGVudGVyZWQgaW4gdGhlIHNlYXJjaGJhciBcbiAgICBwcml2YXRlIF9zZWFyY2hQaHJhc2U6IHN0cmluZztcbiAgICBnZXQgc2VhcmNoUGhyYXNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWFyY2hQaHJhc2U7XG4gICAgfVxuXG4gICAgLy9vYnNlcnZhYmxlIGFycmF5IHRoYXQgaXMgdXNlZCBmb3IgaG9sZGluZyB0aGUgdXNlciBidW5kbGVzIFxuICAgIHByaXZhdGUgX2JkVXNlckJ1bmRsZXM6IE9ic2VydmFibGVBcnJheTxBcHBCdW5kbGU+O1xuICAgIGdldCBiZFVzZXJCdW5kbGVzKCk6IE9ic2VydmFibGVBcnJheTxBcHBCdW5kbGU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JkVXNlckJ1bmRsZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgLy9hbmd1bGFyIHJvdXRpbmcgdXNlZCB0byBjaGFuZ2UgYmV0d2VlbiByb3V0ZXMvY2xhc3Nlc1xuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIC8vdXNlZCBmb3IgdXNlciBhdXRoZW50aWNhdGlvblxuICAgICAgICBwcml2YXRlIF9iZFVzZXJTZXJ2aWNlOiBCdW5kbGVkb2NzVXNlclNlcnZpY2UsIFxuICAgICAgICBwcml2YXRlIF9iZEJ1bmRsZXNTZXJ2aWNlOiBCdW5kbGVkb2NzQnVuZGxlc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2Rvd25sb2FkSGVscGVyOiBEb3dubG9hZEhlbHBlclxuICAgICkgeyB9XG5cbiAgICAvL1RoaXMgaXMgdXNlZCBmb3IgdGhlIHNpZGUgZHJhd2VyXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuXG4gICAgLy91cGRhdGVzIHJlYWwgdGltZSBvbiB0aGUgY29uc29sZSBcbiAgICBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcbiAgICB9XG5cbiAgICAvL3RoaXMgY2xhc3MgZGVjaWRlcyB3aGV0aGVyIHRvIGRpc3BsYXkgdGhlIHNlYXJjaGJhciBvciBub3QsIDEgb3IgMFxuICAgIC8vYWxzbyB1c2VkIHRvIHB1c2ggdGhlIGxpc3R2aWV3IGRvd24gdG8gYWNjb21vZGF0ZSBmb3IgdGhlIHNlYXJjaGJhciB3aGVuIHZpc2libGVcbiAgICBvbkNsaWNrU2VhcmNoKCkge1xuICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY291bnQpO1xuICAgICAgICBpZiAodGhpcy5jb3VudCA9PSAxKSB7XG4gICAgICAgICAgICAoPFNlYXJjaEJhcj50aGlzLl90eHRTZWFyY2hQaHJhc2UubmF0aXZlRWxlbWVudCkudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgdGhpcy5jb3VudC0tO1xuICAgICAgICAgICAgdGhpcy5jb3VudC0tO1xuICAgICAgICAgICAgKDxSYWRMaXN0Vmlldz50aGlzLl9sc3RCdW5kbGVzLm5hdGl2ZUVsZW1lbnQpLm1hcmdpblRvcCA9IDUwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY291bnQgPT0gMCkge1xuICAgICAgICAgICAgKDxTZWFyY2hCYXI+dGhpcy5fdHh0U2VhcmNoUGhyYXNlLm5hdGl2ZUVsZW1lbnQpLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgKDxSYWRMaXN0Vmlldz50aGlzLl9sc3RCdW5kbGVzLm5hdGl2ZUVsZW1lbnQpLm1hcmdpblRvcCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3JlZnJlc2hpbmcgdGhlIGxpc3R2aWV3XG4gICAgb25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuaW5pdEJ1bmRsZXMoKTtcbiAgICAgICAgbGV0IGxpc3RWaWV3OiBSYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBsaXN0Vmlldy5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcbiAgICB9XG5cbiAgICAvL2FsbCB0aGVzZSBhY3Rpb25zIGhhcHBlbiBvbmNlIGNsYXNzIGlzIGluaXRpYWxpc2VkIChvbmNlIGxvZ2dlZCBpbilcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0QnVuZGxlcygpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRUZXh0ID0gXCJTaWRlIERyYXdlciBCdXR0b25cIjtcbiAgICB9XG5cbiAgICBnZXQgbWFpbkNvbnRlbnRUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFpbkNvbnRlbnRUZXh0O1xuICAgIH1cblxuICAgIHNldCBtYWluQ29udGVudFRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9tYWluQ29udGVudFRleHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvL2NsYXNzIHVzZWQgZm9yIG9wZW5pbmcgYW5kIGRpc3BsYXlpbmcgdGhlIHNpZGUgZHJhd2VyIFxuICAgIC8vY291bnQgaXMgdXNlZCBvbmNlIGFnYWluIGZvciB0aGUgcHVycG9zZSBvZiBkZWNpZGluZ1xuICAgIC8vd2hldGhlciB0aGUgZHJhd2VyIGlzIG9wZW5lZCBvciBjbG9zZWRcbiAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY291bnQpO1xuICAgICAgICBpZiAodGhpcy5jb3VudCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50LS07XG4gICAgICAgICAgICB0aGlzLmNvdW50LS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb3VudCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2VEcmF3ZXJUYXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vY2FsbGVkIG9uY2UgY291bnQgaXMgMFxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEJ1bmRsZXMoKSB7XG4gICAgICAgIHRoaXMuX2JkVXNlckJ1bmRsZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PEFwcEJ1bmRsZT4oKTtcbiAgICAgICAgLy9zdWJzY3JpYmUgdG8gdGhlIGRhdGFcbiAgICAgICAgdGhpcy5fYmRVc2VyU2VydmljZS5tZSgpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9iZFVzZXIgPSByZXNwb25zZS5kYXRhWzBdO1xuXG4gICAgICAgICAgICAvL3B1c2ggZWFjaCBkYXRhIGl0ZW0gb250byB0aGUgb2JzZXJidmFibGUgYXJyYXlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYmRVc2VyLkJyaWVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50QnJpZWYgPSB0aGlzLl9iZFVzZXIuQnJpZWZzW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuX2JkVXNlckJ1bmRsZXMucHVzaChjdXJyZW50QnJpZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvL1RPRE8sIG5vdCBmdWxseSBmdW5jdGlvYWwgeWV0IFxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlY3VyZS5jb21wb25lbnQubG9nb3V0Jyk7XG5cbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2V0QWNjZXNzVG9rZW4obnVsbCk7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKTtcbiAgICB9XG5cbiAgICAvL29wZW5zIHVwIGNvbXBvc2UgbWVzc2FnZSB0byBzdXBwb3J0QGxlZ2FsaXQgZnJvbSB3aGF0ZXZlciBcbiAgICAvL2FjY291bnQgeW91IGhhdmUgc2lnbmVkIGluIG9uIHlvdXIgZGV2aWNlXG4gICAgZW1haWxTdXBwb3J0KCkge1xuICAgICAgICB0aGlzLl9kb3dubG9hZEhlbHBlci5kb3dubG9hZChcIm1haWx0bzpzdXBwb3J0QGJ1bmRsZWRvY3MuY29tXCIpO1xuICAgIH1cblxuICAgIC8vZG93bmxvYWRzIHdoYXRldmVyIGJ1bmRsZSBpcyBjbGlja2VkIFxuICAgIGRvd25sb2FkQnVuZGxlKGJ1bmRsZTogQXBwQnVuZGxlKSB7XG4gICAgICAgIHRoaXMuX2JkQnVuZGxlc1NlcnZpY2UuZG93bmxvYWQoYnVuZGxlKTtcbiAgICB9XG5cbiAgICAvL2Rvd25sb2FkcyB0aGUgdXNlciBtYW51YWwgZGVzY3JpYmluZyBidW5kbGVkb2NzXG4gICAgZG93bmxvYWRNYW51YWwoKSB7XG4gICAgICAgIHRoaXMuX2Rvd25sb2FkSGVscGVyLmRvd25sb2FkKFwiaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYnVuZGxlZG9jcy1hcHAtdXNlci1tYW51YWxcIik7XG4gICAgfVxuXG59XG4iXX0=