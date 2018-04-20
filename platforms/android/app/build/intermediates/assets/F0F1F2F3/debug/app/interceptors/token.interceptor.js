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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUFvQztBQUNwQyxzQ0FBMkM7QUFFM0MseURBQXVEO0FBSXZEO0lBRUUsMEJBQW9CLEtBQWtCO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFBSSxDQUFDO0lBRTNDLG9DQUFTLEdBQVQsVUFBVSxPQUF5QixFQUFFLElBQWlCO1FBRXBELE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFVBQVUsRUFBRTtnQkFDVixhQUFhLEVBQUUsWUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBSTthQUN2RDtTQUNGLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFaVSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FHZ0IsMEJBQVc7T0FGM0IsZ0JBQWdCLENBYTVCO0lBQUQsdUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2F1dGgvdG9rZW4uaW50ZXJjZXB0b3IudHNcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50LCBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRva2VuSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGg6IEF1dGhTZXJ2aWNlKSB7IH1cblxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG5cbiAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0aGlzLl9hdXRoLmdldEFjY2Vzc1Rva2VuKCl9YFxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgfVxufSJdfQ==