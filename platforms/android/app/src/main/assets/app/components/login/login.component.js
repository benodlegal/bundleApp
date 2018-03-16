"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//All of the imports necessary for the login class
var core_1 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../services/auth.service");
var accessToken_helper_1 = require("../../helpers/accessToken.helper");
//define the login component
var LoginComponent = (function () {
    //constructor for the Router
    function LoginComponent(_router, _changeDetectionRef, _authService, _accessTokenHelper) {
        this._router = _router;
        this._changeDetectionRef = _changeDetectionRef;
        this._authService = _authService;
        this._accessTokenHelper = _accessTokenHelper;
        this.self = this;
        //web view url
        this._authenticationUrl = "https://app.bundledocs.com/auth/oauth2/authorize?response_type=token&client_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJTaWduYXR1cmUiOiIwYzE0ZmY0ZmU0ZGU0YTc5ODAxOTQ4OTMxMzIzYzIyYiIsIlBhcnRpdGlvbktleSI6IjEyNTE5OTcyMTQyMDYxNzk1MjgwXzUxNDU1M2Q0LWIxMzItNGU3OC1iZWExLWQyMjkwNjNjODNjNSIsIlJvd0tleSI6IjEyNTE4ODY1NTI1Mjc5NDc0OTM0Xzk1NzMzMmIwLWY2MjctNDRjYy1iMDk3LTM2NDhmNWRiNmYwYyJ9.qYi227w3Bbxpat7tppYdnF8rHbMX2c7ILMeidb9kdIo&redirect_uri=https://app.bundledocs.com/auth/oauth2/approval&state=Bundledocs.Android";
    }
    Object.defineProperty(LoginComponent.prototype, "authenticationUrl", {
        get: function () { return this._authenticationUrl; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngAfterViewInit = function () {
        var webview = this.webViewRef.nativeElement;
        var accessTokenHelper = this._accessTokenHelper;
        var authService = this._authService;
        var router = this._router;
        //this gets called when the webview is loaded
        webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
            try {
                var authenticationUrl = args.url;
                //test for existance of the access token in the url
                var isInUrl = accessTokenHelper.isAccessTokenInUrl(authenticationUrl);
                if (isInUrl) {
                    //when an access token is in the url
                    var accessToken = accessTokenHelper.toAccessTokenFromUrl(authenticationUrl);
                    //save the access token
                    authService.setAccessToken(accessToken);
                    //navigate router to secure component with our access token                                
                    router.navigate(["/secure"], { queryParams: { accessToken: accessToken } }).then(function (success) {
                        console.log(success);
                    });
                }
            }
            catch (exception) {
                console.log("login.component.WebView.loadFinishedEvent");
                console.log(exception.toString());
            }
        });
    };
    //Called at runtime
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login.component.ngOnInit');
        this._changeDetectionRef.detectChanges();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        console.log('login.component.ngOnDestroy');
    };
    __decorate([
        core_1.ViewChild("webView"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "webViewRef", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-login",
            templateUrl: "login.component.html",
        })
        //login component class that implements the 'AfterViewInit' import
        ,
        __metadata("design:paramtypes", [router_1.Router,
            core_1.ChangeDetectorRef,
            auth_service_1.AuthService,
            accessToken_helper_1.AccessTokenHelper])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWtEO0FBQ2xELHNDQUFzSDtBQUN0SCx3Q0FBcUQ7QUFFckQsMENBQXlDO0FBQ3pDLDREQUEwRDtBQUMxRCx1RUFBcUU7QUFFckUsNEJBQTRCO0FBTzVCO0lBT0ksNEJBQTRCO0lBQzVCLHdCQUNZLE9BQWUsRUFDZixtQkFBc0MsRUFDdEMsWUFBeUIsRUFDekIsa0JBQXFDO1FBSHJDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFYekMsU0FBSSxHQUFtQixJQUFJLENBQUM7UUFFcEMsY0FBYztRQUNOLHVCQUFrQixHQUFXLHdmQUF3ZixDQUFDO0lBUzFoQixDQUFDO0lBUkwsc0JBQUksNkNBQWlCO2FBQXJCLGNBQWtDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQVduRSx3Q0FBZSxHQUFmO1FBQ0ksSUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDdkQsSUFBTSxpQkFBaUIsR0FBc0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3JFLElBQU0sV0FBVyxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ25ELElBQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFcEMsNkNBQTZDO1FBQzdDLE9BQU8sQ0FBQyxFQUFFLENBQUMsa0JBQU8sQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLElBQW1CO1lBQy9ELElBQUksQ0FBQztnQkFDRCxJQUFNLGlCQUFpQixHQUFVLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBRTFDLG1EQUFtRDtnQkFDbkQsSUFBSSxPQUFPLEdBQVksaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFFL0UsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDVixvQ0FBb0M7b0JBQ3BDLElBQUksV0FBVyxHQUFHLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBRTVFLHVCQUF1QjtvQkFDdkIsV0FBVyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFFeEMsMkZBQTJGO29CQUMzRixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87d0JBQ3JGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBQ0QsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7Z0JBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDdEMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELG1CQUFtQjtJQUNuQixpQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBQ0Qsb0NBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBekNxQjtRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBYSxpQkFBVTtzREFBQztJQWZwQyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO1FBQ0Ysa0VBQWtFOzt5Q0FVekMsZUFBTTtZQUNNLHdCQUFpQjtZQUN4QiwwQkFBVztZQUNMLHNDQUFpQjtPQVp4QyxjQUFjLENBeUQxQjtJQUFELHFCQUFDO0NBQUEsQUF6REQsSUF5REM7QUF6RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0FsbCBvZiB0aGUgaW1wb3J0cyBuZWNlc3NhcnkgZm9yIHRoZSBsb2dpbiBjbGFzc1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkhlbHBlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FjY2Vzc1Rva2VuLmhlbHBlclwiO1xyXG5cclxuLy9kZWZpbmUgdGhlIGxvZ2luIGNvbXBvbmVudFxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuLy9sb2dpbiBjb21wb25lbnQgY2xhc3MgdGhhdCBpbXBsZW1lbnRzIHRoZSAnQWZ0ZXJWaWV3SW5pdCcgaW1wb3J0XHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHByaXZhdGUgc2VsZjogTG9naW5Db21wb25lbnQgPSB0aGlzO1xyXG5cclxuICAgIC8vd2ViIHZpZXcgdXJsXHJcbiAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblVybDogc3RyaW5nID0gXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hdXRoL29hdXRoMi9hdXRob3JpemU/cmVzcG9uc2VfdHlwZT10b2tlbiZjbGllbnRfaWQ9ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SlRhV2R1WVhSMWNtVWlPaUl3WXpFMFptWTBabVUwWkdVMFlUYzVPREF4T1RRNE9UTXhNekl6WXpJeVlpSXNJbEJoY25ScGRHbHZia3RsZVNJNklqRXlOVEU1T1RjeU1UUXlNRFl4TnprMU1qZ3dYelV4TkRVMU0yUTBMV0l4TXpJdE5HVTNPQzFpWldFeExXUXlNamt3TmpOak9ETmpOU0lzSWxKdmQwdGxlU0k2SWpFeU5URTRPRFkxTlRJMU1qYzVORGMwT1RNMFh6azFOek16TW1Jd0xXWTJNamN0TkRSall5MWlNRGszTFRNMk5EaG1OV1JpTm1Zd1l5SjkucVlpMjI3dzNCYnhwYXQ3dHBwWWRuRjhySGJNWDJjN0lMTWVpZGI5a2RJbyZyZWRpcmVjdF91cmk9aHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXV0aC9vYXV0aDIvYXBwcm92YWwmc3RhdGU9QnVuZGxlZG9jcy5BbmRyb2lkXCI7XHJcbiAgICBnZXQgYXV0aGVudGljYXRpb25VcmwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2F1dGhlbnRpY2F0aW9uVXJsOyB9XHJcblxyXG4gICAgLy9jb25zdHJ1Y3RvciBmb3IgdGhlIFJvdXRlclxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2FjY2Vzc1Rva2VuSGVscGVyOiBBY2Nlc3NUb2tlbkhlbHBlcixcclxuICAgICkgeyB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChcIndlYlZpZXdcIikgd2ViVmlld1JlZjogRWxlbWVudFJlZjtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBjb25zdCB3ZWJ2aWV3OiBXZWJWaWV3ID0gdGhpcy53ZWJWaWV3UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5IZWxwZXI6IEFjY2Vzc1Rva2VuSGVscGVyID0gdGhpcy5fYWNjZXNzVG9rZW5IZWxwZXI7XHJcbiAgICAgICAgY29uc3QgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlID0gdGhpcy5fYXV0aFNlcnZpY2U7XHJcbiAgICAgICAgY29uc3Qgcm91dGVyOiBSb3V0ZXIgPSB0aGlzLl9yb3V0ZXI7XHJcblxyXG4gICAgICAgIC8vdGhpcyBnZXRzIGNhbGxlZCB3aGVuIHRoZSB3ZWJ2aWV3IGlzIGxvYWRlZFxyXG4gICAgICAgIHdlYnZpZXcub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IExvYWRFdmVudERhdGEpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uVXJsOnN0cmluZyA9IGFyZ3MudXJsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdGVzdCBmb3IgZXhpc3RhbmNlIG9mIHRoZSBhY2Nlc3MgdG9rZW4gaW4gdGhlIHVybFxyXG4gICAgICAgICAgICAgICAgdmFyIGlzSW5Vcmw6IGJvb2xlYW4gPSBhY2Nlc3NUb2tlbkhlbHBlci5pc0FjY2Vzc1Rva2VuSW5VcmwoYXV0aGVudGljYXRpb25VcmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc0luVXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy93aGVuIGFuIGFjY2VzcyB0b2tlbiBpcyBpbiB0aGUgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW5IZWxwZXIudG9BY2Nlc3NUb2tlbkZyb21VcmwoYXV0aGVudGljYXRpb25VcmwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgdGhlIGFjY2VzcyB0b2tlblxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhTZXJ2aWNlLnNldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9uYXZpZ2F0ZSByb3V0ZXIgdG8gc2VjdXJlIGNvbXBvbmVudCB3aXRoIG91ciBhY2Nlc3MgdG9rZW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbXCIvc2VjdXJlXCJdLCB7IHF1ZXJ5UGFyYW1zOiB7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9IH0pLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbi5jb21wb25lbnQuV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4Y2VwdGlvbi50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9DYWxsZWQgYXQgcnVudGltZVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luLmNvbXBvbmVudC5uZ09uSW5pdCcpO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9naW4uY29tcG9uZW50Lm5nT25EZXN0cm95Jyk7XHJcbiAgICB9XHJcbn0iXX0=