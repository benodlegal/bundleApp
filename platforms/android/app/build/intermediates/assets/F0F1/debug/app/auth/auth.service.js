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
        //let accessToken =localStorage.getItem('accessToken');
        return 'accessToken456';
    };
    AuthService.prototype.isAuthenticated = function () {
        //  get the token
        var accessToken = this.getToken();
        return null;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLHNDQUEyQztBQUkzQztJQURBO1FBRUUsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO0lBbUIvQyxDQUFDO0lBbEJNLDBDQUFvQixHQUEzQixVQUE0QixPQUFPO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDTSx5Q0FBbUIsR0FBMUI7UUFDRSxzQ0FBc0M7UUFDdEMseUNBQXlDO0lBQzNDLENBQUM7SUFDTyw4QkFBUSxHQUFmO1FBQ0csdURBQXVEO1FBQ3hELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDO0lBRU0scUNBQWUsR0FBdEI7UUFDQyxpQkFBaUI7UUFDaEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXBDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBbkJVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtPQUNBLFdBQVcsQ0FvQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXV0aC9hdXRoLnNlcnZpY2UudHNcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBjYWNoZWRSZXF1ZXN0czogQXJyYXk8SHR0cFJlcXVlc3Q8YW55Pj4gPSBbXTtcclxucHVibGljIGNvbGxlY3RGYWlsZWRSZXF1ZXN0KHJlcXVlc3QpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FjaGVkUmVxdWVzdHMucHVzaChyZXF1ZXN0KTtcclxufVxyXG5wdWJsaWMgcmV0cnlGYWlsZWRSZXF1ZXN0cygpOiB2b2lkIHtcclxuICAvLyByZXRyeSB0aGUgcmVxdWVzdHMuIHRoaXMgbWV0aG9kIGNhblxyXG4gIC8vIGJlIGNhbGxlZCBhZnRlciB0aGUgdG9rZW4gaXMgcmVmcmVzaGVkXHJcbn1cclxuIHB1YmxpYyBnZXRUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgLy9sZXQgYWNjZXNzVG9rZW4gPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpO1xyXG4gICByZXR1cm4gJ2FjY2Vzc1Rva2VuNDU2JztcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgLy8gIGdldCB0aGUgdG9rZW5cclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gdGhpcy5nZXRUb2tlbigpO1xyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufSJdfQ==