"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/app/auth/auth.service.ts
var core_1 = require("@angular/core");
require("nativescript-localstorage");
var AuthService = (function () {
    function AuthService() {
    }
    //getAccessToken class retrieves the access token from local storage 
    AuthService.prototype.getAccessToken = function () {
        return localStorage.getItem('accessToken');
    };
    //this sets the accessToken and passes it off to local storage 
    //so it can be used accross all components 
    AuthService.prototype.setAccessToken = function (accessToken) {
        localStorage.setItem('accessToken', accessToken);
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLHNDQUEyQztBQUczQyxxQ0FBbUM7QUFHbkM7SUFBQTtJQVdBLENBQUM7SUFWQyxxRUFBcUU7SUFDOUQsb0NBQWMsR0FBckI7UUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsK0RBQStEO0lBQy9ELDJDQUEyQztJQUNwQyxvQ0FBYyxHQUFyQixVQUFzQixXQUFXO1FBQy9CLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFWVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBV3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXV0aC9hdXRoLnNlcnZpY2UudHNcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgJ25hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAvL2dldEFjY2Vzc1Rva2VuIGNsYXNzIHJldHJpZXZlcyB0aGUgYWNjZXNzIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZSBcbiAgcHVibGljIGdldEFjY2Vzc1Rva2VuKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpO1xuICB9XG5cbiAgLy90aGlzIHNldHMgdGhlIGFjY2Vzc1Rva2VuIGFuZCBwYXNzZXMgaXQgb2ZmIHRvIGxvY2FsIHN0b3JhZ2UgXG4gIC8vc28gaXQgY2FuIGJlIHVzZWQgYWNjcm9zcyBhbGwgY29tcG9uZW50cyBcbiAgcHVibGljIHNldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuKTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc1Rva2VuJywgYWNjZXNzVG9rZW4pO1xuICB9XG59Il19