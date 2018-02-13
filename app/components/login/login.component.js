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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWtEO0FBQ2xELHNDQUFxSDtBQUNySCx3Q0FBcUQ7QUFPckQsMENBQXlEO0FBQ3pELDZDQUFrRDtBQUVsRCxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBTzFCO0lBSUksNEJBQTRCO0lBQzVCLHdCQUEyQixNQUFjLEVBQVUsS0FBdUIsRUFBUyxLQUFpQjtRQUF6RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBSHBHLGNBQWM7UUFDUCxpQkFBWSxHQUFXLGlnQkFBaWdCLENBQUM7UUFLemhCLFlBQU8sR0FBVyxTQUFTLENBQUM7SUFEbkMsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxXQUFrQjtRQUMzQixxREFBcUQ7UUFDckQseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87WUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCx3Q0FBZSxHQUFmO1FBQUEsaUJBMkRDO1FBMURHLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3JELElBQUksT0FBTyxHQUFXLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBa0IsNENBQTRDLENBQUM7YUFDNUUsU0FBUyxDQUNWLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMs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VyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO1FBQ0Ysa0VBQWtFOzt5Q0FNM0IsZUFBTSxFQUFnQix3QkFBaUIsRUFBZ0IsaUJBQVU7T0FMM0YsY0FBYyxDQXFGMUI7SUFBRCxxQkFBQztDQUFBLEFBckZELElBcUZDO0FBckZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy9BbGwgb2YgdGhlIGltcG9ydHMgbmVjZXNzYXJ5IGZvciB0aGUgbG9naW4gY2xhc3NcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0ICogYXMgd2ViVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBnZXRWaWV3QnlJZCwgdG9wbW9zdCwgTmF2aWdhdGlvbkVudHJ5fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xyXG5pbXBvcnQgKiBhcyBwYWdlcyBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuLy9sZXQgYWNjZXNzVG9rZW47XHJcbi8vZGVmaW5pbmcgbG9naW4gY29tcG9uZW50XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLWxvZ2luXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJsb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG4vL0xvZ2luIGNvbXBvbmVudCBjbGFzcyB0aGF0IGltcGxlbWVudHMgdGhlICdBZnRlclZpZXdJbml0JyBpbXBvcnRcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3l7XHJcbiAgICBcclxuICAgIC8vV2ViIHZpZXcgVVJMXHJcbiAgICBwdWJsaWMgbXlXZWJWaWV3U3JjOiBzdHJpbmcgPSBcImh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2F1dGgvb2F1dGgyL2F1dGhvcml6ZT9yZXNwb25zZV90eXBlPXRva2VuJmNsaWVudF9pZD1leUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKVGFXZHVZWFIxY21VaU9pSXdZekUwWm1ZMFptVTBaR1UwWVRjNU9EQXhPVFE0T1RNeE16SXpZekl5WWlJc0lsQmhjblJwZEdsdmJrdGxlU0k2SWpFeU5URTVPVGN5TVRReU1EWXhOemsxTWpnd1h6VXhORFUxTTJRMExXSXhNekl0TkdVM09DMWlaV0V4TFdReU1qa3dOak5qT0ROak5TSXNJbEp2ZDB0bGVTSTZJakV5TlRFNE9EWTFOVEkxTWpjNU5EYzBPVE0wWHprMU56TXpNbUl3TFdZMk1qY3RORFJqWXkxaU1EazNMVE0yTkRobU5XUmlObVl3WXlKOS5xWWkyMjd3M0JieHBhdDd0cHBZZG5GOHJIYk1YMmM3SUxNZWlkYjlrZElvJnJlZGlyZWN0X3VyaT1odHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hdXRoL29hdXRoMi9hcHByb3ZhbCZzdGF0ZT11c2VyLWlkLWZyb20tbXktYXBwbGljYXRpb25cIjtcclxuICAgIC8vQ29uc3RydWN0b3IgZm9yIHRoZSBSb3V0ZXJcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNkUmVmOkNoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgX2h0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHVibGljIE15VmFsdWU6IHN0cmluZyA9IFwibm9WYWx1ZVwiO1xyXG4gICAgbXlOYXZpZ2F0aW9uKGFjY2Vzc1Rva2VuOnN0cmluZyl7XHJcbiAgICAgICAgLy9yb3V0ZXIgbmF2aWdhdGVzIHRvIHRoZSBzZWN1cmUgc2VydmVyIGFuZCBwYXNzZXMgaW5cclxuICAgICAgICAvL3RoZSBhY2Nlc3MgdG9rZW4gaW4gdGhlIHF1ZXJ5IHBlcmFtZXRlclxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0sIHsgcXVlcnlQYXJhbXM6IHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuIH0gfSkudGhlbigoc3VjY2Vzcyk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChcIm15V2ViVmlld1wiKSB3ZWJWaWV3UmVmOiBFbGVtZW50UmVmOyAgICBcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBsZXQgd2VidmlldzogV2ViVmlldyA9IHRoaXMud2ViVmlld1JlZi5uYXRpdmVFbGVtZW50OyAgICAgICAgICAgICAgICBcclxuICAgICAgICBsZXQgbXlWYWx1ZTogc3RyaW5nID0gXCJteVZhbHVlXCI7IFxyXG4gICAgICAgIHRoaXMuX2h0dHAuZ2V0PEFwcFJlc3BvbnNlVXNlcj4oJ2h0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2FwaS92MS91c2Vycy9tZScpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEuZGF0YVswXS5FbWFpbCksXHJcbiAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycikpXHJcbiAgICApOyAgICBcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGdldEFjY2Vzc1Rva2VuID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhY2Nlc3NUb2tlbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNBY2Nlc3NUb2tlbkluVXJsKHVybCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IFwiZ2l2ZSBtZSBhIHVybCB0aGF0IGhhcyBhbiBhY2Nlc3MgdG9rZW5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGFjY2Vzc1Rva2VuUGFydE9uZTogc3RyaW5nW10gPSB1cmwuc3BsaXQoJ2FjY2Vzc190b2tlbj0nKTtcclxuICAgICAgICAgICAgbGV0IGFjY2Vzc1Rva2VuUGFydE9uZVJldmVyc2U6IHN0cmluZ1tdID0gYWNjZXNzVG9rZW5QYXJ0T25lLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlblBhcnRPbmVSZXZlcnNlLmpvaW4oJycpLnNwbGl0KCcmJywgMSlbMF07XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzVG9rZW4nLCBhY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd5b3VyIGFjY2VzcyB0b2tlbiBpcyAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaXNBY2Nlc3NUb2tlbkluVXJsID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGVzdCBmb3IgYWNjZXNzIHRva2VuXHJcbiAgICAgICAgICAgIHJldHVybiAodXJsLmluZGV4T2YoXCJhY2Nlc3NfdG9rZW5cIikgPi0xKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbmF2aWdhdGVUb1NlY3VyZUNvbXBvbmVudCA9IChhY2Nlc3NUb2tlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIC8vdGVzdCBmb3IgYWNjZXNzIHRva2VuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm15TmF2aWdhdGlvbihhY2Nlc3NUb2tlbik7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RoaXMgZ2V0cyBjYWxsZWQgd2hlbiB0aGUgd2VidmlldyBpcyBsb2FkZWRcclxuICAgICAgICB3ZWJ2aWV3Lm9uKFdlYlZpZXcubG9hZEZpbmlzaGVkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBMb2FkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBhdXRoZW50aWNhdGlvblVybCA9IGFyZ3MudXJsOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAvL3Rlc3QgZm9yIGV4aXN0YW5jZSBvZiB0aGUgYWNjZXNzIHRva2VuIGluIHRoZSB1cmxcclxuICAgICAgICAgICAgICAgIHZhciBpc0luVXJsOmJvb2xlYW4gPSBpc0FjY2Vzc1Rva2VuSW5VcmwoYXV0aGVudGljYXRpb25VcmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlzSW5Vcmwpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vd2hlbiBhbiBhY2Nlc3MgdG9rZW4gaXMgaW4gdGhlIHVybFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IGdldEFjY2Vzc1Rva2VuKGF1dGhlbnRpY2F0aW9uVXJsKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vbmF2aWdhdGUgcm91dGVyIHRvIHNlY3VyZSBjb21wb25lbnQgd2l0aCBvdXIgYWNjZXNzIHRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb1NlY3VyZUNvbXBvbmVudChhY2Nlc3NUb2tlbik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKGV4Y2VwdGlvbil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbm5vdCBnZXQgYXV0aGVudGljYXRpb25VUkxcIik7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgICAvL0NhbGxlZCBhdCBydW50aW1lXHJcbiAgICBuZ09uSW5pdCgpIHsgICAgICAgICAgICBcclxuICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgZ290IGNhbGxlZCAtIG5nT25Jbml0Jyk7XHJcbiAgICB9ICBcclxuICAgIG5nT25EZXN0cm95KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgZ290IGNhbGxlZCAtIG5nT25EZXN0cm95Jyk7XHJcbiAgICB9ICBcclxufSJdfQ==