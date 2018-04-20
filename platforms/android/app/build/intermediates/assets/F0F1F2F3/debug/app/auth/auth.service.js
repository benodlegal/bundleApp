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
    //this class is used so that access token is in local storage
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('accessToken');
    };
    //checks if the access token is authenticated, returns true if so
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLHNDQUEyQztBQUszQztJQURBO1FBRUUsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO0lBc0IvQyxDQUFDO0lBckJRLDBDQUFvQixHQUEzQixVQUE0QixPQUFPO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSx5Q0FBbUIsR0FBMUI7UUFDRSxzQ0FBc0M7UUFDdEMseUNBQXlDO0lBQzNDLENBQUM7SUFFRCw2REFBNkQ7SUFDdEQsOEJBQVEsR0FBZjtRQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxpRUFBaUU7SUFDMUQscUNBQWUsR0FBdEI7UUFDRSxpQkFBaUI7UUFDakIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLFdBQVcsQ0FBQztRQUVaLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBdEJVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtPQUNBLFdBQVcsQ0F1QnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXV0aC9hdXRoLnNlcnZpY2UudHNcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNhY2hlZFJlcXVlc3RzOiBBcnJheTxIdHRwUmVxdWVzdDxhbnk+PiA9IFtdO1xuICBwdWJsaWMgY29sbGVjdEZhaWxlZFJlcXVlc3QocmVxdWVzdCk6IHZvaWQge1xuICAgIHRoaXMuY2FjaGVkUmVxdWVzdHMucHVzaChyZXF1ZXN0KTtcbiAgfVxuICBwdWJsaWMgcmV0cnlGYWlsZWRSZXF1ZXN0cygpOiB2b2lkIHtcbiAgICAvLyByZXRyeSB0aGUgcmVxdWVzdHMuIHRoaXMgbWV0aG9kIGNhblxuICAgIC8vIGJlIGNhbGxlZCBhZnRlciB0aGUgdG9rZW4gaXMgcmVmcmVzaGVkXG4gIH1cblxuICAvL3RoaXMgY2xhc3MgaXMgdXNlZCBzbyB0aGF0IGFjY2VzcyB0b2tlbiBpcyBpbiBsb2NhbCBzdG9yYWdlXG4gIHB1YmxpYyBnZXRUb2tlbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKTtcbiAgfVxuXG4gIC8vY2hlY2tzIGlmIHRoZSBhY2Nlc3MgdG9rZW4gaXMgYXV0aGVudGljYXRlZCwgcmV0dXJucyB0cnVlIGlmIHNvXG4gIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG4gICAgLy8gIGdldCB0aGUgdG9rZW5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcbiAgICBhY2Nlc3NUb2tlbjtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59Il19