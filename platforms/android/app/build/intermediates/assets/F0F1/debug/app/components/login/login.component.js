"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var ApplicationSettings = require("application-settings");
var webViewModule = require("tns-core-modules/ui/web-view");
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.input = {
            "email": "",
            "password": ""
        };
    }
    LoginComponent.prototype.webViewLoaded = function (args) {
        var webview = args.object;
        webview.android.getSettings().setDisplayZoomControls(false);
        console.dir("hello1212");
    };
    LoginComponent.prototype.gButton = function () {
        console.log("hi");
    };
    LoginComponent.prototype.mButton = function () {
        console.log("hello");
    };
    LoginComponent.prototype.bButton = function () {
        console.log("hey");
    };
    LoginComponent.prototype.ngOnInit = function () {
        console.dir("121212121");
        var webView = new webViewModule.WebView();
        if (ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/secure"], { clearHistory: true });
        }
    };
    LoginComponent.prototype.login = function () {
        if (this.input.email && this.input.password) {
            var account = JSON.parse(ApplicationSettings.getString("account", "{}"));
            if (this.input.email == account.email && this.input.password == account.password) {
                ApplicationSettings.setBoolean("authenticated", true);
                this.router.navigate(["/secure"], { clearHistory: true });
            }
            else {
                (new nativescript_snackbar_1.SnackBar()).simple("Incorrect Credentials!");
            }
        }
        else {
            (new nativescript_snackbar_1.SnackBar()).simple("All Fields Required!");
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-login",
            templateUrl: "login.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCwrREFBaUQ7QUFDakQsMERBQTREO0FBQzVELDREQUFnRTtBQVdoRTtJQVNJLHdCQUEyQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtTQUNqQixDQUFBO0lBQ0wsQ0FBQztJQVpELHNDQUFhLEdBQWIsVUFBYyxJQUFJO1FBRWQsSUFBSSxPQUFPLEdBQWdELElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFTTSxnQ0FBTyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sZ0NBQU8sR0FBZDtRQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLGdDQUFPLEdBQWQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFHTSxpQ0FBUSxHQUFmO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QixJQUFJLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN2QyxFQUFFLENBQUEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFOUQsQ0FBQztJQUVMLENBQUM7SUFDTSw4QkFBSyxHQUFaO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQzlFLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxJQUFJLGdDQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3RELENBQUM7UUFDTCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixDQUFDLElBQUksZ0NBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFuRFEsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7U0FDdEMsQ0FBQzt5Q0FZcUMseUJBQWdCO09BVDFDLGNBQWMsQ0FzRDFCO0lBQUQscUJBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XHJcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCAgKiAgYXMgd2ViVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBnZXRWaWV3QnlJZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLWxvZ2luXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJsb2dpbi5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgaW5wdXQ6IGFueTtcclxuICAgIHdlYlZpZXdMb2FkZWQoYXJncyl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHdlYnZpZXc6d2ViVmlld01vZHVsZS5XZWJWaWV3ID0gPHdlYlZpZXdNb2R1bGUuV2ViVmlldz5hcmdzLm9iamVjdDtcclxuICAgICAgICB3ZWJ2aWV3LmFuZHJvaWQuZ2V0U2V0dGluZ3MoKS5zZXREaXNwbGF5Wm9vbUNvbnRyb2xzKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmRpcihcImhlbGxvMTIxMlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0ge1xyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdCdXR0b24oKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgbUJ1dHRvbigpe1xyXG4gICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBiQnV0dG9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXlcIik7ICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmRpcihcIjEyMTIxMjEyMVwiKTtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCB3ZWJWaWV3ID0gbmV3IHdlYlZpZXdNb2R1bGUuV2ViVmlldygpXHJcbiAgICAgICAgICBpZihBcHBsaWNhdGlvblNldHRpbmdzLmdldEJvb2xlYW4oXCJhdXRoZW50aWNhdGVkXCIsIGZhbHNlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2VjdXJlXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHVibGljIGxvZ2luKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaW5wdXQuZW1haWwgJiYgdGhpcy5pbnB1dC5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICBsZXQgYWNjb3VudCA9IEpTT04ucGFyc2UoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRTdHJpbmcoXCJhY2NvdW50XCIsIFwie31cIikpO1xyXG4gICAgICAgICAgICBpZih0aGlzLmlucHV0LmVtYWlsID09IGFjY291bnQuZW1haWwgJiYgdGhpcy5pbnB1dC5wYXNzd29yZCA9PSBhY2NvdW50LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldEJvb2xlYW4oXCJhdXRoZW50aWNhdGVkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlY3VyZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAobmV3IFNuYWNrQmFyKCkpLnNpbXBsZShcIkluY29ycmVjdCBDcmVkZW50aWFscyFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAobmV3IFNuYWNrQmFyKCkpLnNpbXBsZShcIkFsbCBGaWVsZHMgUmVxdWlyZWQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxufSJdfQ==