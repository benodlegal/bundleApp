"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//All of the imports necessary for the login class
var core_1 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var router_1 = require("@angular/router");
var accessToken;
//defining login component
var LoginComponent = (function () {
    //Constructor for the Router
    function LoginComponent(router) {
        this.router = router;
        //Web view URL
        this.myWebViewSrc = "https://app.bundledocs.com/auth/oauth2/authorize?response_type=token&client_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJTaWduYXR1cmUiOiIwYzE0ZmY0ZmU0ZGU0YTc5ODAxOTQ4OTMxMzIzYzIyYiIsIlBhcnRpdGlvbktleSI6IjEyNTE5OTcyMTQyMDYxNzk1MjgwXzUxNDU1M2Q0LWIxMzItNGU3OC1iZWExLWQyMjkwNjNjODNjNSIsIlJvd0tleSI6IjEyNTE4ODY1NTI1Mjc5NDc0OTM0Xzk1NzMzMmIwLWY2MjctNDRjYy1iMDk3LTM2NDhmNWRiNmYwYyJ9.qYi227w3Bbxpat7tppYdnF8rHbMX2c7ILMeidb9kdIo&redirect_uri=https://app.bundledocs.com/auth/oauth2/approval&state=user-id-from-my-application";
        this.MyValue = "noValue";
    }
    LoginComponent.prototype.myActualFunction = function () {
        //router navigates to the secure server and passes in 
        //the access token in the query perameter
        this.router.navigate(["/secure"], { queryParams: { accessToken: "myAccessToken" } });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var webview = this.webViewRef.nativeElement;
        var myValue = "myValue";
        var myFunc = function (theirValue) {
            myValue = theirValue;
            _this.MyValue = myValue;
            _this.myActualFunction();
        };
        //getAccessToken method returns only the access token 
        //this is done by reversing the url, splitting it by
        //the acess_token= string to get rid of the start, then reversing it again
        //and splitting with the & sign
        var getAccessToken = function (url) {
            try {
                accessToken = url.split('access_token=').reverse().join('').split('&', 1);
                console.log(accessToken);
                console.log("------------------------------------" +
                    "-----------------------------------");
                console.log("Below is the entire URL:");
                console.log(url);
            }
            catch (exception) {
                console.log('This is not an access token');
            }
            return accessToken;
        };
        //this gets called when the webview is loaded
        webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
            var authenticationUrl = args.url;
            console.log("Below is the Access Token:");
            try {
                getAccessToken(authenticationUrl);
            }
            catch (exception) {
                console.log("cannot get authenticationURL");
            }
        });
    };
    //Called at runtime
    LoginComponent.prototype.ngOnInit = function () {
        // setInterval(()=>{
        //     console.log(this.MyValue);
        // }, 5000);        
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQWtEO0FBQ2xELHNDQUF3RjtBQUN4Rix3Q0FBcUQ7QUFPckQsMENBQXlEO0FBQ3pELElBQUksV0FBVyxDQUFDO0FBQ2hCLDBCQUEwQjtBQU8xQjtJQUdJLDRCQUE0QjtJQUM1Qix3QkFBMkIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIekMsY0FBYztRQUNQLGlCQUFZLEdBQVcsaWdCQUFpZ0IsQ0FBQztRQUt6aEIsWUFBTyxHQUFXLFNBQVMsQ0FBQztJQURuQyxDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0ksc0RBQXNEO1FBQ3RELHlDQUF5QztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBR0Qsd0NBQWUsR0FBZjtRQUFBLGlCQXVDQztRQXRDRyxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNyRCxJQUFJLE9BQU8sR0FBVyxTQUFTLENBQUM7UUFDaEMsSUFBTSxNQUFNLEdBQUcsVUFBQyxVQUFpQjtZQUM3QixPQUFPLEdBQUcsVUFBVSxDQUFBO1lBQ3BCLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztRQUNGLHNEQUFzRDtRQUN0RCxvREFBb0Q7UUFDcEQsMEVBQTBFO1FBQzFFLCtCQUErQjtRQUMvQixJQUFNLGNBQWMsR0FBRyxVQUFDLEdBQVU7WUFFL0IsSUFBRyxDQUFDO2dCQUNILFdBQVcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQztvQkFDbEQscUNBQXFDLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFDRCxLQUFLLENBQUEsQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDNUMsQ0FBQztZQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDckIsQ0FBQyxDQUFBO1FBQ0YsNkNBQTZDO1FBQzdDLE9BQU8sQ0FBQyxFQUFFLENBQUMsa0JBQU8sQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLElBQW1CO1lBQy9ELElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDMUMsSUFBRyxDQUFDO2dCQUNKLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBRWxDLENBQUM7WUFDRCxLQUFLLENBQUEsQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUNoRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsbUJBQW1CO0lBQ1osaUNBQVEsR0FBZjtRQUNJLG9CQUFvQjtRQUNwQixpQ0FBaUM7UUFDakMsb0JBQW9CO0lBQ3hCLENBQUM7SUE5Q3VCO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFhLGlCQUFVO3NEQUFDO0lBZHRDLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3RDLENBQUM7UUFDRixrRUFBa0U7O3lDQUszQixlQUFNO09BSmhDLGNBQWMsQ0E2RDFCO0lBQUQscUJBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vQWxsIG9mIHRoZSBpbXBvcnRzIG5lY2Vzc2FyeSBmb3IgdGhlIGxvZ2luIGNsYXNzXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNuYWNrQmFyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgKiAgYXMgd2ViVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBnZXRWaWV3QnlJZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5sZXQgYWNjZXNzVG9rZW47XHJcbi8vZGVmaW5pbmcgbG9naW4gY29tcG9uZW50XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLWxvZ2luXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJsb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG4vL0xvZ2luIGNvbXBvbmVudCBjbGFzcyB0aGF0IGltcGxlbWVudHMgdGhlICdBZnRlclZpZXdJbml0JyBpbXBvcnRcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdHtcclxuICAgIC8vV2ViIHZpZXcgVVJMXHJcbiAgICBwdWJsaWMgbXlXZWJWaWV3U3JjOiBzdHJpbmcgPSBcImh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2F1dGgvb2F1dGgyL2F1dGhvcml6ZT9yZXNwb25zZV90eXBlPXRva2VuJmNsaWVudF9pZD1leUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKVGFXZHVZWFIxY21VaU9pSXdZekUwWm1ZMFptVTBaR1UwWVRjNU9EQXhPVFE0T1RNeE16SXpZekl5WWlJc0lsQmhjblJwZEdsdmJrdGxlU0k2SWpFeU5URTVPVGN5TVRReU1EWXhOemsxTWpnd1h6VXhORFUxTTJRMExXSXhNekl0TkdVM09DMWlaV0V4TFdReU1qa3dOak5qT0ROak5TSXNJbEp2ZDB0bGVTSTZJakV5TlRFNE9EWTFOVEkxTWpjNU5EYzBPVE0wWHprMU56TXpNbUl3TFdZMk1qY3RORFJqWXkxaU1EazNMVE0yTkRobU5XUmlObVl3WXlKOS5xWWkyMjd3M0JieHBhdDd0cHBZZG5GOHJIYk1YMmM3SUxNZWlkYjlrZElvJnJlZGlyZWN0X3VyaT1odHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hdXRoL29hdXRoMi9hcHByb3ZhbCZzdGF0ZT11c2VyLWlkLWZyb20tbXktYXBwbGljYXRpb25cIjtcclxuICAgIC8vQ29uc3RydWN0b3IgZm9yIHRoZSBSb3V0ZXJcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIHB1YmxpYyBNeVZhbHVlOiBzdHJpbmcgPSBcIm5vVmFsdWVcIjtcclxuICAgIG15QWN0dWFsRnVuY3Rpb24oKXtcclxuICAgICAgICAvL3JvdXRlciBuYXZpZ2F0ZXMgdG8gdGhlIHNlY3VyZSBzZXJ2ZXIgYW5kIHBhc3NlcyBpbiBcclxuICAgICAgICAvL3RoZSBhY2Nlc3MgdG9rZW4gaW4gdGhlIHF1ZXJ5IHBlcmFtZXRlclxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0sIHsgcXVlcnlQYXJhbXM6IHsgYWNjZXNzVG9rZW46IFwibXlBY2Nlc3NUb2tlblwiIH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChcIm15V2ViVmlld1wiKSB3ZWJWaWV3UmVmOiBFbGVtZW50UmVmOyAgICBcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBsZXQgd2VidmlldzogV2ViVmlldyA9IHRoaXMud2ViVmlld1JlZi5uYXRpdmVFbGVtZW50OyAgICAgICAgICAgICAgICBcclxuICAgICAgICBsZXQgbXlWYWx1ZTogc3RyaW5nID0gXCJteVZhbHVlXCI7XHJcbiAgICAgICAgY29uc3QgbXlGdW5jID0gKHRoZWlyVmFsdWU6c3RyaW5nKT0+e1xyXG4gICAgICAgICAgICBteVZhbHVlID0gdGhlaXJWYWx1ZVxyXG4gICAgICAgICAgICB0aGlzLk15VmFsdWUgPSBteVZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm15QWN0dWFsRnVuY3Rpb24oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vZ2V0QWNjZXNzVG9rZW4gbWV0aG9kIHJldHVybnMgb25seSB0aGUgYWNjZXNzIHRva2VuIFxyXG4gICAgICAgIC8vdGhpcyBpcyBkb25lIGJ5IHJldmVyc2luZyB0aGUgdXJsLCBzcGxpdHRpbmcgaXQgYnlcclxuICAgICAgICAvL3RoZSBhY2Vzc190b2tlbj0gc3RyaW5nIHRvIGdldCByaWQgb2YgdGhlIHN0YXJ0LCB0aGVuIHJldmVyc2luZyBpdCBhZ2FpblxyXG4gICAgICAgIC8vYW5kIHNwbGl0dGluZyB3aXRoIHRoZSAmIHNpZ25cclxuICAgICAgICBjb25zdCBnZXRBY2Nlc3NUb2tlbiA9ICh1cmw6c3RyaW5nKT0+e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbiA9IHVybC5zcGxpdCgnYWNjZXNzX3Rva2VuPScpLnJldmVyc2UoKS5qb2luKCcnKS5zcGxpdCgnJicsMSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjY2Vzc1Rva2VuKTsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIrXHJcbiAgICAgICAgICAgIFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmVsb3cgaXMgdGhlIGVudGlyZSBVUkw6XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpOyBcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgY2F0Y2goZXhjZXB0aW9uKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgbm90IGFuIGFjY2VzcyB0b2tlbicpO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW47XHJcbiAgICAgICAgIH1cclxuICAgICAgICAvL3RoaXMgZ2V0cyBjYWxsZWQgd2hlbiB0aGUgd2VidmlldyBpcyBsb2FkZWRcclxuICAgICAgICB3ZWJ2aWV3Lm9uKFdlYlZpZXcubG9hZEZpbmlzaGVkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBMb2FkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBhdXRoZW50aWNhdGlvblVybCA9IGFyZ3MudXJsOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJlbG93IGlzIHRoZSBBY2Nlc3MgVG9rZW46XCIpOyAgXHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZ2V0QWNjZXNzVG9rZW4oYXV0aGVudGljYXRpb25VcmwpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaChleGNlcHRpb24pe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW5ub3QgZ2V0IGF1dGhlbnRpY2F0aW9uVVJMXCIpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9KTsgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy9DYWxsZWQgYXQgcnVudGltZVxyXG4gICAgcHVibGljIG5nT25Jbml0KCkgeyAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuTXlWYWx1ZSk7XHJcbiAgICAgICAgLy8gfSwgNTAwMCk7ICAgICAgICBcclxuICAgIH0gICAgXHJcbn0iXX0=