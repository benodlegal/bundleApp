"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//All of the imports necessary for the login class
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var web_view_1 = require("ui/web-view");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../services/auth.service");
var accessToken_helper_1 = require("../../helpers/accessToken.helper");
//define the login component
var LoginComponent = (function () {
    //constructor for the Router
    function LoginComponent(_page, _ngZone, _changeDetectionRef, _router, _authService, _accessTokenHelper) {
        this._page = _page;
        this._ngZone = _ngZone;
        this._changeDetectionRef = _changeDetectionRef;
        this._router = _router;
        this._authService = _authService;
        this._accessTokenHelper = _accessTokenHelper;
        //web view url
        this._authenticationUrl = "https://app.bundledocs.com/auth/oauth2/authorize?response_type=token&client_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJTaWduYXR1cmUiOiIwYzE0ZmY0ZmU0ZGU0YTc5ODAxOTQ4OTMxMzIzYzIyYiIsIlBhcnRpdGlvbktleSI6IjEyNTE5OTcyMTQyMDYxNzk1MjgwXzUxNDU1M2Q0LWIxMzItNGU3OC1iZWExLWQyMjkwNjNjODNjNSIsIlJvd0tleSI6IjEyNTE4ODY1NTI1Mjc5NDc0OTM0Xzk1NzMzMmIwLWY2MjctNDRjYy1iMDk3LTM2NDhmNWRiNmYwYyJ9.qYi227w3Bbxpat7tppYdnF8rHbMX2c7ILMeidb9kdIo&redirect_uri=https://app.bundledocs.com/auth/oauth2/approval&state=Bundledocs.Android";
    }
    Object.defineProperty(LoginComponent.prototype, "authenticationUrl", {
        get: function () { return this._authenticationUrl; },
        enumerable: true,
        configurable: true
    });
    //Called at runtime
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login.component.ngOnInit');
        //hide the action bar on the login component as it conflicts with the webview
        this._page.actionBarHidden = true;
        var webview = this._webViewRef.nativeElement;
        var ngZone = this._ngZone;
        var router = this._router;
        var authService = this._authService;
        var accessTokenHelper = this._accessTokenHelper;
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
                    ngZone.run(function () {
                        router.navigate(["/secure"], { queryParams: { accessToken: accessToken } }).then(function (success) {
                            console.log(success);
                        });
                    });
                }
            }
            catch (exception) {
                console.log("login.component.WebView.loadFinishedEvent");
                console.log(exception.toString());
            }
        });
    };
    __decorate([
        core_1.ViewChild("webView"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "_webViewRef", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-login",
            templateUrl: "login.component.html",
        })
        //login component class that implements the 'AfterViewInit' import
        ,
        __metadata("design:paramtypes", [page_1.Page,
            core_1.NgZone,
            core_1.ChangeDetectorRef,
            router_1.Router,
            auth_service_1.AuthService,
            accessToken_helper_1.AccessTokenHelper])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWtEO0FBQ2xELHNDQUFvRztBQUNwRyxzREFBcUQ7QUFDckQsd0NBQXFEO0FBQ3JELDBDQUF5QztBQUN6Qyw0REFBMEQ7QUFDMUQsdUVBQXFFO0FBRXJFLDRCQUE0QjtBQU81QjtJQVFJLDRCQUE0QjtJQUM1Qix3QkFDWSxLQUFXLEVBQ1gsT0FBZSxFQUNmLG1CQUFzQyxFQUN0QyxPQUFlLEVBQ2YsWUFBeUIsRUFDekIsa0JBQXFDO1FBTHJDLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQWRqRCxjQUFjO1FBQ04sdUJBQWtCLEdBQVcsd2ZBQXdmLENBQUM7SUFjMWhCLENBQUM7SUFiTCxzQkFBSSw2Q0FBaUI7YUFBckIsY0FBa0MsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBZW5FLG1CQUFtQjtJQUNuQixpQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRXhDLDZFQUE2RTtRQUM3RSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFbEMsSUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDeEQsSUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQU0sV0FBVyxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ25ELElBQU0saUJBQWlCLEdBQXNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUVyRSw2Q0FBNkM7UUFDN0MsT0FBTyxDQUFDLEVBQUUsQ0FBQyxrQkFBTyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsSUFBbUI7WUFDL0QsSUFBSSxDQUFDO2dCQUNELElBQU0saUJBQWlCLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFFM0MsbURBQW1EO2dCQUNuRCxJQUFJLE9BQU8sR0FBWSxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUUvRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNWLG9DQUFvQztvQkFDcEMsSUFBSSxXQUFXLEdBQUcsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFFNUUsdUJBQXVCO29CQUN2QixXQUFXLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUV4QywyRkFBMkY7b0JBQzNGLE1BQU0sQ0FBQyxHQUFHLENBQUM7d0JBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPOzRCQUNyRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN6QixDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQUNELEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO2dCQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFyREQ7UUFEQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FDQSxpQkFBVTt1REFBQztJQU52QixjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO1FBQ0Ysa0VBQWtFOzt5Q0FXM0MsV0FBSTtZQUNGLGFBQU07WUFDTSx3QkFBaUI7WUFDN0IsZUFBTTtZQUNELDBCQUFXO1lBQ0wsc0NBQWlCO09BZnhDLGNBQWMsQ0E0RDFCO0lBQUQscUJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vQWxsIG9mIHRoZSBpbXBvcnRzIG5lY2Vzc2FyeSBmb3IgdGhlIGxvZ2luIGNsYXNzXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5IZWxwZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9hY2Nlc3NUb2tlbi5oZWxwZXJcIjtcclxuXHJcbi8vZGVmaW5lIHRoZSBsb2dpbiBjb21wb25lbnRcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtbG9naW5cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImxvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbi8vbG9naW4gY29tcG9uZW50IGNsYXNzIHRoYXQgaW1wbGVtZW50cyB0aGUgJ0FmdGVyVmlld0luaXQnIGltcG9ydFxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyAgICBcclxuICAgIC8vd2ViIHZpZXcgdXJsXHJcbiAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblVybDogc3RyaW5nID0gXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hdXRoL29hdXRoMi9hdXRob3JpemU/cmVzcG9uc2VfdHlwZT10b2tlbiZjbGllbnRfaWQ9ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SlRhV2R1WVhSMWNtVWlPaUl3WXpFMFptWTBabVUwWkdVMFlUYzVPREF4T1RRNE9UTXhNekl6WXpJeVlpSXNJbEJoY25ScGRHbHZia3RsZVNJNklqRXlOVEU1T1RjeU1UUXlNRFl4TnprMU1qZ3dYelV4TkRVMU0yUTBMV0l4TXpJdE5HVTNPQzFpWldFeExXUXlNamt3TmpOak9ETmpOU0lzSWxKdmQwdGxlU0k2SWpFeU5URTRPRFkxTlRJMU1qYzVORGMwT1RNMFh6azFOek16TW1Jd0xXWTJNamN0TkRSall5MWlNRGszTFRNMk5EaG1OV1JpTm1Zd1l5SjkucVlpMjI3dzNCYnhwYXQ3dHBwWWRuRjhySGJNWDJjN0lMTWVpZGI5a2RJbyZyZWRpcmVjdF91cmk9aHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXV0aC9vYXV0aDIvYXBwcm92YWwmc3RhdGU9QnVuZGxlZG9jcy5BbmRyb2lkXCI7XHJcbiAgICBnZXQgYXV0aGVudGljYXRpb25VcmwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2F1dGhlbnRpY2F0aW9uVXJsOyB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChcIndlYlZpZXdcIikgXHJcbiAgICBwcml2YXRlIF93ZWJWaWV3UmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIC8vY29uc3RydWN0b3IgZm9yIHRoZSBSb3V0ZXJcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9wYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2FjY2Vzc1Rva2VuSGVscGVyOiBBY2Nlc3NUb2tlbkhlbHBlcixcclxuICAgICkgeyB9XHJcblxyXG4gICAgLy9DYWxsZWQgYXQgcnVudGltZVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luLmNvbXBvbmVudC5uZ09uSW5pdCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vaGlkZSB0aGUgYWN0aW9uIGJhciBvbiB0aGUgbG9naW4gY29tcG9uZW50IGFzIGl0IGNvbmZsaWN0cyB3aXRoIHRoZSB3ZWJ2aWV3XHJcbiAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCB3ZWJ2aWV3OiBXZWJWaWV3ID0gdGhpcy5fd2ViVmlld1JlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IG5nWm9uZTogTmdab25lID0gdGhpcy5fbmdab25lO1xyXG4gICAgICAgIGNvbnN0IHJvdXRlcjogUm91dGVyID0gdGhpcy5fcm91dGVyOyAgICBcclxuICAgICAgICBjb25zdCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UgPSB0aGlzLl9hdXRoU2VydmljZTsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuSGVscGVyOiBBY2Nlc3NUb2tlbkhlbHBlciA9IHRoaXMuX2FjY2Vzc1Rva2VuSGVscGVyO1xyXG5cclxuICAgICAgICAvL3RoaXMgZ2V0cyBjYWxsZWQgd2hlbiB0aGUgd2VidmlldyBpcyBsb2FkZWRcclxuICAgICAgICB3ZWJ2aWV3Lm9uKFdlYlZpZXcubG9hZEZpbmlzaGVkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBMb2FkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoZW50aWNhdGlvblVybDogc3RyaW5nID0gYXJncy51cmw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy90ZXN0IGZvciBleGlzdGFuY2Ugb2YgdGhlIGFjY2VzcyB0b2tlbiBpbiB0aGUgdXJsXHJcbiAgICAgICAgICAgICAgICB2YXIgaXNJblVybDogYm9vbGVhbiA9IGFjY2Vzc1Rva2VuSGVscGVyLmlzQWNjZXNzVG9rZW5JblVybChhdXRoZW50aWNhdGlvblVybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzSW5VcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3doZW4gYW4gYWNjZXNzIHRva2VuIGlzIGluIHRoZSB1cmxcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbkhlbHBlci50b0FjY2Vzc1Rva2VuRnJvbVVybChhdXRoZW50aWNhdGlvblVybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vc2F2ZSB0aGUgYWNjZXNzIHRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFNlcnZpY2Uuc2V0QWNjZXNzVG9rZW4oYWNjZXNzVG9rZW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL25hdmlnYXRlIHJvdXRlciB0byBzZWN1cmUgY29tcG9uZW50IHdpdGggb3VyIGFjY2VzcyB0b2tlbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbXCIvc2VjdXJlXCJdLCB7IHF1ZXJ5UGFyYW1zOiB7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9IH0pLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luLmNvbXBvbmVudC5XZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXhjZXB0aW9uLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=