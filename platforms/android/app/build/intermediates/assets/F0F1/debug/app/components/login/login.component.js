"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//All of the imports necessary for the login class
var core_1 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
//let accessToken;
//defining login component
var LoginComponent = (function () {
    //Constructor for the Router
    function LoginComponent(router, cdRef, _http) {
        this.router = router;
        this.cdRef = cdRef;
        this._http = _http;
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
        this._http.get('https://app.bundledocs.com/api/v1/users/me')
            .subscribe(function (data) { return console.log(data.data[0].Email); }, function (err) { return console.log(JSON.stringify(err)); });
        var getAccessToken = function (url) {
            var accessToken = "";
            if (!isAccessTokenInUrl(url)) {
                throw "give me a url that has an access token";
            }
            var accessTokenPartOne = url.split('access_token=');
            var accessTokenPartOneReverse = accessTokenPartOne.reverse();
            accessToken = accessTokenPartOneReverse.join('').split('&', 1)[0];
            localStorage.setItem('accessToken', accessToken);
            console.log('your access token is ' + localStorage.getItem('accessToken'));
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
        __metadata("design:paramtypes", [router_1.Router, core_1.ChangeDetectorRef, http_1.HttpClient])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWtEO0FBQ2xELHNDQUFzSDtBQUN0SCx3Q0FBcUQ7QUFPckQsMENBQTJEO0FBQzNELDZDQUFrRDtBQUVsRCxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBTzFCO0lBSUksNEJBQTRCO0lBQzVCLHdCQUEyQixNQUFjLEVBQVUsS0FBd0IsRUFBUyxLQUFpQjtRQUExRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBSHJHLGNBQWM7UUFDUCxpQkFBWSxHQUFXLGlnQkFBaWdCLENBQUM7UUFLemhCLFlBQU8sR0FBVyxTQUFTLENBQUM7SUFEbkMsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxXQUFtQjtRQUM1QixxREFBcUQ7UUFDckQseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87WUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCx3Q0FBZSxHQUFmO1FBQUEsaUJBMkRDO1FBMURHLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3JELElBQUksT0FBTyxHQUFXLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBa0IsNENBQTRDLENBQUM7YUFDeEUsU0FBUyxDQUNWLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMs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VyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO1FBQ0Ysa0VBQWtFOzt5Q0FNM0IsZUFBTSxFQUFpQix3QkFBaUIsRUFBZ0IsaUJBQVU7T0FMNUYsY0FBYyxDQXFGMUI7SUFBRCxxQkFBQztDQUFBLEFBckZELElBcUZDO0FBckZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy9BbGwgb2YgdGhlIGltcG9ydHMgbmVjZXNzYXJ5IGZvciB0aGUgbG9naW4gY2xhc3NcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XHJcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCAqIGFzIHdlYlZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvd2ViLXZpZXdcIjtcclxuaW1wb3J0IHsgZ2V0Vmlld0J5SWQsIHRvcG1vc3QsIE5hdmlnYXRpb25FbnRyeSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCAqIGFzIHBhZ2VzIGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbi8vbGV0IGFjY2Vzc1Rva2VuO1xyXG4vL2RlZmluaW5nIGxvZ2luIGNvbXBvbmVudFxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuLy9Mb2dpbiBjb21wb25lbnQgY2xhc3MgdGhhdCBpbXBsZW1lbnRzIHRoZSAnQWZ0ZXJWaWV3SW5pdCcgaW1wb3J0XHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICAvL1dlYiB2aWV3IFVSTFxyXG4gICAgcHVibGljIG15V2ViVmlld1NyYzogc3RyaW5nID0gXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hdXRoL29hdXRoMi9hdXRob3JpemU/cmVzcG9uc2VfdHlwZT10b2tlbiZjbGllbnRfaWQ9ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SlRhV2R1WVhSMWNtVWlPaUl3WXpFMFptWTBabVUwWkdVMFlUYzVPREF4T1RRNE9UTXhNekl6WXpJeVlpSXNJbEJoY25ScGRHbHZia3RsZVNJNklqRXlOVEU1T1RjeU1UUXlNRFl4TnprMU1qZ3dYelV4TkRVMU0yUTBMV0l4TXpJdE5HVTNPQzFpWldFeExXUXlNamt3TmpOak9ETmpOU0lzSWxKdmQwdGxlU0k2SWpFeU5URTRPRFkxTlRJMU1qYzVORGMwT1RNMFh6azFOek16TW1Jd0xXWTJNamN0TkRSall5MWlNRGszTFRNMk5EaG1OV1JpTm1Zd1l5SjkucVlpMjI3dzNCYnhwYXQ3dHBwWWRuRjhySGJNWDJjN0lMTWVpZGI5a2RJbyZyZWRpcmVjdF91cmk9aHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXV0aC9vYXV0aDIvYXBwcm92YWwmc3RhdGU9dXNlci1pZC1mcm9tLW15LWFwcGxpY2F0aW9uXCI7XHJcbiAgICAvL0NvbnN0cnVjdG9yIGZvciB0aGUgUm91dGVyXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHB1YmxpYyBfaHR0cDogSHR0cENsaWVudCkge1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBNeVZhbHVlOiBzdHJpbmcgPSBcIm5vVmFsdWVcIjtcclxuICAgIG15TmF2aWdhdGlvbihhY2Nlc3NUb2tlbjogc3RyaW5nKSB7XHJcbiAgICAgICAgLy9yb3V0ZXIgbmF2aWdhdGVzIHRvIHRoZSBzZWN1cmUgc2VydmVyIGFuZCBwYXNzZXMgaW5cclxuICAgICAgICAvL3RoZSBhY2Nlc3MgdG9rZW4gaW4gdGhlIHF1ZXJ5IHBlcmFtZXRlclxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0sIHsgcXVlcnlQYXJhbXM6IHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuIH0gfSkudGhlbigoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKFwibXlXZWJWaWV3XCIpIHdlYlZpZXdSZWY6IEVsZW1lbnRSZWY7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgbGV0IHdlYnZpZXc6IFdlYlZpZXcgPSB0aGlzLndlYlZpZXdSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgbXlWYWx1ZTogc3RyaW5nID0gXCJteVZhbHVlXCI7XHJcbiAgICAgICAgdGhpcy5faHR0cC5nZXQ8QXBwUmVzcG9uc2VVc2VyPignaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXBpL3YxL3VzZXJzL21lJylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmRhdGFbMF0uRW1haWwpLFxyXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFjY2Vzc1Rva2VuOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0FjY2Vzc1Rva2VuSW5VcmwodXJsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJnaXZlIG1lIGEgdXJsIHRoYXQgaGFzIGFuIGFjY2VzcyB0b2tlblwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgYWNjZXNzVG9rZW5QYXJ0T25lOiBzdHJpbmdbXSA9IHVybC5zcGxpdCgnYWNjZXNzX3Rva2VuPScpO1xyXG4gICAgICAgICAgICBsZXQgYWNjZXNzVG9rZW5QYXJ0T25lUmV2ZXJzZTogc3RyaW5nW10gPSBhY2Nlc3NUb2tlblBhcnRPbmUucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuUGFydE9uZVJldmVyc2Uuam9pbignJykuc3BsaXQoJyYnLCAxKVswXTtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NUb2tlbicsIGFjY2Vzc1Rva2VuKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3lvdXIgYWNjZXNzIHRva2VuIGlzICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc0FjY2Vzc1Rva2VuSW5VcmwgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgLy90ZXN0IGZvciBhY2Nlc3MgdG9rZW5cclxuICAgICAgICAgICAgcmV0dXJuICh1cmwuaW5kZXhPZihcImFjY2Vzc190b2tlblwiKSA+IC0xKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRlVG9TZWN1cmVDb21wb25lbnQgPSAoYWNjZXNzVG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAvL3Rlc3QgZm9yIGFjY2VzcyB0b2tlblxyXG5cclxuICAgICAgICAgICAgdGhpcy5teU5hdmlnYXRpb24oYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90aGlzIGdldHMgY2FsbGVkIHdoZW4gdGhlIHdlYnZpZXcgaXMgbG9hZGVkXHJcbiAgICAgICAgd2Vidmlldy5vbihXZWJWaWV3LmxvYWRGaW5pc2hlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogTG9hZEV2ZW50RGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgYXV0aGVudGljYXRpb25VcmwgPSBhcmdzLnVybDtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvL3Rlc3QgZm9yIGV4aXN0YW5jZSBvZiB0aGUgYWNjZXNzIHRva2VuIGluIHRoZSB1cmxcclxuICAgICAgICAgICAgICAgIHZhciBpc0luVXJsOiBib29sZWFuID0gaXNBY2Nlc3NUb2tlbkluVXJsKGF1dGhlbnRpY2F0aW9uVXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNJblVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vd2hlbiBhbiBhY2Nlc3MgdG9rZW4gaXMgaW4gdGhlIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IGdldEFjY2Vzc1Rva2VuKGF1dGhlbnRpY2F0aW9uVXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9uYXZpZ2F0ZSByb3V0ZXIgdG8gc2VjdXJlIGNvbXBvbmVudCB3aXRoIG91ciBhY2Nlc3MgdG9rZW5cclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvU2VjdXJlQ29tcG9uZW50KGFjY2Vzc1Rva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbm5vdCBnZXQgYXV0aGVudGljYXRpb25VUkxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgICAvL0NhbGxlZCBhdCBydW50aW1lXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBnb3QgY2FsbGVkIC0gbmdPbkluaXQnKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGdvdCBjYWxsZWQgLSBuZ09uRGVzdHJveScpO1xyXG4gICAgfVxyXG59Il19