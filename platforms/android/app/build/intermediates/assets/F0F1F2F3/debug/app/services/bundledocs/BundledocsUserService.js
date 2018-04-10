"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var BundledocsUserService = /** @class */ (function () {
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
