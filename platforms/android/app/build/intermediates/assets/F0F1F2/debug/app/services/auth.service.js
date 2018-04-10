"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/app/auth/auth.service.ts
var core_1 = require("@angular/core");
require("nativescript-localstorage");
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.getAccessToken = function () {
        return localStorage.getItem('accessToken');
    };
    AuthService.prototype.setAccessToken = function (accessToken) {
        localStorage.setItem('accessToken', accessToken);
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLHNDQUEyQztBQUczQyxxQ0FBbUM7QUFHbkM7SUFBQTtJQVFBLENBQUM7SUFQUSxvQ0FBYyxHQUFyQjtRQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxvQ0FBYyxHQUFyQixVQUFzQixXQUFXO1FBQy9CLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFQVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBUXZCO0lBQUQsa0JBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXV0aC9hdXRoLnNlcnZpY2UudHNcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAnbmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgcHVibGljIGdldEFjY2Vzc1Rva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0QWNjZXNzVG9rZW4oYWNjZXNzVG9rZW4pOiB2b2lkIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NUb2tlbicsIGFjY2Vzc1Rva2VuKTtcclxuICB9XHJcbn0iXX0=