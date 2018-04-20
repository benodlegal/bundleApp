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
    //gets you the individual users details from the API
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUFrRDtBQUlsRDtJQUtJLCtCQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQUksQ0FBQztJQUgxQyxvQ0FBSSxHQUFKLFVBQUssSUFBUztRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBR0Qsb0RBQW9EO0lBQ3BELGtDQUFFLEdBQUY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQWtCLDRDQUE0QyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQVZRLHFCQUFxQjtRQURqQyxpQkFBVSxFQUFFO3lDQU1rQixpQkFBVTtPQUw1QixxQkFBcUIsQ0FXakM7SUFBRCw0QkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFwcFJlc3BvbnNlVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbC9BcHBSZXNwb25zZVVzZXJcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJ1bmRsZWRvY3NVc2VyU2VydmljZSB7XG5cbiAgICBwdXNoKGFyZzA6IGFueSk6IGFueSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIC8vZ2V0cyB5b3UgdGhlIGluZGl2aWR1YWwgdXNlcnMgZGV0YWlscyBmcm9tIHRoZSBBUElcbiAgICBtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PEFwcFJlc3BvbnNlVXNlcj4oXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hcGkvdjEvdXNlcnMvbWVcIik7XG4gICAgfVxufSJdfQ==