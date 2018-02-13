"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var BundledocsUserService = (function () {
    function BundledocsUserService(http) {
        this.http = http;
    }
    BundledocsUserService.prototype.me = function () {
        this.userMe = this.http.get("https://app.bundledocs.com/api/v1/users/me");
        return this.userMe;
    };
    BundledocsUserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BundledocsUserService);
    return BundledocsUserService;
}());
exports.BundledocsUserService = BundledocsUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUFrRDtBQUdsRDtJQUVJLCtCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6QyxrQ0FBRSxHQUFGO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQzFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRXZCLENBQUM7SUFSUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FHaUIsaUJBQVU7T0FGM0IscUJBQXFCLENBU2pDO0lBQUQsNEJBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnVuZGxlZG9jc1VzZXJTZXJ2aWNlIHtcclxuICAgIHB1YmxpYyB1c2VyTWU6YW55O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgICBtZSgpIHtcclxuICAgICAgICB0aGlzLnVzZXJNZSA9IHRoaXMuaHR0cC5nZXQoXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hcGkvdjEvdXNlcnMvbWVcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlck1lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il19