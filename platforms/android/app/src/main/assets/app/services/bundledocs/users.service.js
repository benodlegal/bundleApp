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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNkNBQWtEO0FBSWxEO0lBS0ksK0JBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7SUFBSSxDQUFDO0lBSDFDLG9DQUFJLEdBQUosVUFBSyxJQUFTO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFHRCxrQ0FBRSxHQUFGO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFrQiw0Q0FBNEMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFUUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FNa0IsaUJBQVU7T0FMNUIscUJBQXFCLENBVWpDO0lBQUQsNEJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBcHBSZXNwb25zZVVzZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWwvQXBwUmVzcG9uc2VVc2VyXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCdW5kbGVkb2NzVXNlclNlcnZpY2Uge1xuXG4gICAgcHVzaChhcmcwOiBhbnkpOiBhbnkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICBtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0PEFwcFJlc3BvbnNlVXNlcj4oXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hcGkvdjEvdXNlcnMvbWVcIik7XG4gICAgfVxufSJdfQ==