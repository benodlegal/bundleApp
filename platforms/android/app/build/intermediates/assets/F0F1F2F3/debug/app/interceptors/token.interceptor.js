"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/app/auth/token.interceptor.ts
var core_1 = require("@angular/core");
var auth_service_1 = require("../services/auth.service");
var TokenInterceptor = (function () {
    function TokenInterceptor(_auth) {
        this._auth = _auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this._auth.getAccessToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], TokenInterceptor);
    return TokenInterceptor;
}());
exports.TokenInterceptor = TokenInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUFvQztBQUNwQyxzQ0FBMkM7QUFFM0MseURBQXVEO0FBSXZEO0lBRUUsMEJBQW9CLEtBQWtCO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFBSSxDQUFDO0lBRTNDLG9DQUFTLEdBQVQsVUFBVSxPQUF5QixFQUFFLElBQWlCO1FBRXBELE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFVBQVUsRUFBRTtnQkFDVixhQUFhLEVBQUUsWUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBSTthQUN2RDtTQUNGLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFaVSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FHZ0IsMEJBQVc7T0FGM0IsZ0JBQWdCLENBYTVCO0lBQUQsdUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2F1dGgvdG9rZW4uaW50ZXJjZXB0b3IudHNcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGg6IEF1dGhTZXJ2aWNlKSB7IH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG5cclxuICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcclxuICAgICAgc2V0SGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLl9hdXRoLmdldEFjY2Vzc1Rva2VuKCl9YFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcclxuICB9XHJcbn0iXX0=