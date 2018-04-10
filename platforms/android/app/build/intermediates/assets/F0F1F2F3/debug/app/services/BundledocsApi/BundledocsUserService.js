"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var BundledocsUserService = (function () {
    function BundledocsUserService(_http) {
        this._http = _http;
    }
    BundledocsUserService.prototype.push = function (arg0) {
        throw new Error("Method not implemented.");
    };
    BundledocsUserService.prototype.me = function () {
        return this._http.get("https://app.bundledocs.com/api/v1/users/me");
    };
    BundledocsUserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BundledocsUserService);
    return BundledocsUserService;
}());
exports.BundledocsUserService = BundledocsUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUFrRDtBQUlsRDtJQUtJLCtCQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQUksQ0FBQztJQUgxQyxvQ0FBSSxHQUFKLFVBQUssSUFBUztRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBR0Qsa0NBQUUsR0FBRjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBa0IsNENBQTRDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBVFEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBTWtCLGlCQUFVO09BTDVCLHFCQUFxQixDQVVqQztJQUFELDRCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQXBwUmVzcG9uc2VVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVsL0FwcFJlc3BvbnNlVXNlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnVuZGxlZG9jc1VzZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwdXNoKGFyZzA6IGFueSk6IGFueSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgICBtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8QXBwUmVzcG9uc2VVc2VyPihcImh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2FwaS92MS91c2Vycy9tZVwiKTtcclxuICAgIH1cclxufSJdfQ==