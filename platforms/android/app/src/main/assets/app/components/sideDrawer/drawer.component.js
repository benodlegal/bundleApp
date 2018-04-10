"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> sidedrawer-getting-started-angular
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var download_helper_1 = require("../../helpers/download.helper");
var bundles_service_1 = require("../../services/bundledocs/bundles.service");
var auth_service_1 = require("../../services/auth.service");
var router_1 = require("@angular/router");
var SideDrawerComponent = (function () {
    function SideDrawerComponent(_changeDetectionRef, _downloadHelper, _bdBundlesService, _authService, _router) {
        this._changeDetectionRef = _changeDetectionRef;
        this._downloadHelper = _downloadHelper;
        this._bdBundlesService = _bdBundlesService;
        this._authService = _authService;
        this._router = _router;
    }
    SideDrawerComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    SideDrawerComponent.prototype.ngOnInit = function () {
        this.mainContentText = "Side Drawer Button";
    };
    Object.defineProperty(SideDrawerComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    SideDrawerComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    SideDrawerComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    SideDrawerComponent.prototype.emailSupport = function () {
        this._downloadHelper.download("mailto:support@bundledocs.com");
    };
    SideDrawerComponent.prototype.downloadBundle = function (bundle) {
        this._bdBundlesService.download(bundle);
    };
    SideDrawerComponent.prototype.downloadManual = function () {
        this._downloadHelper.download("https://app.bundledocs.com/bundledocs-app-user-manual");
    };
    SideDrawerComponent.prototype.logout = function () {
        console.log('secure.component.logout');
        this._authService.setAccessToken(null);
        this._router.navigate(["/"]);
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SideDrawerComponent.prototype, "drawerComponent", void 0);
    SideDrawerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'drawer.component.html'
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            download_helper_1.DownloadHelper,
            bundles_service_1.BundledocsBundlesService,
            auth_service_1.AuthService,
            router_1.Router])
    ], SideDrawerComponent);
    return SideDrawerComponent;
}());
exports.SideDrawerComponent = SideDrawerComponent;
// << sidedrawer-getting-started-angular 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBd0M7QUFDeEMsc0NBQStGO0FBSS9GLDhEQUE0RjtBQUU1RixpRUFBK0Q7QUFFL0QsNkVBQXFGO0FBQ3JGLDREQUEwRDtBQUMxRCwwQ0FBeUM7QUFNekM7SUFJSSw2QkFDWSxtQkFBc0MsRUFDdEMsZUFBK0IsRUFDL0IsaUJBQTJDLEVBQzNDLFlBQXlCLEVBQ3pCLE9BQWU7UUFKZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFHM0IsQ0FBQztJQUtELDZDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLENBQUM7SUFDaEQsQ0FBQztJQUVELHNCQUFJLGdEQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO2FBRUQsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUpBO0lBTU0sd0NBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSw4Q0FBZ0IsR0FBdkI7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCwwQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsNENBQWMsR0FBZCxVQUFlLE1BQWlCO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDRDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCxvQ0FBTSxHQUFOO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBN0NrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7Z0VBQUM7SUFkekUsbUJBQW1CO1FBSi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQU1tQyx3QkFBaUI7WUFDckIsZ0NBQWM7WUFDWiwwQ0FBd0I7WUFDN0IsMEJBQVc7WUFDaEIsZUFBTTtPQVRsQixtQkFBbUIsQ0E0RC9CO0lBQUQsMEJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSxrREFBbUI7QUE2RGhDLHdDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IHNpZGVkcmF3ZXItZ2V0dGluZy1zdGFydGVkLWFuZ3VsYXJcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCB7IERvd25sb2FkSGVscGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZG93bmxvYWQuaGVscGVyXCI7XG5pbXBvcnQgeyBBcHBCdW5kbGUgfSBmcm9tIFwiLi4vLi4vbW9kZWwvQXBwQnVuZGxlXCI7XG5pbXBvcnQgeyBCdW5kbGVkb2NzQnVuZGxlc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYnVuZGxlZG9jcy9idW5kbGVzLnNlcnZpY2VcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLCAgICBcbiAgICB0ZW1wbGF0ZVVybDogJ2RyYXdlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZURyYXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJpdmF0ZSBfZG93bmxvYWRIZWxwZXI6IERvd25sb2FkSGVscGVyLFxuICAgICAgICBwcml2YXRlIF9iZEJ1bmRsZXNTZXJ2aWNlOiBCdW5kbGVkb2NzQnVuZGxlc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRUZXh0ID0gXCJTaWRlIERyYXdlciBCdXR0b25cIjtcbiAgICB9XG5cbiAgICBnZXQgbWFpbkNvbnRlbnRUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFpbkNvbnRlbnRUZXh0O1xuICAgIH1cblxuICAgIHNldCBtYWluQ29udGVudFRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9tYWluQ29udGVudFRleHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgZW1haWxTdXBwb3J0KCkge1xuICAgICAgICB0aGlzLl9kb3dubG9hZEhlbHBlci5kb3dubG9hZChcIm1haWx0bzpzdXBwb3J0QGJ1bmRsZWRvY3MuY29tXCIpO1xuICAgIH1cblxuICAgIGRvd25sb2FkQnVuZGxlKGJ1bmRsZTogQXBwQnVuZGxlKSB7XG4gICAgICAgIHRoaXMuX2JkQnVuZGxlc1NlcnZpY2UuZG93bmxvYWQoYnVuZGxlKTtcbiAgICB9XG5cbiAgICBkb3dubG9hZE1hbnVhbCgpIHtcbiAgICAgICAgdGhpcy5fZG93bmxvYWRIZWxwZXIuZG93bmxvYWQoXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9idW5kbGVkb2NzLWFwcC11c2VyLW1hbnVhbFwiKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWN1cmUuY29tcG9uZW50LmxvZ291dCcpO1xuXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNldEFjY2Vzc1Rva2VuKG51bGwpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XG4gICAgfVxufVxuLy8gPDwgc2lkZWRyYXdlci1nZXR0aW5nLXN0YXJ0ZWQtYW5ndWxhciJdfQ==