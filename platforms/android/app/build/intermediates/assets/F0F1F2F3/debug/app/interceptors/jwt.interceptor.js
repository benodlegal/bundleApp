"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/do");
var JwtInterceptor = (function () {
    function JwtInterceptor(auth) {
        this.auth = auth;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).do(function (event) {
            if (event instanceof http_1.HttpResponse) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof http_1.HttpErrorResponse) {
                if (err.status === 401) {
                }
            }
        });
    };
    return JwtInterceptor;
}());
exports.JwtInterceptor = JwtInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiand0LmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNkNBQTZIO0FBRzdILGdDQUE4QjtBQUM5QjtJQUNFLHdCQUFtQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQUksQ0FBQztJQUN6QyxrQ0FBUyxHQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjtRQUVwRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBQyxLQUFxQjtZQUNuRCxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksbUJBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLHFDQUFxQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQyxFQUFFLFVBQUMsR0FBUTtZQUNWLEVBQUUsQ0FBQyxDQUFDLEdBQUcsWUFBWSx3QkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2F1dGgvand0LmludGVyY2VwdG9yLnRzXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmV4cG9ydCBjbGFzcyBKd3RJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoOiBBdXRoU2VydmljZSkgeyB9XG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5kbygoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgLy8gZG8gc3R1ZmYgd2l0aCByZXNwb25zZSBpZiB5b3Ugd2FudFxuICAgICAgfVxuICAgIH0sIChlcnI6IGFueSkgPT4ge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDEpIHsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdfQ==