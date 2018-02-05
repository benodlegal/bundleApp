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
    function LoginComponent(router) {
        this.router = router;
        //Web view URL
        this.myWebViewSrc = "https://app.bundledocs.com/auth/oauth2/authorize?response_type=token&client_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJTaWduYXR1cmUiOiIwYzE0ZmY0ZmU0ZGU0YTc5ODAxOTQ4OTMxMzIzYzIyYiIsIlBhcnRpdGlvbktleSI6IjEyNTE5OTcyMTQyMDYxNzk1MjgwXzUxNDU1M2Q0LWIxMzItNGU3OC1iZWExLWQyMjkwNjNjODNjNSIsIlJvd0tleSI6IjEyNTE4ODY1NTI1Mjc5NDc0OTM0Xzk1NzMzMmIwLWY2MjctNDRjYy1iMDk3LTM2NDhmNWRiNmYwYyJ9.qYi227w3Bbxpat7tppYdnF8rHbMX2c7ILMeidb9kdIo&redirect_uri=https://app.bundledocs.com/auth/oauth2/approval&state=user-id-from-my-application";
        this.MyValue = "noValue";
    }
    LoginComponent.prototype.myNavigation = function (accessToken) {
        //router navigates to the secure server and passes in
        //the access token in the query perameter
        this.router.navigate(["/secure"], { queryParams: { accessToken: accessToken } });
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
    };
    //Called at runtime
    LoginComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWtEO0FBQ2xELHNDQUF3RjtBQUN4Rix3Q0FBcUQ7QUFPckQsMENBQXlEO0FBQ3pELGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFPMUI7SUFHSSw0QkFBNEI7SUFDNUIsd0JBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSHpDLGNBQWM7UUFDUCxpQkFBWSxHQUFXLGlnQkFBaWdCLENBQUM7UUFLemhCLFlBQU8sR0FBVyxTQUFTLENBQUM7SUFEbkMsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxXQUFrQjtRQUMzQixxREFBcUQ7UUFDckQseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFHRCx3Q0FBZSxHQUFmO1FBQUEsaUJBd0RDO1FBdkRHLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3JELElBQUksT0FBTyxHQUFXLFNBQVMsQ0FBQztRQUVoQyxzREFBc0Q7UUFDdEQsb0RBQW9EO1FBQ3BELDBFQUEwRTtRQUMxRSwrQkFBK0I7UUFDL0IsSUFBTSxjQUFjLEdBQUcsVUFBQyxHQUFXO1lBQy9CLElBQUksV0FBVyxHQUFXLEVBQUUsQ0FBQztZQUU3QixFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsTUFBTSx3Q0FBd0MsQ0FBQztZQUNuRCxDQUFDO1lBRUQsSUFBSSxrQkFBa0IsR0FBYSxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzlELElBQUkseUJBQXlCLEdBQWEsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkUsV0FBVyxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1lBRXBELE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQyxDQUFBO1FBRUQsSUFBTSxrQkFBa0IsR0FBRyxVQUFDLEdBQVc7WUFDbkMsdUJBQXVCO1lBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUE7UUFFRCxJQUFNLHlCQUF5QixHQUFHLFVBQUMsV0FBbUI7WUFDbEQsdUJBQXVCO1lBRXZCLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFBO1FBRUQsNkNBQTZDO1FBQzdDLE9BQU8sQ0FBQyxFQUFFLENBQUMsa0JBQU8sQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLElBQW1CO1lBQy9ELElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUVqQyxJQUFHLENBQUM7Z0JBQ0EsbURBQW1EO2dCQUNuRCxJQUFJLE9BQU8sR0FBVyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUU1RCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO29CQUNSLG9DQUFvQztvQkFDcEMsSUFBSSxXQUFXLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBRXBELDJEQUEyRDtvQkFDM0QseUJBQXlCLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzNDLENBQUM7WUFDTCxDQUFDO1lBQ0QsS0FBSyxDQUFBLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDaEQsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELG1CQUFtQjtJQUNaLGlDQUFRLEdBQWY7SUFFQSxDQUFDO0lBN0R1QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBYSxpQkFBVTtzREFBQztJQWR0QyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO1FBQ0Ysa0VBQWtFOzt5Q0FLM0IsZUFBTTtPQUpoQyxjQUFjLENBNEUxQjtJQUFELHFCQUFDO0NBQUEsQUE1RUQsSUE0RUM7QUE1RVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0FsbCBvZiB0aGUgaW1wb3J0cyBuZWNlc3NhcnkgZm9yIHRoZSBsb2dpbiBjbGFzc1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0ICogYXMgd2ViVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBnZXRWaWV3QnlJZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG4vL2xldCBhY2Nlc3NUb2tlbjtcclxuLy9kZWZpbmluZyBsb2dpbiBjb21wb25lbnRcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtbG9naW5cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImxvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbi8vTG9naW4gY29tcG9uZW50IGNsYXNzIHRoYXQgaW1wbGVtZW50cyB0aGUgJ0FmdGVyVmlld0luaXQnIGltcG9ydFxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xyXG4gICAgLy9XZWIgdmlldyBVUkxcclxuICAgIHB1YmxpYyBteVdlYlZpZXdTcmM6IHN0cmluZyA9IFwiaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXV0aC9vYXV0aDIvYXV0aG9yaXplP3Jlc3BvbnNlX3R5cGU9dG9rZW4mY2xpZW50X2lkPWV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpUYVdkdVlYUjFjbVVpT2lJd1l6RTBabVkwWm1VMFpHVTBZVGM1T0RBeE9UUTRPVE14TXpJell6SXlZaUlzSWxCaGNuUnBkR2x2Ymt0bGVTSTZJakV5TlRFNU9UY3lNVFF5TURZeE56azFNamd3WHpVeE5EVTFNMlEwTFdJeE16SXROR1UzT0MxaVpXRXhMV1F5TWprd05qTmpPRE5qTlNJc0lsSnZkMHRsZVNJNklqRXlOVEU0T0RZMU5USTFNamM1TkRjME9UTTBYemsxTnpNek1tSXdMV1kyTWpjdE5EUmpZeTFpTURrM0xUTTJORGhtTldSaU5tWXdZeUo5LnFZaTIyN3czQmJ4cGF0N3RwcFlkbkY4ckhiTVgyYzdJTE1laWRiOWtkSW8mcmVkaXJlY3RfdXJpPWh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2F1dGgvb2F1dGgyL2FwcHJvdmFsJnN0YXRlPXVzZXItaWQtZnJvbS1teS1hcHBsaWNhdGlvblwiO1xyXG4gICAgLy9Db25zdHJ1Y3RvciBmb3IgdGhlIFJvdXRlclxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHVibGljIE15VmFsdWU6IHN0cmluZyA9IFwibm9WYWx1ZVwiO1xyXG4gICAgbXlOYXZpZ2F0aW9uKGFjY2Vzc1Rva2VuOnN0cmluZyl7XHJcbiAgICAgICAgLy9yb3V0ZXIgbmF2aWdhdGVzIHRvIHRoZSBzZWN1cmUgc2VydmVyIGFuZCBwYXNzZXMgaW5cclxuICAgICAgICAvL3RoZSBhY2Nlc3MgdG9rZW4gaW4gdGhlIHF1ZXJ5IHBlcmFtZXRlclxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0sIHsgcXVlcnlQYXJhbXM6IHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuIH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChcIm15V2ViVmlld1wiKSB3ZWJWaWV3UmVmOiBFbGVtZW50UmVmOyAgICBcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBsZXQgd2VidmlldzogV2ViVmlldyA9IHRoaXMud2ViVmlld1JlZi5uYXRpdmVFbGVtZW50OyAgICAgICAgICAgICAgICBcclxuICAgICAgICBsZXQgbXlWYWx1ZTogc3RyaW5nID0gXCJteVZhbHVlXCI7IFxyXG5cclxuICAgICAgICAvL2dldEFjY2Vzc1Rva2VuIG1ldGhvZCByZXR1cm5zIG9ubHkgdGhlIGFjY2VzcyB0b2tlbiBcclxuICAgICAgICAvL3RoaXMgaXMgZG9uZSBieSByZXZlcnNpbmcgdGhlIHVybCwgc3BsaXR0aW5nIGl0IGJ5XHJcbiAgICAgICAgLy90aGUgYWNlc3NfdG9rZW49IHN0cmluZyB0byBnZXQgcmlkIG9mIHRoZSBzdGFydCwgdGhlbiByZXZlcnNpbmcgaXQgYWdhaW5cclxuICAgICAgICAvL2FuZCBzcGxpdHRpbmcgd2l0aCB0aGUgJiBzaWduXHJcbiAgICAgICAgY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFjY2Vzc1Rva2VuOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc0FjY2Vzc1Rva2VuSW5VcmwodXJsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJnaXZlIG1lIGEgdXJsIHRoYXQgaGFzIGFuIGFjY2VzcyB0b2tlblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgYWNjZXNzVG9rZW5QYXJ0T25lOiBzdHJpbmdbXSA9IHVybC5zcGxpdCgnYWNjZXNzX3Rva2VuPScpO1xyXG4gICAgICAgICAgICBsZXQgYWNjZXNzVG9rZW5QYXJ0T25lUmV2ZXJzZTogc3RyaW5nW10gPSBhY2Nlc3NUb2tlblBhcnRPbmUucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuUGFydE9uZVJldmVyc2Uuam9pbignJykuc3BsaXQoJyYnLCAxKVswXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY2Vzc1Rva2VuKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICBjb25zdCBpc0FjY2Vzc1Rva2VuSW5VcmwgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgLy90ZXN0IGZvciBhY2Nlc3MgdG9rZW5cclxuICAgICAgICAgICAgcmV0dXJuICh1cmwuaW5kZXhPZihcImFjY2Vzc190b2tlblwiKSA+LTEpOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuYXZpZ2F0ZVRvU2VjdXJlQ29tcG9uZW50ID0gKGFjY2Vzc1Rva2VuOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgLy90ZXN0IGZvciBhY2Nlc3MgdG9rZW5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubXlOYXZpZ2F0aW9uKGFjY2Vzc1Rva2VuKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdGhpcyBnZXRzIGNhbGxlZCB3aGVuIHRoZSB3ZWJ2aWV3IGlzIGxvYWRlZFxyXG4gICAgICAgIHdlYnZpZXcub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IExvYWRFdmVudERhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGF1dGhlbnRpY2F0aW9uVXJsID0gYXJncy51cmw7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIC8vdGVzdCBmb3IgZXhpc3RhbmNlIG9mIHRoZSBhY2Nlc3MgdG9rZW4gaW4gdGhlIHVybFxyXG4gICAgICAgICAgICAgICAgdmFyIGlzSW5Vcmw6Ym9vbGVhbiA9IGlzQWNjZXNzVG9rZW5JblVybChhdXRoZW50aWNhdGlvblVybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXNJblVybCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy93aGVuIGFuIGFjY2VzcyB0b2tlbiBpcyBpbiB0aGUgdXJsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gZ2V0QWNjZXNzVG9rZW4oYXV0aGVudGljYXRpb25VcmwpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9uYXZpZ2F0ZSByb3V0ZXIgdG8gc2VjdXJlIGNvbXBvbmVudCB3aXRoIG91ciBhY2Nlc3MgdG9rZW5cclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRvU2VjdXJlQ29tcG9uZW50KGFjY2Vzc1Rva2VuKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goZXhjZXB0aW9uKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2Fubm90IGdldCBhdXRoZW50aWNhdGlvblVSTFwiKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgfSk7ICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIC8vQ2FsbGVkIGF0IHJ1bnRpbWVcclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHsgICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICB9ICAgIFxyXG59Il19