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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWtEO0FBQ2xELHNDQUFvRztBQUNwRyxzREFBcUQ7QUFDckQsd0NBQXFEO0FBQ3JELDBDQUF5QztBQUN6Qyw0REFBMEQ7QUFDMUQsdUVBQXFFO0FBRXJFLDRCQUE0QjtBQU81QjtJQVFJLDRCQUE0QjtJQUM1Qix3QkFDWSxLQUFXLEVBQ1gsT0FBZSxFQUNmLG1CQUFzQyxFQUN0QyxPQUFlLEVBQ2YsWUFBeUIsRUFDekIsa0JBQXFDO1FBTHJDLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQWRqRCxjQUFjO1FBQ04sdUJBQWtCLEdBQVcsd2ZBQXdmLENBQUM7SUFjMWhCLENBQUM7SUFiTCxzQkFBSSw2Q0FBaUI7YUFBckIsY0FBa0MsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBZW5FLG1CQUFtQjtJQUNuQixpQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRXhDLDZFQUE2RTtRQUM3RSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFbEMsSUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDeEQsSUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQU0sV0FBVyxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ25ELElBQU0saUJBQWlCLEdBQXNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUVyRSw2Q0FBNkM7UUFDN0MsT0FBTyxDQUFDLEVBQUUsQ0FBQyxrQkFBTyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsSUFBbUI7WUFDL0QsSUFBSSxDQUFDO2dCQUNELElBQU0saUJBQWlCLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFFM0MsbURBQW1EO2dCQUNuRCxJQUFJLE9BQU8sR0FBWSxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUUvRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNWLG9DQUFvQztvQkFDcEMsSUFBSSxXQUFXLEdBQUcsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFFNUUsdUJBQXVCO29CQUN2QixXQUFXLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUV4QywyRkFBMkY7b0JBQzNGLE1BQU0sQ0FBQyxHQUFHLENBQUM7d0JBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPOzRCQUNyRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN6QixDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQUNELEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO2dCQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFyREQ7UUFEQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FDQSxpQkFBVTt1REFBQztJQU52QixjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO1FBQ0Ysa0VBQWtFOzt5Q0FXM0MsV0FBSTtZQUNGLGFBQU07WUFDTSx3QkFBaUI7WUFDN0IsZUFBTTtZQUNELDBCQUFXO1lBQ0wsc0NBQWlCO09BZnhDLGNBQWMsQ0E0RDFCO0lBQUQscUJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vQWxsIG9mIHRoZSBpbXBvcnRzIG5lY2Vzc2FyeSBmb3IgdGhlIGxvZ2luIGNsYXNzXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5IZWxwZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9hY2Nlc3NUb2tlbi5oZWxwZXJcIjtcblxuLy9kZWZpbmUgdGhlIGxvZ2luIGNvbXBvbmVudFxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImxvZ2luLmNvbXBvbmVudC5odG1sXCIsXG59KVxuLy9sb2dpbiBjb21wb25lbnQgY2xhc3MgdGhhdCBpbXBsZW1lbnRzIHRoZSAnQWZ0ZXJWaWV3SW5pdCcgaW1wb3J0XG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyAgICBcbiAgICAvL3dlYiB2aWV3IHVybFxuICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uVXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2F1dGgvb2F1dGgyL2F1dGhvcml6ZT9yZXNwb25zZV90eXBlPXRva2VuJmNsaWVudF9pZD1leUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKVGFXZHVZWFIxY21VaU9pSXdZekUwWm1ZMFptVTBaR1UwWVRjNU9EQXhPVFE0T1RNeE16SXpZekl5WWlJc0lsQmhjblJwZEdsdmJrdGxlU0k2SWpFeU5URTVPVGN5TVRReU1EWXhOemsxTWpnd1h6VXhORFUxTTJRMExXSXhNekl0TkdVM09DMWlaV0V4TFdReU1qa3dOak5qT0ROak5TSXNJbEp2ZDB0bGVTSTZJakV5TlRFNE9EWTFOVEkxTWpjNU5EYzBPVE0wWHprMU56TXpNbUl3TFdZMk1qY3RORFJqWXkxaU1EazNMVE0yTkRobU5XUmlObVl3WXlKOS5xWWkyMjd3M0JieHBhdDd0cHBZZG5GOHJIYk1YMmM3SUxNZWlkYjlrZElvJnJlZGlyZWN0X3VyaT1odHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hdXRoL29hdXRoMi9hcHByb3ZhbCZzdGF0ZT1CdW5kbGVkb2NzLkFuZHJvaWRcIjtcbiAgICBnZXQgYXV0aGVudGljYXRpb25VcmwoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2F1dGhlbnRpY2F0aW9uVXJsOyB9XG5cbiAgICBAVmlld0NoaWxkKFwid2ViVmlld1wiKSBcbiAgICBwcml2YXRlIF93ZWJWaWV3UmVmOiBFbGVtZW50UmVmO1xuXG4gICAgLy9jb25zdHJ1Y3RvciBmb3IgdGhlIFJvdXRlclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2FjY2Vzc1Rva2VuSGVscGVyOiBBY2Nlc3NUb2tlbkhlbHBlcixcbiAgICApIHsgfVxuXG4gICAgLy9DYWxsZWQgYXQgcnVudGltZVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9naW4uY29tcG9uZW50Lm5nT25Jbml0Jyk7XG4gICAgICAgIFxuICAgICAgICAvL2hpZGUgdGhlIGFjdGlvbiBiYXIgb24gdGhlIGxvZ2luIGNvbXBvbmVudCBhcyBpdCBjb25mbGljdHMgd2l0aCB0aGUgd2Vidmlld1xuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cbiAgICAgICAgY29uc3Qgd2VidmlldzogV2ViVmlldyA9IHRoaXMuX3dlYlZpZXdSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3Qgbmdab25lOiBOZ1pvbmUgPSB0aGlzLl9uZ1pvbmU7XG4gICAgICAgIGNvbnN0IHJvdXRlcjogUm91dGVyID0gdGhpcy5fcm91dGVyOyAgICBcbiAgICAgICAgY29uc3QgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlID0gdGhpcy5fYXV0aFNlcnZpY2U7ICAgICAgICBcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5IZWxwZXI6IEFjY2Vzc1Rva2VuSGVscGVyID0gdGhpcy5fYWNjZXNzVG9rZW5IZWxwZXI7XG5cbiAgICAgICAgLy90aGlzIGdldHMgY2FsbGVkIHdoZW4gdGhlIHdlYnZpZXcgaXMgbG9hZGVkXG4gICAgICAgIHdlYnZpZXcub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IExvYWRFdmVudERhdGEpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aGVudGljYXRpb25Vcmw6IHN0cmluZyA9IGFyZ3MudXJsO1xuXG4gICAgICAgICAgICAgICAgLy90ZXN0IGZvciBleGlzdGFuY2Ugb2YgdGhlIGFjY2VzcyB0b2tlbiBpbiB0aGUgdXJsXG4gICAgICAgICAgICAgICAgdmFyIGlzSW5Vcmw6IGJvb2xlYW4gPSBhY2Nlc3NUb2tlbkhlbHBlci5pc0FjY2Vzc1Rva2VuSW5VcmwoYXV0aGVudGljYXRpb25VcmwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzSW5VcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy93aGVuIGFuIGFjY2VzcyB0b2tlbiBpcyBpbiB0aGUgdXJsXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuSGVscGVyLnRvQWNjZXNzVG9rZW5Gcm9tVXJsKGF1dGhlbnRpY2F0aW9uVXJsKTtcblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgdGhlIGFjY2VzcyB0b2tlblxuICAgICAgICAgICAgICAgICAgICBhdXRoU2VydmljZS5zZXRBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9uYXZpZ2F0ZSByb3V0ZXIgdG8gc2VjdXJlIGNvbXBvbmVudCB3aXRoIG91ciBhY2Nlc3MgdG9rZW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbXCIvc2VjdXJlXCJdLCB7IHF1ZXJ5UGFyYW1zOiB7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9IH0pLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbi5jb21wb25lbnQuV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudFwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleGNlcHRpb24udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=