"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var BundledocsUserService = (function () {
    function BundledocsUserService(http) {
        this.http = http;
    }
    BundledocsUserService.prototype.me = function () {
        return this.http.get("https://app.bundledocs.com/api/v1/users/me");
    };
    BundledocsUserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BundledocsUserService);
    return BundledocsUserService;
}());
exports.BundledocsUserService = BundledocsUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUFrRDtBQUdsRDtJQUVJLCtCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6QyxrQ0FBRSxHQUFGO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQU5RLHFCQUFxQjtRQURqQyxpQkFBVSxFQUFFO3lDQUdpQixpQkFBVTtPQUYzQixxQkFBcUIsQ0FPakM7SUFBRCw0QkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCdW5kbGVkb2NzVXNlclNlcnZpY2Uge1xyXG4gICAgcHVibGljIHVzZXJNZTogYW55O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgICBtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2FwaS92MS91c2Vycy9tZVwiKTtcclxuICAgIH1cclxufSJdfQ==