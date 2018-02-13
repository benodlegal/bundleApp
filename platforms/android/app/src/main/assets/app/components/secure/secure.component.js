"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ApplicationSettings = require("application-settings");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var http_1 = require("@angular/common/http");
var SecureComponent = (function () {
    function SecureComponent(_router, _activatedRoute, cdRef, _http) {
        var _this = this;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.cdRef = cdRef;
        this._http = _http;
        this._activatedRoute.queryParams.subscribe(function (params) {
            _this.accessToken = params["accessToken"];
            _this.htmlAccessToken = 'your access Token is ' + _this.accessToken;
            _this.htmlUsersToken = 'your email is' + _this._http.get('https://app.bundledocs.com/api/v1/users/me')
                .subscribe(function (data) { return (data.data[0].Email); }, function (err) { return ((err)); });
        });
    }
    SecureComponent.prototype.ngAfterViewInit = function () {
        console.log('accessToken3');
    };
    SecureComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit called in secure');
    };
    SecureComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy called in secure');
    };
    SecureComponent.prototype.logout = function () {
        ApplicationSettings.remove("authenticated");
        this._router.navigate(["/login"]);
        localStorage.setItem('accessToken', null);
    };
    SecureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-secure",
            templateUrl: "secure.component.html"
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_2.Router, router_1.ActivatedRoute, core_1.ChangeDetectorRef, http_1.HttpClient])
    ], SecureComponent);
    return SecureComponent;
}());
exports.SecureComponent = SecureComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0k7QUFFaEksMERBQTREO0FBRTVELDBDQUErQztBQUkvQywwQ0FBeUQ7QUFFekQsNkNBQWtEO0FBVWxEO0lBTUkseUJBQTJCLE9BQWMsRUFBVSxlQUErQixFQUFVLEtBQXVCLEVBQVMsS0FBaUI7UUFBN0ksaUJBU0M7UUFUMEIsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUN6SSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2pELEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxlQUFlLEdBQUcsdUJBQXVCLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztZQUNsRSxLQUFJLENBQUMsY0FBYyxHQUFHLGVBQWUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBa0IsNENBQTRDLENBQUM7aUJBQ3BILFNBQVMsQ0FDVixVQUFBLElBQUksSUFBRyxPQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsRUFDM0IsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBUCxDQUFPLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUNJLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQWpDTyxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO1FBQ0UsaUJBQVUsRUFBRTt5Q0FRdUIsZUFBTSxFQUEyQix1QkFBYyxFQUFnQix3QkFBaUIsRUFBZ0IsaUJBQVU7T0FOcEksZUFBZSxDQW1DM0I7SUFBRCxzQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtXZWJWaWV3LCBMb2FkRXZlbnREYXRhfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyB0ZXh0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBodG1sVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9odG1sLXZpZXdcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtIdG1sVmlld30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaHRtbC12aWV3XCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJ1bmRsZWRvY3NVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0J1bmRsZWRvY3NBcGkvQnVuZGxlZG9jc1VzZXJTZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLXNlY3VyZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwic2VjdXJlLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuICAgQEluamVjdGFibGUoKVxyXG4gICBcclxuZXhwb3J0IGNsYXNzIFNlY3VyZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95e1xyXG4gICAgcHVibGljIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgb25jZUxvZ2dlZEluU3JjOiBzdHJpbmc7IC8vVE9ET1xyXG4gICAgcHVibGljIGh0bWxBY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGh0bWxVc2Vyc1Rva2VuOnN0cmluZztcclxuICAgIHB1YmxpYyBhcHBVc2VyOkFwcFVzZXI7ICAgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGNkUmVmOkNoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgX2h0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gcGFyYW1zW1wiYWNjZXNzVG9rZW5cIl07ICAgICAgICAgICBcclxuICAgICAgICB0aGlzLmh0bWxBY2Nlc3NUb2tlbiA9ICd5b3VyIGFjY2VzcyBUb2tlbiBpcyAnICsgdGhpcy5hY2Nlc3NUb2tlbjtcclxuICAgICAgICB0aGlzLmh0bWxVc2Vyc1Rva2VuID0gJ3lvdXIgZW1haWwgaXMnICsgdGhpcy5faHR0cC5nZXQ8QXBwUmVzcG9uc2VVc2VyPignaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXBpL3YxL3VzZXJzL21lJylcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIGRhdGEgPT4oZGF0YS5kYXRhWzBdLkVtYWlsKSxcclxuICAgICAgICBlcnIgPT4gKChlcnIpKSk7XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FjY2Vzc1Rva2VuMycpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25nT25Jbml0IGNhbGxlZCBpbiBzZWN1cmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZ09uRGVzdHJveSBjYWxsZWQgaW4gc2VjdXJlJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoXCJhdXRoZW50aWNhdGVkXCIpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NUb2tlbicsIG51bGwpO1xyXG4gICAgIH1cclxuXHJcbn0iXX0=