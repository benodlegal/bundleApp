"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/do");
var JwtInterceptor = (function () {
    function JwtInterceptor(auth) {
        this.auth = auth;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).do(function (event) {
            if (event instanceof http_1.HttpResponse) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof http_1.HttpErrorResponse) {
                if (err.status === 401) {
                    // redirect to the login route
                    // or show a modal
                    _this.auth.collectFailedRequest(request);
                }
            }
        });
    };
    return JwtInterceptor;
}());
exports.JwtInterceptor = JwtInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiand0LmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNkNBQTZIO0FBRzdILGdDQUE4QjtBQUM5QjtJQUNFLHdCQUFtQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQUksQ0FBQztJQUN6QyxrQ0FBUyxHQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjtRQUF0RCxpQkFlQztRQWJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFDLEtBQXFCO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxtQkFBWSxDQUFDLENBQUMsQ0FBQztnQkFDbEMscUNBQXFDO1lBQ3ZDLENBQUM7UUFDSCxDQUFDLEVBQUUsVUFBQyxHQUFRO1lBQ1YsRUFBRSxDQUFDLENBQUMsR0FBRyxZQUFZLHdCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDckMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN2Qiw4QkFBOEI7b0JBQzlCLGtCQUFrQjtvQkFDbEIsS0FBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2F1dGgvand0LmludGVyY2VwdG9yLnRzXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVzcG9uc2UsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuZXhwb3J0IGNsYXNzIEp3dEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHVibGljIGF1dGg6IEF1dGhTZXJ2aWNlKSB7IH1cbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLmRvKChldmVudDogSHR0cEV2ZW50PGFueT4pID0+IHtcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAvLyBkbyBzdHVmZiB3aXRoIHJlc3BvbnNlIGlmIHlvdSB3YW50XG4gICAgICB9XG4gICAgfSwgKGVycjogYW55KSA9PiB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKGVyci5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIC8vIHJlZGlyZWN0IHRvIHRoZSBsb2dpbiByb3V0ZVxuICAgICAgICAgIC8vIG9yIHNob3cgYSBtb2RhbFxuICAgICAgICAgIHRoaXMuYXV0aC5jb2xsZWN0RmFpbGVkUmVxdWVzdChyZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il19