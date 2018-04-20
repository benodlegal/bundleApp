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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNkNBQWtEO0FBSWxEO0lBS0ksK0JBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7SUFBSSxDQUFDO0lBSDFDLG9DQUFJLEdBQUosVUFBSyxJQUFTO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFHRCxzREFBc0Q7SUFDdEQsa0NBQUUsR0FBRjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBa0IsNENBQTRDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBVlEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7eUNBTWtCLGlCQUFVO09BTDVCLHFCQUFxQixDQVdqQztJQUFELDRCQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQXBwUmVzcG9uc2VVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVsL0FwcFJlc3BvbnNlVXNlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnVuZGxlZG9jc1VzZXJTZXJ2aWNlIHtcblxuICAgIHB1c2goYXJnMDogYW55KTogYW55IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgLy9nZXRzIHlvdSB0aGUgaW5kaXZpZHVhbCB1c2VycyBkZXRhaWxzIGZyb20gdGhlIEFQSSAgXG4gICAgbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldDxBcHBSZXNwb25zZVVzZXI+KFwiaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXBpL3YxL3VzZXJzL21lXCIpO1xuICAgIH1cbn0iXX0=