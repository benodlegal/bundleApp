"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//All of the imports necessary for the login class
var core_1 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var router_1 = require("@angular/router");
//let accessToken;
//defining login component
var LoginComponent = (function () {
    //Constructor for the Router
    function LoginComponent(router, cdRef) {
        this.router = router;
        this.cdRef = cdRef;
        //Web view URL
        this.myWebViewSrc = "https://app.bundledocs.com/auth/oauth2/authorize?response_type=token&client_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJTaWduYXR1cmUiOiIwYzE0ZmY0ZmU0ZGU0YTc5ODAxOTQ4OTMxMzIzYzIyYiIsIlBhcnRpdGlvbktleSI6IjEyNTE5OTcyMTQyMDYxNzk1MjgwXzUxNDU1M2Q0LWIxMzItNGU3OC1iZWExLWQyMjkwNjNjODNjNSIsIlJvd0tleSI6IjEyNTE4ODY1NTI1Mjc5NDc0OTM0Xzk1NzMzMmIwLWY2MjctNDRjYy1iMDk3LTM2NDhmNWRiNmYwYyJ9.qYi227w3Bbxpat7tppYdnF8rHbMX2c7ILMeidb9kdIo&redirect_uri=https://app.bundledocs.com/auth/oauth2/approval&state=user-id-from-my-application";
        this.MyValue = "noValue";
    }
    LoginComponent.prototype.myNavigation = function (accessToken) {
        //router navigates to the secure server and passes in
        //the access token in the query perameter
        this.router.navigate(["/secure"], { queryParams: { accessToken: accessToken } }).then(function (success) {
            console.log(success);
        });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var webview = this.webViewRef.nativeElement;
        var myValue = "myValue";
        //getAccessToken method returns only the access token 
        //this is done by reversing the url, splitting it by
        //the acess_token= string to get rid of the start, then reversing it again
        //and splitting with the & sign
        var getAccessToken = function (url) {
            var accessToken = "";
            if (!isAccessTokenInUrl(url)) {
                throw "give me a url that has an access token";
            }
            var accessTokenPartOne = url.split('access_token=');
            var accessTokenPartOneReverse = accessTokenPartOne.reverse();
            accessToken = accessTokenPartOneReverse.join('').split('&', 1)[0];
            console.log(accessToken);
            console.log("------------------------------------");
            return accessToken;
        };
        var isAccessTokenInUrl = function (url) {
            //test for access token
            return (url.indexOf("access_token") > -1);
        };
        var navigateToSecureComponent = function (accessToken) {
            //test for access token
            _this.myNavigation(accessToken);
        };
        //this gets called when the webview is loaded
        webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
            var authenticationUrl = args.url;
            try {
                //test for existance of the access token in the url
                var isInUrl = isAccessTokenInUrl(authenticationUrl);
                if (isInUrl) {
                    //when an access token is in the url
                    var accessToken = getAccessToken(authenticationUrl);
                    //navigate router to secure component with our access token
                    navigateToSecureComponent(accessToken);
                }
            }
            catch (exception) {
                console.log("cannot get authenticationURL");
            }
        });
        this.cdRef.detectChanges();
    };
    //Called at runtime
    LoginComponent.prototype.ngOnInit = function () {
        console.log('this got called - ngOnInit');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        console.log('this got called - ngOnDestroy');
    };
    __decorate([
        core_1.ViewChild("myWebView"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "webViewRef", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-login",
            templateUrl: "login.component.html",
        })
        //Login component class that implements the 'AfterViewInit' import
        ,
        __metadata("design:paramtypes", [router_1.Router, core_1.ChangeDetectorRef])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWtEO0FBQ2xELHNDQUFxSDtBQUNySCx3Q0FBcUQ7QUFPckQsMENBQXlEO0FBRXpELGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFPMUI7SUFJSSw0QkFBNEI7SUFDNUIsd0JBQTJCLE1BQWMsRUFBVSxLQUF1QjtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFIMUUsY0FBYztRQUNQLGlCQUFZLEdBQVcsaWdCQUFpZ0IsQ0FBQztRQUt6aEIsWUFBTyxHQUFXLFNBQVMsQ0FBQztJQURuQyxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLFdBQWtCO1FBQzNCLHFEQUFxRDtRQUNyRCx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTztZQUMxRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELHdDQUFlLEdBQWY7UUFBQSxpQkEwREM7UUF6REcsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDckQsSUFBSSxPQUFPLEdBQVcsU0FBUyxDQUFDO1FBRWhDLHNEQUFzRDtRQUN0RCxvREFBb0Q7UUFDcEQsMEVBQTBFO1FBQzFFLCtCQUErQjtRQUMvQixJQUFNLGNBQWMsR0FBRyxVQUFDLEdBQVc7WUFDL0IsSUFBSSxXQUFXLEdBQVcsRUFBRSxDQUFDO1lBRTdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLHdDQUF3QyxDQUFDO1lBQ25ELENBQUM7WUFFRCxJQUFJLGtCQUFrQixHQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDOUQsSUFBSSx5QkFBeUIsR0FBYSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2RSxXQUFXLEdBQUcseUJBQXlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7WUFFcEQsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDLENBQUE7UUFFRCxJQUFNLGtCQUFrQixHQUFHLFVBQUMsR0FBVztZQUNuQyx1QkFBdUI7WUFDdkIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQTtRQUVELElBQU0seUJBQXlCLEdBQUcsVUFBQyxXQUFtQjtZQUNsRCx1QkFBdUI7WUFFdkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUE7UUFFRCw2Q0FBNkM7UUFDN0MsT0FBTyxDQUFDLEVBQUUsQ0FBQyxrQkFBTyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsSUFBbUI7WUFDL0QsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBRWpDLElBQUcsQ0FBQztnQkFDQSxtREFBbUQ7Z0JBQ25ELElBQUksT0FBTyxHQUFXLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBRTVELEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7b0JBQ1Isb0NBQW9DO29CQUNwQyxJQUFJLFdBQVcsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFFcEQsMkRBQTJEO29CQUMzRCx5QkFBeUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztZQUNMLENBQUM7WUFDRCxLQUFLLENBQUEsQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUNoRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDRCxtQkFBbUI7SUFDbkIsaUNBQVEsR0FBUjtRQUNLLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0Qsb0NBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBbEV1QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBYSxpQkFBVTtzREFBQztJQWpCdEMsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQztRQUNGLGtFQUFrRTs7eUNBTTNCLGVBQU0sRUFBZ0Isd0JBQWlCO09BTGpFLGNBQWMsQ0FvRjFCO0lBQUQscUJBQUM7Q0FBQSxBQXBGRCxJQW9GQztBQXBGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vQWxsIG9mIHRoZSBpbXBvcnRzIG5lY2Vzc2FyeSBmb3IgdGhlIGxvZ2luIGNsYXNzXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3l9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XHJcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCAqIGFzIHdlYlZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvd2ViLXZpZXdcIjtcclxuaW1wb3J0IHsgZ2V0Vmlld0J5SWQsIHRvcG1vc3QsIE5hdmlnYXRpb25FbnRyeX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuaW1wb3J0ICogYXMgcGFnZXMgZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbi8vbGV0IGFjY2Vzc1Rva2VuO1xyXG4vL2RlZmluaW5nIGxvZ2luIGNvbXBvbmVudFxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuLy9Mb2dpbiBjb21wb25lbnQgY2xhc3MgdGhhdCBpbXBsZW1lbnRzIHRoZSAnQWZ0ZXJWaWV3SW5pdCcgaW1wb3J0XHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95e1xyXG4gICAgXHJcbiAgICAvL1dlYiB2aWV3IFVSTFxyXG4gICAgcHVibGljIG15V2ViVmlld1NyYzogc3RyaW5nID0gXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hdXRoL29hdXRoMi9hdXRob3JpemU/cmVzcG9uc2VfdHlwZT10b2tlbiZjbGllbnRfaWQ9ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SlRhV2R1WVhSMWNtVWlPaUl3WXpFMFptWTBabVUwWkdVMFlUYzVPREF4T1RRNE9UTXhNekl6WXpJeVlpSXNJbEJoY25ScGRHbHZia3RsZVNJNklqRXlOVEU1T1RjeU1UUXlNRFl4TnprMU1qZ3dYelV4TkRVMU0yUTBMV0l4TXpJdE5HVTNPQzFpWldFeExXUXlNamt3TmpOak9ETmpOU0lzSWxKdmQwdGxlU0k2SWpFeU5URTRPRFkxTlRJMU1qYzVORGMwT1RNMFh6azFOek16TW1Jd0xXWTJNamN0TkRSall5MWlNRGszTFRNMk5EaG1OV1JpTm1Zd1l5SjkucVlpMjI3dzNCYnhwYXQ3dHBwWWRuRjhySGJNWDJjN0lMTWVpZGI5a2RJbyZyZWRpcmVjdF91cmk9aHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXV0aC9vYXV0aDIvYXBwcm92YWwmc3RhdGU9dXNlci1pZC1mcm9tLW15LWFwcGxpY2F0aW9uXCI7XHJcbiAgICAvL0NvbnN0cnVjdG9yIGZvciB0aGUgUm91dGVyXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjZFJlZjpDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgTXlWYWx1ZTogc3RyaW5nID0gXCJub1ZhbHVlXCI7XHJcbiAgICBteU5hdmlnYXRpb24oYWNjZXNzVG9rZW46c3RyaW5nKXtcclxuICAgICAgICAvL3JvdXRlciBuYXZpZ2F0ZXMgdG8gdGhlIHNlY3VyZSBzZXJ2ZXIgYW5kIHBhc3NlcyBpblxyXG4gICAgICAgIC8vdGhlIGFjY2VzcyB0b2tlbiBpbiB0aGUgcXVlcnkgcGVyYW1ldGVyXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlY3VyZVwiXSwgeyBxdWVyeVBhcmFtczogeyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4gfSB9KS50aGVuKChzdWNjZXNzKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKFwibXlXZWJWaWV3XCIpIHdlYlZpZXdSZWY6IEVsZW1lbnRSZWY7ICAgIFxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGxldCB3ZWJ2aWV3OiBXZWJWaWV3ID0gdGhpcy53ZWJWaWV3UmVmLm5hdGl2ZUVsZW1lbnQ7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBteVZhbHVlOiBzdHJpbmcgPSBcIm15VmFsdWVcIjsgXHJcblxyXG4gICAgICAgIC8vZ2V0QWNjZXNzVG9rZW4gbWV0aG9kIHJldHVybnMgb25seSB0aGUgYWNjZXNzIHRva2VuIFxyXG4gICAgICAgIC8vdGhpcyBpcyBkb25lIGJ5IHJldmVyc2luZyB0aGUgdXJsLCBzcGxpdHRpbmcgaXQgYnlcclxuICAgICAgICAvL3RoZSBhY2Vzc190b2tlbj0gc3RyaW5nIHRvIGdldCByaWQgb2YgdGhlIHN0YXJ0LCB0aGVuIHJldmVyc2luZyBpdCBhZ2FpblxyXG4gICAgICAgIC8vYW5kIHNwbGl0dGluZyB3aXRoIHRoZSAmIHNpZ25cclxuICAgICAgICBjb25zdCBnZXRBY2Nlc3NUb2tlbiA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzQWNjZXNzVG9rZW5JblVybCh1cmwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBcImdpdmUgbWUgYSB1cmwgdGhhdCBoYXMgYW4gYWNjZXNzIHRva2VuXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBhY2Nlc3NUb2tlblBhcnRPbmU6IHN0cmluZ1tdID0gdXJsLnNwbGl0KCdhY2Nlc3NfdG9rZW49Jyk7XHJcbiAgICAgICAgICAgIGxldCBhY2Nlc3NUb2tlblBhcnRPbmVSZXZlcnNlOiBzdHJpbmdbXSA9IGFjY2Vzc1Rva2VuUGFydE9uZS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW5QYXJ0T25lUmV2ZXJzZS5qb2luKCcnKS5zcGxpdCgnJicsIDEpWzBdO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTsgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGlzQWNjZXNzVG9rZW5JblVybCA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAvL3Rlc3QgZm9yIGFjY2VzcyB0b2tlblxyXG4gICAgICAgICAgICByZXR1cm4gKHVybC5pbmRleE9mKFwiYWNjZXNzX3Rva2VuXCIpID4tMSk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRlVG9TZWN1cmVDb21wb25lbnQgPSAoYWNjZXNzVG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAvL3Rlc3QgZm9yIGFjY2VzcyB0b2tlblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5teU5hdmlnYXRpb24oYWNjZXNzVG9rZW4pOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90aGlzIGdldHMgY2FsbGVkIHdoZW4gdGhlIHdlYnZpZXcgaXMgbG9hZGVkXHJcbiAgICAgICAgd2Vidmlldy5vbihXZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogTG9hZEV2ZW50RGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgYXV0aGVudGljYXRpb25VcmwgPSBhcmdzLnVybDsgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgLy90ZXN0IGZvciBleGlzdGFuY2Ugb2YgdGhlIGFjY2VzcyB0b2tlbiBpbiB0aGUgdXJsXHJcbiAgICAgICAgICAgICAgICB2YXIgaXNJblVybDpib29sZWFuID0gaXNBY2Nlc3NUb2tlbkluVXJsKGF1dGhlbnRpY2F0aW9uVXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpc0luVXJsKXtcclxuICAgICAgICAgICAgICAgICAgICAvL3doZW4gYW4gYWNjZXNzIHRva2VuIGlzIGluIHRoZSB1cmxcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBnZXRBY2Nlc3NUb2tlbihhdXRoZW50aWNhdGlvblVybCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL25hdmlnYXRlIHJvdXRlciB0byBzZWN1cmUgY29tcG9uZW50IHdpdGggb3VyIGFjY2VzcyB0b2tlblxyXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9TZWN1cmVDb21wb25lbnQoYWNjZXNzVG9rZW4pOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaChleGNlcHRpb24pe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW5ub3QgZ2V0IGF1dGhlbnRpY2F0aW9uVVJMXCIpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9KTsgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gICAgLy9DYWxsZWQgYXQgcnVudGltZVxyXG4gICAgbmdPbkluaXQoKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGdvdCBjYWxsZWQgLSBuZ09uSW5pdCcpO1xyXG4gICAgfSAgXHJcbiAgICBuZ09uRGVzdHJveSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGdvdCBjYWxsZWQgLSBuZ09uRGVzdHJveScpO1xyXG4gICAgfSAgXHJcbn0iXX0=