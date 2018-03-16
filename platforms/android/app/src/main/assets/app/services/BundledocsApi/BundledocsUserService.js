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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLDZDQUFrRDtBQUdsRDtJQUtJLCtCQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQUksQ0FBQztJQUgxQyxvQ0FBSSxHQUFKLFVBQUssSUFBUztRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBR0Qsa0NBQUUsR0FBRjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBa0IsNENBQTRDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBVFEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBTWtCLGlCQUFVO09BTDVCLHFCQUFxQixDQVdqQztJQUFELDRCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnVuZGxlZG9jc1VzZXJTZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgcHVzaChhcmcwOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICAgbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PEFwcFJlc3BvbnNlVXNlcj4oXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hcGkvdjEvdXNlcnMvbWVcIik7XHJcbiAgICB9XHJcblxyXG59Il19