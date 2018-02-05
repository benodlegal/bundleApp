"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
var router_1 = require("@angular/router");
var SecureComponent = (function () {
    function SecureComponent(route) {
        var _this = this;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            _this.accessToken = params["accessToken"];
        });
    }
    SecureComponent.prototype.ngOnInit = function () {
        console.log(this.accessToken);
        console.log('accessToken');
        if (!ApplicationSettings.getBoolean("authenticated", false)) {
            //this.route.navigate(["/login"]);
        }
    };
    SecureComponent.prototype.newBundle = function () {
        console.log("hello");
        //this.router.navigate(["/login"], { clearHistory: true });
    };
    SecureComponent.prototype.logout = function () {
        ApplicationSettings.remove("authenticated");
        // this.router.navigate(["/login"], { clearHistory: true });
    };
    SecureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-secure",
            templateUrl: "secure.component.html",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], SecureComponent);
    return SecureComponent;
}());
exports.SecureComponent = SecureComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsMERBQTREO0FBQzVELDBDQUErQztBQVMvQztJQUlJLHlCQUEyQixLQUFxQjtRQUFoRCxpQkFLQztRQUwwQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3ZDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXpDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtDQUFRLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLEVBQUUsQ0FBQSxDQUFDLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsa0NBQWtDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0lBQ00sbUNBQVMsR0FBaEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLDJEQUEyRDtJQUMzRCxDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUNJLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3Qyw0REFBNEQ7SUFDL0QsQ0FBQztJQTFCUSxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUtvQyx1QkFBYztPQUp2QyxlQUFlLENBNEIzQjtJQUFELHNCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyB0ZXh0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJucy1zZWN1cmVcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInNlY3VyZS5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VjdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gICAgcHVibGljIG9uY2VMb2dnZWRJblNyYzogc3RyaW5nOyAvL1RPRE9cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gcGFyYW1zW1wiYWNjZXNzVG9rZW5cIl07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFjY2Vzc1Rva2VuKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWNjZXNzVG9rZW4nKTtcclxuICAgICAgICBpZighQXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCBmYWxzZSkpIHtcclxuICAgICAgICAgICAgLy90aGlzLnJvdXRlLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIG5ld0J1bmRsZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XHJcbiAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ291dCgpIHtcclxuICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnJlbW92ZShcImF1dGhlbnRpY2F0ZWRcIik7XHJcbiAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==