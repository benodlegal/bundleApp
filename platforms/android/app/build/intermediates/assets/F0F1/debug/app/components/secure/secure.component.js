"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var SecureComponent = (function () {
    function SecureComponent(_router, _activatedRoute, cdRef) {
        var _this = this;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.cdRef = cdRef;
        this._activatedRoute.queryParams.subscribe(function (params) {
            _this.accessToken = params["accessToken"];
            console.log('accessToken2');
            console.log(_this.accessToken);
            localStorage.setItem("saved", JSON.stringify(_this.accessToken));
            //localStorage.getItem(this.accessToken);
        });
    }
    SecureComponent.prototype.ngAfterViewInit = function () {
        console.log('accessToken33');
        //this.htmlString = '<span><h1>HtmlView demo in <font color="blue">NativeScript</font> App</h1></span>';   
    };
    SecureComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit called in secure');
    };
    SecureComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy called in secure');
    };
    SecureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-secure",
            templateUrl: "secure.component.html"
        }),
        __metadata("design:paramtypes", [router_2.Router, router_1.ActivatedRoute, core_1.ChangeDetectorRef])
    ], SecureComponent);
    return SecureComponent;
}());
exports.SecureComponent = SecureComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUg7QUFJckgsMENBQStDO0FBSS9DLDBDQUF5RDtBQVN6RDtJQUtJLHlCQUEyQixPQUFjLEVBQVUsZUFBK0IsRUFBVSxLQUF1QjtRQUFuSCxpQkFTQztRQVQwQixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDL0csSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNqRCxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlCLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEUseUNBQXlDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLDJHQUEyRztJQUMvRyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QscUNBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBMUJRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBT3FDLGVBQU0sRUFBMkIsdUJBQWMsRUFBZ0Isd0JBQWlCO09BTDFHLGVBQWUsQ0FnQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3l9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgdGV4dFZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0ICogYXMgaHRtbFZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaHRtbC12aWV3XCI7XHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEh0bWxWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaHRtbC12aWV3XCI7XHJcbmltcG9ydCAqIGFzIGxvY2FsIGZyb20gJ25hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJucy1zZWN1cmVcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInNlY3VyZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbiAgIFxyXG5leHBvcnQgY2xhc3MgU2VjdXJlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3l7XHJcbiAgICBwdWJsaWMgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICAgIHB1YmxpYyBvbmNlTG9nZ2VkSW5TcmM6IHN0cmluZzsgLy9UT0RPXHJcbiAgICBwdWJsaWMgaHRtbFN0cmluZzogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6Um91dGVyLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgY2RSZWY6Q2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gcGFyYW1zW1wiYWNjZXNzVG9rZW5cIl07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FjY2Vzc1Rva2VuMicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2F2ZWRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5hY2Nlc3NUb2tlbikpO1xyXG4gICAgICAgIC8vbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5hY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7ICBcclxuICAgICAgICBjb25zb2xlLmxvZygnYWNjZXNzVG9rZW4zMycpO1xyXG4gICAgICAgIC8vdGhpcy5odG1sU3RyaW5nID0gJzxzcGFuPjxoMT5IdG1sVmlldyBkZW1vIGluIDxmb250IGNvbG9yPVwiYmx1ZVwiPk5hdGl2ZVNjcmlwdDwvZm9udD4gQXBwPC9oMT48L3NwYW4+JzsgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZ09uSW5pdCBjYWxsZWQgaW4gc2VjdXJlJyk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZ09uRGVzdHJveSBjYWxsZWQgaW4gc2VjdXJlJyk7XHJcbiAgICB9XHJcbiAgICAvLyBwdWJsaWMgbG9nb3V0KCkge1xyXG4gICAgLy8gQXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoXCJhdXRoZW50aWNhdGVkXCIpO1xyXG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIC8vIH1cclxuXHJcbn0iXX0=