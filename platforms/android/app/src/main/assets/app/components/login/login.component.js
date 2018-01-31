"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.myWebViewSrc = "https://app.bundledocs.com/auth/oauth2/authorize?response_type=token&client_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJTaWduYXR1cmUiOiIwYzE0ZmY0ZmU0ZGU0YTc5ODAxOTQ4OTMxMzIzYzIyYiIsIlBhcnRpdGlvbktleSI6IjEyNTE5OTcyMTQyMDYxNzk1MjgwXzUxNDU1M2Q0LWIxMzItNGU3OC1iZWExLWQyMjkwNjNjODNjNSIsIlJvd0tleSI6IjEyNTE4ODY1NTI1Mjc5NDc0OTM0Xzk1NzMzMmIwLWY2MjctNDRjYy1iMDk3LTM2NDhmNWRiNmYwYyJ9.qYi227w3Bbxpat7tppYdnF8rHbMX2c7ILMeidb9kdIo&redirect_uri=https://app.bundledocs.com/auth/oauth2/approval&state=user-id-from-my-application";
        this.MyValue = "noValue";
    }
    LoginComponent.prototype.myActualFunction = function () {
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
        webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
            var authenticationUrl = args.url;
            console.log("authenticationUrl:");
            console.log(authenticationUrl);
            myFunc(authenticationUrl);
        });
    };
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
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdGO0FBQ3hGLHdDQUFxRDtBQU9yRCwwQ0FBeUQ7QUFRekQ7SUFJSSx3QkFBMkIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGbEMsaUJBQVksR0FBVyxpZ0JBQWlnQixDQUFDO1FBTXpoQixZQUFPLEdBQVcsU0FBUyxDQUFDO0lBRm5DLENBQUM7SUFHRCx5Q0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBR0Qsd0NBQWUsR0FBZjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNyRCxJQUFJLE9BQU8sR0FBVyxTQUFTLENBQUM7UUFDaEMsSUFBTSxNQUFNLEdBQUcsVUFBQyxVQUFpQjtZQUM3QixPQUFPLEdBQUcsVUFBVSxDQUFBO1lBQ3BCLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztRQUVGLE9BQU8sQ0FBQyxFQUFFLENBQUMsa0JBQU8sQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLElBQW1CO1lBQy9ELElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUVqQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBRS9CLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdNLGlDQUFRLEdBQWY7UUFDSSxvQkFBb0I7UUFDcEIsaUNBQWlDO1FBQ2pDLG9CQUFvQjtJQUN4QixDQUFDO0lBekJ1QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBYSxpQkFBVTtzREFBQztJQWJ0QyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO3lDQU1xQyxlQUFNO09BSmhDLGNBQWMsQ0F1QzFCO0lBQUQscUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNuYWNrQmFyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgKiAgYXMgd2ViVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBnZXRWaWV3QnlJZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtbG9naW5cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcImxvZ2luLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xyXG4gICAgXHJcbiAgICBwdWJsaWMgbXlXZWJWaWV3U3JjOiBzdHJpbmcgPSBcImh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2F1dGgvb2F1dGgyL2F1dGhvcml6ZT9yZXNwb25zZV90eXBlPXRva2VuJmNsaWVudF9pZD1leUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKVGFXZHVZWFIxY21VaU9pSXdZekUwWm1ZMFptVTBaR1UwWVRjNU9EQXhPVFE0T1RNeE16SXpZekl5WWlJc0lsQmhjblJwZEdsdmJrdGxlU0k2SWpFeU5URTVPVGN5TVRReU1EWXhOemsxTWpnd1h6VXhORFUxTTJRMExXSXhNekl0TkdVM09DMWlaV0V4TFdReU1qa3dOak5qT0ROak5TSXNJbEp2ZDB0bGVTSTZJakV5TlRFNE9EWTFOVEkxTWpjNU5EYzBPVE0wWHprMU56TXpNbUl3TFdZMk1qY3RORFJqWXkxaU1EazNMVE0yTkRobU5XUmlObVl3WXlKOS5xWWkyMjd3M0JieHBhdDd0cHBZZG5GOHJIYk1YMmM3SUxNZWlkYjlrZElvJnJlZGlyZWN0X3VyaT1odHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hdXRoL29hdXRoMi9hcHByb3ZhbCZzdGF0ZT11c2VyLWlkLWZyb20tbXktYXBwbGljYXRpb25cIjtcclxuICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgTXlWYWx1ZTogc3RyaW5nID0gXCJub1ZhbHVlXCI7XHJcbiAgICBteUFjdHVhbEZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlY3VyZVwiXSwgeyBxdWVyeVBhcmFtczogeyBhY2Nlc3NUb2tlbjogXCJteUFjY2Vzc1Rva2VuXCIgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKFwibXlXZWJWaWV3XCIpIHdlYlZpZXdSZWY6IEVsZW1lbnRSZWY7ICAgIFxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGxldCB3ZWJ2aWV3OiBXZWJWaWV3ID0gdGhpcy53ZWJWaWV3UmVmLm5hdGl2ZUVsZW1lbnQ7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBteVZhbHVlOiBzdHJpbmcgPSBcIm15VmFsdWVcIjtcclxuICAgICAgICBjb25zdCBteUZ1bmMgPSAodGhlaXJWYWx1ZTpzdHJpbmcpPT57XHJcbiAgICAgICAgICAgIG15VmFsdWUgPSB0aGVpclZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMuTXlWYWx1ZSA9IG15VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubXlBY3R1YWxGdW5jdGlvbigpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHdlYnZpZXcub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IExvYWRFdmVudERhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGF1dGhlbnRpY2F0aW9uVXJsID0gYXJncy51cmw7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dGhlbnRpY2F0aW9uVXJsOlwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXV0aGVudGljYXRpb25VcmwpOyAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgbXlGdW5jKGF1dGhlbnRpY2F0aW9uVXJsKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pOyAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHsgICAgICAgICAgICBcclxuICAgICAgICAvLyBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLk15VmFsdWUpO1xyXG4gICAgICAgIC8vIH0sIDUwMDApOyAgICAgICAgXHJcbiAgICB9ICAgIFxyXG59Il19