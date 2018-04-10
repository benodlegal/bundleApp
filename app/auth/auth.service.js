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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLHNDQUEyQztBQUszQztJQURBO1FBRUUsbUJBQWMsR0FBNEIsRUFBRSxDQUFDO0lBb0IvQyxDQUFDO0lBbkJRLDBDQUFvQixHQUEzQixVQUE0QixPQUFPO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSx5Q0FBbUIsR0FBMUI7UUFDRSxzQ0FBc0M7UUFDdEMseUNBQXlDO0lBQzNDLENBQUM7SUFDTSw4QkFBUSxHQUFmO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDaEcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLHFDQUFlLEdBQXRCO1FBQ0UsaUJBQWlCO1FBQ2pCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxXQUFXLENBQUM7UUFFWixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQXBCVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBcUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2F1dGgvYXV0aC5zZXJ2aWNlLnRzXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjYWNoZWRSZXF1ZXN0czogQXJyYXk8SHR0cFJlcXVlc3Q8YW55Pj4gPSBbXTtcbiAgcHVibGljIGNvbGxlY3RGYWlsZWRSZXF1ZXN0KHJlcXVlc3QpOiB2b2lkIHtcbiAgICB0aGlzLmNhY2hlZFJlcXVlc3RzLnB1c2gocmVxdWVzdCk7XG4gIH1cbiAgcHVibGljIHJldHJ5RmFpbGVkUmVxdWVzdHMoKTogdm9pZCB7XG4gICAgLy8gcmV0cnkgdGhlIHJlcXVlc3RzLiB0aGlzIG1ldGhvZCBjYW5cbiAgICAvLyBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHRva2VuIGlzIHJlZnJlc2hlZFxuICB9XG4gIHB1YmxpYyBnZXRUb2tlbigpOiBzdHJpbmcge1xuICAgIGNvbnNvbGUubG9nKCd5b3VyIGFjY2VzcyB0b2tlbiBpcyBub3cgaW4gbG9jYWwgc3RvcmFnZSAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykpO1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG4gICAgLy8gIGdldCB0aGUgdG9rZW5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcbiAgICBhY2Nlc3NUb2tlbjtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59Il19