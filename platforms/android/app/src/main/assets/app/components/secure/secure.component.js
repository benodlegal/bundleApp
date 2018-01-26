"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ApplicationSettings = require("application-settings");
var SecureComponent = (function () {
    function SecureComponent(router) {
        this.router = router;
    }
    SecureComponent.prototype.ngOnInit = function () {
        if (!ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/login"], { clearHistory: true });
        }
    };
    SecureComponent.prototype.newBundle = function () {
        console.log("hello");
        this.router.navigate(["/login"], { clearHistory: true });
    };
    SecureComponent.prototype.logout = function () {
        ApplicationSettings.remove("authenticated");
        this.router.navigate(["/login"], { clearHistory: true });
    };
    SecureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-secure",
            templateUrl: "secure.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], SecureComponent);
    return SecureComponent;
}());
exports.SecureComponent = SecureComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELDBEQUE0RDtBQU81RDtJQUVJLHlCQUEyQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFJLENBQUM7SUFFakQsa0NBQVEsR0FBZjtRQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdELENBQUM7SUFDTCxDQUFDO0lBRU0sbUNBQVMsR0FBaEI7UUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUNJLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQWxCUSxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUdxQyx5QkFBZ0I7T0FGMUMsZUFBZSxDQW9CM0I7SUFBRCxzQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtc2VjdXJlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJzZWN1cmUuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlY3VyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYoIUFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0Qm9vbGVhbihcImF1dGhlbnRpY2F0ZWRcIiwgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgbmV3QnVuZGxlKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb3V0KCkge1xyXG4gICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKFwiYXV0aGVudGljYXRlZFwiKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==