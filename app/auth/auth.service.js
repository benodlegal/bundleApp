"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/app/auth/auth.service.ts
var core_1 = require("@angular/core");
var AuthService = (function () {
    function AuthService() {
        this.cachedRequests = [];
    }
    AuthService.prototype.collectFailedRequest = function (request) {
        this.cachedRequests.push(request);
    };
    AuthService.prototype.retryFailedRequests = function () {
        // retry the requests. this method can
        // be called after the token is refreshed
    };
    AuthService.prototype.getToken = function () {
        console.log('your access token is now in local storage ' + localStorage.getItem('accessToken'));
        return localStorage.getItem('accessToken');
    };
    AuthService.prototype.isAuthenticated = function () {
        //  get the token
        var accessToken = this.getToken();
        accessToken;
        return true;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLHNDQUEyQztBQUszQztJQURBO1FBRUUsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO0lBb0IvQyxDQUFDO0lBbkJNLDBDQUFvQixHQUEzQixVQUE0QixPQUFPO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDTSx5Q0FBbUIsR0FBMUI7UUFDRSxzQ0FBc0M7UUFDdEMseUNBQXlDO0lBQzNDLENBQUM7SUFDTyw4QkFBUSxHQUFmO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLHFDQUFlLEdBQXRCO1FBQ0MsaUJBQWlCO1FBQ2hCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxXQUFXLENBQUM7UUFFWixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQXBCVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBcUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2F1dGgvYXV0aC5zZXJ2aWNlLnRzXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBjYWNoZWRSZXF1ZXN0czogQXJyYXk8SHR0cFJlcXVlc3Q8YW55Pj4gPSBbXTtcclxucHVibGljIGNvbGxlY3RGYWlsZWRSZXF1ZXN0KHJlcXVlc3QpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FjaGVkUmVxdWVzdHMucHVzaChyZXF1ZXN0KTtcclxufVxyXG5wdWJsaWMgcmV0cnlGYWlsZWRSZXF1ZXN0cygpOiB2b2lkIHtcclxuICAvLyByZXRyeSB0aGUgcmVxdWVzdHMuIHRoaXMgbWV0aG9kIGNhblxyXG4gIC8vIGJlIGNhbGxlZCBhZnRlciB0aGUgdG9rZW4gaXMgcmVmcmVzaGVkXHJcbn1cclxuIHB1YmxpYyBnZXRUb2tlbigpOiBzdHJpbmcge1xyXG4gIGNvbnNvbGUubG9nKCd5b3VyIGFjY2VzcyB0b2tlbiBpcyBub3cgaW4gbG9jYWwgc3RvcmFnZSAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykpO1xyXG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKTtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgLy8gIGdldCB0aGUgdG9rZW5cclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgYWNjZXNzVG9rZW47XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59Il19