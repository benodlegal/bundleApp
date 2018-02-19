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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLHNDQUEyQztBQUszQztJQURBO1FBRUUsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO0lBb0IvQyxDQUFDO0lBbkJRLDBDQUFvQixHQUEzQixVQUE0QixPQUFPO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSx5Q0FBbUIsR0FBMUI7UUFDRSxzQ0FBc0M7UUFDdEMseUNBQXlDO0lBQzNDLENBQUM7SUFDTSw4QkFBUSxHQUFmO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLHFDQUFlLEdBQXRCO1FBQ0UsaUJBQWlCO1FBQ2pCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxXQUFXLENBQUM7UUFFWixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQXBCVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBcUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2F1dGgvYXV0aC5zZXJ2aWNlLnRzXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGNhY2hlZFJlcXVlc3RzOiBBcnJheTxIdHRwUmVxdWVzdDxhbnk+PiA9IFtdO1xyXG4gIHB1YmxpYyBjb2xsZWN0RmFpbGVkUmVxdWVzdChyZXF1ZXN0KTogdm9pZCB7XHJcbiAgICB0aGlzLmNhY2hlZFJlcXVlc3RzLnB1c2gocmVxdWVzdCk7XHJcbiAgfVxyXG4gIHB1YmxpYyByZXRyeUZhaWxlZFJlcXVlc3RzKCk6IHZvaWQge1xyXG4gICAgLy8gcmV0cnkgdGhlIHJlcXVlc3RzLiB0aGlzIG1ldGhvZCBjYW5cclxuICAgIC8vIGJlIGNhbGxlZCBhZnRlciB0aGUgdG9rZW4gaXMgcmVmcmVzaGVkXHJcbiAgfVxyXG4gIHB1YmxpYyBnZXRUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgY29uc29sZS5sb2coJ3lvdXIgYWNjZXNzIHRva2VuIGlzIG5vdyBpbiBsb2NhbCBzdG9yYWdlICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKSk7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gIGdldCB0aGUgdG9rZW5cclxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgYWNjZXNzVG9rZW47XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59Il19