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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWtEO0FBQ2xELHNDQUFvRztBQUNwRyxzREFBcUQ7QUFDckQsd0NBQXFEO0FBQ3JELDBDQUF5QztBQUN6Qyw0REFBMEQ7QUFDMUQsdUVBQXFFO0FBRXJFLDRCQUE0QjtBQU81QjtJQVFJLDRCQUE0QjtJQUM1Qix3QkFDWSxLQUFXLEVBQ1gsT0FBZSxFQUNmLG1CQUFzQyxFQUN0QyxPQUFlLEVBQ2YsWUFBeUIsRUFDekIsa0JBQXFDO1FBTHJDLFVBQUssR0FBTCxLQUFLLENBQU07UUFDWCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQWRqRCxjQUFjO1FBQ04sdUJBQWtCLEdBQVcsd2ZBQXdmLENBQUM7SUFjMWhCLENBQUM7SUFiTCxzQkFBSSw2Q0FBaUI7YUFBckIsY0FBa0MsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBZW5FLG1CQUFtQjtJQUNuQixpQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRXhDLDZFQUE2RTtRQUM3RSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFbEMsSUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDeEQsSUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQU0sV0FBVyxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ25ELElBQU0saUJBQWlCLEdBQXNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUVyRSw2Q0FBNkM7UUFDN0MsT0FBTyxDQUFDLEVBQUUsQ0FBQyxrQkFBTyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsSUFBbUI7WUFDL0QsSUFBSSxDQUFDO2dCQUNELElBQU0saUJBQWlCLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFFM0MsbURBQW1EO2dCQUNuRCxJQUFJLE9BQU8sR0FBWSxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUUvRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNWLG9DQUFvQztvQkFDcEMsSUFBSSxXQUFXLEdBQUcsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFFNUUsdUJBQXVCO29CQUN2QixXQUFXLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUV4QywyRkFBMkY7b0JBQzNGLE1BQU0sQ0FBQyxHQUFHLENBQUM7d0JBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPOzRCQUNyRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN6QixDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQUNELEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO2dCQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFyREQ7UUFEQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FDQSxpQkFBVTt1REFBQztJQU52QixjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO1FBQ0Ysa0VBQWtFOzt5Q0FXM0MsV0FBSTtZQUNGLGFBQU07WUFDTSx3QkFBaUI7WUFDN0IsZUFBTTtZQUNELDBCQUFXO1lBQ0wsc0NBQWlCO09BZnhDLGNBQWMsQ0E0RDFCO0lBQUQscUJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vQWxsIG9mIHRoZSBpbXBvcnRzIG5lY2Vzc2FyeSBmb3IgdGhlIGxvZ2luIGNsYXNzXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5IZWxwZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9hY2Nlc3NUb2tlbi5oZWxwZXJcIjtcblxuLy9kZWZpbmUgdGhlIGxvZ2luIGNvbXBvbmVudFxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImxvZ2luLmNvbXBvbmVudC5odG1sXCIsXG59KVxuLy9sb2dpbiBjb21wb25lbnQgY2xhc3MgdGhhdCBpbXBsZW1lbnRzIHRoZSAnQWZ0ZXJWaWV3SW5pdCcgaW1wb3J0XG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vd2ViIHZpZXcgdXJsXG4gICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25Vcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXV0aC9vYXV0aDIvYXV0aG9yaXplP3Jlc3BvbnNlX3R5cGU9dG9rZW4mY2xpZW50X2lkPWV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpUYVdkdVlYUjFjbVVpT2lJd1l6RTBabVkwWm1VMFpHVTBZVGM1T0RBeE9UUTRPVE14TXpJell6SXlZaUlzSWxCaGNuUnBkR2x2Ymt0bGVTSTZJakV5TlRFNU9UY3lNVFF5TURZeE56azFNamd3WHpVeE5EVTFNMlEwTFdJeE16SXROR1UzT0MxaVpXRXhMV1F5TWprd05qTmpPRE5qTlNJc0lsSnZkMHRsZVNJNklqRXlOVEU0T0RZMU5USTFNamM1TkRjME9UTTBYemsxTnpNek1tSXdMV1kyTWpjdE5EUmpZeTFpTURrM0xUTTJORGhtTldSaU5tWXdZeUo5LnFZaTIyN3czQmJ4cGF0N3RwcFlkbkY4ckhiTVgyYzdJTE1laWRiOWtkSW8mcmVkaXJlY3RfdXJpPWh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2F1dGgvb2F1dGgyL2FwcHJvdmFsJnN0YXRlPUJ1bmRsZWRvY3MuQW5kcm9pZFwiO1xuICAgIGdldCBhdXRoZW50aWNhdGlvblVybCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fYXV0aGVudGljYXRpb25Vcmw7IH1cblxuICAgIEBWaWV3Q2hpbGQoXCJ3ZWJWaWV3XCIpXG4gICAgcHJpdmF0ZSBfd2ViVmlld1JlZjogRWxlbWVudFJlZjtcblxuICAgIC8vY29uc3RydWN0b3IgZm9yIHRoZSBSb3V0ZXJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9hY2Nlc3NUb2tlbkhlbHBlcjogQWNjZXNzVG9rZW5IZWxwZXIsXG4gICAgKSB7IH1cblxuICAgIC8vQ2FsbGVkIGF0IHJ1bnRpbWVcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luLmNvbXBvbmVudC5uZ09uSW5pdCcpO1xuXG4gICAgICAgIC8vaGlkZSB0aGUgYWN0aW9uIGJhciBvbiB0aGUgbG9naW4gY29tcG9uZW50IGFzIGl0IGNvbmZsaWN0cyB3aXRoIHRoZSB3ZWJ2aWV3XG4gICAgICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCB3ZWJ2aWV3OiBXZWJWaWV3ID0gdGhpcy5fd2ViVmlld1JlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCBuZ1pvbmU6IE5nWm9uZSA9IHRoaXMuX25nWm9uZTtcbiAgICAgICAgY29uc3Qgcm91dGVyOiBSb3V0ZXIgPSB0aGlzLl9yb3V0ZXI7XG4gICAgICAgIGNvbnN0IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSA9IHRoaXMuX2F1dGhTZXJ2aWNlO1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbkhlbHBlcjogQWNjZXNzVG9rZW5IZWxwZXIgPSB0aGlzLl9hY2Nlc3NUb2tlbkhlbHBlcjtcblxuICAgICAgICAvL3RoaXMgZ2V0cyBjYWxsZWQgd2hlbiB0aGUgd2VidmlldyBpcyBsb2FkZWRcbiAgICAgICAgd2Vidmlldy5vbihXZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogTG9hZEV2ZW50RGF0YSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoZW50aWNhdGlvblVybDogc3RyaW5nID0gYXJncy51cmw7XG5cbiAgICAgICAgICAgICAgICAvL3Rlc3QgZm9yIGV4aXN0YW5jZSBvZiB0aGUgYWNjZXNzIHRva2VuIGluIHRoZSB1cmxcbiAgICAgICAgICAgICAgICB2YXIgaXNJblVybDogYm9vbGVhbiA9IGFjY2Vzc1Rva2VuSGVscGVyLmlzQWNjZXNzVG9rZW5JblVybChhdXRoZW50aWNhdGlvblVybCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNJblVybCkge1xuICAgICAgICAgICAgICAgICAgICAvL3doZW4gYW4gYWNjZXNzIHRva2VuIGlzIGluIHRoZSB1cmxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW5IZWxwZXIudG9BY2Nlc3NUb2tlbkZyb21VcmwoYXV0aGVudGljYXRpb25VcmwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vc2F2ZSB0aGUgYWNjZXNzIHRva2VuXG4gICAgICAgICAgICAgICAgICAgIGF1dGhTZXJ2aWNlLnNldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuKTtcblxuICAgICAgICAgICAgICAgICAgICAvL25hdmlnYXRlIHJvdXRlciB0byBzZWN1cmUgY29tcG9uZW50IHdpdGggb3VyIGFjY2VzcyB0b2tlbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0sIHsgcXVlcnlQYXJhbXM6IHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuIH0gfSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luLmNvbXBvbmVudC5XZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50XCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4Y2VwdGlvbi50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==