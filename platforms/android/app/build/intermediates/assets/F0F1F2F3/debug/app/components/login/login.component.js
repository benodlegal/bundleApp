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
    function LoginComponent(_page, _ngZone, _changeDetectionRef, _router, _authService, _accessTokenHelper) {
        this._page = _page;
        this._ngZone = _ngZone;
        this._changeDetectionRef = _changeDetectionRef;
        this._router = _router;
        this._authService = _authService;
        this._accessTokenHelper = _accessTokenHelper;
        //URL using accessToken to authenticate
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
        //hidden the action bar on the login component as it conflicts with the webview
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWtEO0FBQ2xELHNDQUFvRztBQUNwRyxzREFBcUQ7QUFDckQsd0NBQXFEO0FBQ3JELDBDQUF5QztBQUN6Qyw0REFBMEQ7QUFDMUQsdUVBQXFFO0FBRXJFLDRCQUE0QjtBQU81QjtJQVFJLHdCQUNZLEtBQVcsRUFDWCxPQUFlLEVBQ2YsbUJBQXNDLEVBQ3RDLE9BQWUsRUFDZixZQUF5QixFQUN6QixrQkFBcUM7UUFMckMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNYLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBYmpELHVDQUF1QztRQUMvQix1QkFBa0IsR0FBVyx3ZkFBd2YsQ0FBQztJQWExaEIsQ0FBQztJQVpMLHNCQUFJLDZDQUFpQjthQUFyQixjQUFrQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFjbkUsbUJBQW1CO0lBQ25CLGlDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFeEMsK0VBQStFO1FBQy9FLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUVsQyxJQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUN4RCxJQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBTSxXQUFXLEdBQWdCLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbkQsSUFBTSxpQkFBaUIsR0FBc0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBRXJFLDZDQUE2QztRQUM3QyxPQUFPLENBQUMsRUFBRSxDQUFDLGtCQUFPLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxJQUFtQjtZQUMvRCxJQUFJLENBQUM7Z0JBQ0QsSUFBTSxpQkFBaUIsR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUUzQyxtREFBbUQ7Z0JBQ25ELElBQUksT0FBTyxHQUFZLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBRS9FLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ1Ysb0NBQW9DO29CQUNwQyxJQUFJLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUU1RSx1QkFBdUI7b0JBQ3ZCLFdBQVcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRXhDLDJGQUEyRjtvQkFDM0YsTUFBTSxDQUFDLEdBQUcsQ0FBQzt3QkFDUCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87NEJBQ3JGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3pCLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBQ0QsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7Z0JBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDdEMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXBERDtRQURDLGdCQUFTLENBQUMsU0FBUyxDQUFDO2tDQUNBLGlCQUFVO3VEQUFDO0lBTnZCLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7UUFDRixrRUFBa0U7O3lDQVUzQyxXQUFJO1lBQ0YsYUFBTTtZQUNNLHdCQUFpQjtZQUM3QixlQUFNO1lBQ0QsMEJBQVc7WUFDTCxzQ0FBaUI7T0FkeEMsY0FBYyxDQTJEMUI7SUFBRCxxQkFBQztDQUFBLEFBM0RELElBMkRDO0FBM0RZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy9BbGwgb2YgdGhlIGltcG9ydHMgbmVjZXNzYXJ5IGZvciB0aGUgbG9naW4gY2xhc3NcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkhlbHBlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FjY2Vzc1Rva2VuLmhlbHBlclwiO1xuXG4vL2RlZmluZSB0aGUgbG9naW4gY29tcG9uZW50XG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcIm5zLWxvZ2luXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW4uY29tcG9uZW50Lmh0bWxcIixcbn0pXG4vL2xvZ2luIGNvbXBvbmVudCBjbGFzcyB0aGF0IGltcGxlbWVudHMgdGhlICdBZnRlclZpZXdJbml0JyBpbXBvcnRcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy9VUkwgdXNpbmcgYWNjZXNzVG9rZW4gdG8gYXV0aGVudGljYXRlXG4gICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25Vcmw6IHN0cmluZyA9IFwiaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXV0aC9vYXV0aDIvYXV0aG9yaXplP3Jlc3BvbnNlX3R5cGU9dG9rZW4mY2xpZW50X2lkPWV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpUYVdkdVlYUjFjbVVpT2lJd1l6RTBabVkwWm1VMFpHVTBZVGM1T0RBeE9UUTRPVE14TXpJell6SXlZaUlzSWxCaGNuUnBkR2x2Ymt0bGVTSTZJakV5TlRFNU9UY3lNVFF5TURZeE56azFNamd3WHpVeE5EVTFNMlEwTFdJeE16SXROR1UzT0MxaVpXRXhMV1F5TWprd05qTmpPRE5qTlNJc0lsSnZkMHRsZVNJNklqRXlOVEU0T0RZMU5USTFNamM1TkRjME9UTTBYemsxTnpNek1tSXdMV1kyTWpjdE5EUmpZeTFpTURrM0xUTTJORGhtTldSaU5tWXdZeUo5LnFZaTIyN3czQmJ4cGF0N3RwcFlkbkY4ckhiTVgyYzdJTE1laWRiOWtkSW8mcmVkaXJlY3RfdXJpPWh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2F1dGgvb2F1dGgyL2FwcHJvdmFsJnN0YXRlPUJ1bmRsZWRvY3MuQW5kcm9pZFwiO1xuICAgIGdldCBhdXRoZW50aWNhdGlvblVybCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fYXV0aGVudGljYXRpb25Vcmw7IH1cblxuICAgIEBWaWV3Q2hpbGQoXCJ3ZWJWaWV3XCIpXG4gICAgcHJpdmF0ZSBfd2ViVmlld1JlZjogRWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2FjY2Vzc1Rva2VuSGVscGVyOiBBY2Nlc3NUb2tlbkhlbHBlcixcbiAgICApIHsgfVxuXG4gICAgLy9DYWxsZWQgYXQgcnVudGltZVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9naW4uY29tcG9uZW50Lm5nT25Jbml0Jyk7XG5cbiAgICAgICAgLy9oaWRkZW4gdGhlIGFjdGlvbiBiYXIgb24gdGhlIGxvZ2luIGNvbXBvbmVudCBhcyBpdCBjb25mbGljdHMgd2l0aCB0aGUgd2Vidmlld1xuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cbiAgICAgICAgY29uc3Qgd2VidmlldzogV2ViVmlldyA9IHRoaXMuX3dlYlZpZXdSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3Qgbmdab25lOiBOZ1pvbmUgPSB0aGlzLl9uZ1pvbmU7XG4gICAgICAgIGNvbnN0IHJvdXRlcjogUm91dGVyID0gdGhpcy5fcm91dGVyO1xuICAgICAgICBjb25zdCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UgPSB0aGlzLl9hdXRoU2VydmljZTtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5IZWxwZXI6IEFjY2Vzc1Rva2VuSGVscGVyID0gdGhpcy5fYWNjZXNzVG9rZW5IZWxwZXI7XG5cbiAgICAgICAgLy90aGlzIGdldHMgY2FsbGVkIHdoZW4gdGhlIHdlYnZpZXcgaXMgbG9hZGVkXG4gICAgICAgIHdlYnZpZXcub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IExvYWRFdmVudERhdGEpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aGVudGljYXRpb25Vcmw6IHN0cmluZyA9IGFyZ3MudXJsO1xuXG4gICAgICAgICAgICAgICAgLy90ZXN0IGZvciBleGlzdGFuY2Ugb2YgdGhlIGFjY2VzcyB0b2tlbiBpbiB0aGUgdXJsXG4gICAgICAgICAgICAgICAgdmFyIGlzSW5Vcmw6IGJvb2xlYW4gPSBhY2Nlc3NUb2tlbkhlbHBlci5pc0FjY2Vzc1Rva2VuSW5VcmwoYXV0aGVudGljYXRpb25VcmwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzSW5VcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy93aGVuIGFuIGFjY2VzcyB0b2tlbiBpcyBpbiB0aGUgdXJsXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuSGVscGVyLnRvQWNjZXNzVG9rZW5Gcm9tVXJsKGF1dGhlbnRpY2F0aW9uVXJsKTtcblxuICAgICAgICAgICAgICAgICAgICAvL3NhdmUgdGhlIGFjY2VzcyB0b2tlblxuICAgICAgICAgICAgICAgICAgICBhdXRoU2VydmljZS5zZXRBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9uYXZpZ2F0ZSByb3V0ZXIgdG8gc2VjdXJlIGNvbXBvbmVudCB3aXRoIG91ciBhY2Nlc3MgdG9rZW4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbXCIvc2VjdXJlXCJdLCB7IHF1ZXJ5UGFyYW1zOiB7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiB9IH0pLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbi5jb21wb25lbnQuV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudFwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleGNlcHRpb24udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=