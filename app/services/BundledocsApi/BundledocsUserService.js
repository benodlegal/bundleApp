"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var BundledocsUserService = (function () {
    function BundledocsUserService(_http) {
        this._http = _http;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLDZDQUFrRDtBQUdsRDtJQUVJLCtCQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQUksQ0FBQztJQUUxQyxrQ0FBRSxHQUFGO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFrQiw0Q0FBNEMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFOUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FHa0IsaUJBQVU7T0FGNUIscUJBQXFCLENBUWpDO0lBQUQsNEJBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCdW5kbGVkb2NzVXNlclNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgICBtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQ8QXBwUmVzcG9uc2VVc2VyPihcImh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2FwaS92MS91c2Vycy9tZVwiKTtcclxuICAgIH1cclxuXHJcbn0iXX0=