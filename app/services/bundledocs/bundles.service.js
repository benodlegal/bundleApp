"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("../auth.service");
var download_helper_1 = require("../../helpers/download.helper");
var BundledocsBundlesService = (function () {
    function BundledocsBundlesService(_authService, _downloadHelper) {
        this._authService = _authService;
        this._downloadHelper = _downloadHelper;
    }
    BundledocsBundlesService.prototype.download = function (appBundle) {
        var accessToken = this._authService.getAccessToken();
        var downloadUrl = "https://app.bundledocs.com/api/v1\
            /bundles/${appBundle.PartitionKey}/${appBundle.RowKey}\
            /download?Bearer=${accessToken}";
        this._downloadHelper.download(downloadUrl);
    };
    BundledocsBundlesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            download_helper_1.DownloadHelper])
    ], BundledocsBundlesService);
    return BundledocsBundlesService;
}());
exports.BundledocsBundlesService = BundledocsBundlesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVuZGxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLGdEQUE4QztBQUU5QyxpRUFBOEQ7QUFHOUQ7SUFFSSxrQ0FDWSxZQUF3QixFQUN4QixlQUErQjtRQUQvQixpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFDdkMsQ0FBQztJQUVMLDJDQUFRLEdBQVIsVUFBUyxTQUFvQjtRQUN6QixJQUFNLFdBQVcsR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9ELElBQU0sV0FBVyxHQUFVOzs0Q0FFUyxDQUFDO1FBRXJDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFkUSx3QkFBd0I7UUFEcEMsaUJBQVUsRUFBRTt5Q0FJZ0IsMEJBQVc7WUFDUCxnQ0FBYztPQUpsQyx3QkFBd0IsQ0FlcEM7SUFBRCwrQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFwcEJ1bmRsZSB9IGZyb20gXCIuLi8uLi9tb2RlbC9BcHBCdW5kbGVcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IERvd25sb2FkSGVscGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZG93bmxvYWQuaGVscGVyXCJcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJ1bmRsZWRvY3NCdW5kbGVzU2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2Rvd25sb2FkSGVscGVyOiBEb3dubG9hZEhlbHBlclxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBkb3dubG9hZChhcHBCdW5kbGU6IEFwcEJ1bmRsZSkge1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuOiBzdHJpbmcgPSB0aGlzLl9hdXRoU2VydmljZS5nZXRBY2Nlc3NUb2tlbigpO1xyXG4gICAgICAgIGNvbnN0IGRvd25sb2FkVXJsOnN0cmluZyA9IFwiaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXBpL3YxXFxcclxuICAgICAgICAgICAgL2J1bmRsZXMvJHthcHBCdW5kbGUuUGFydGl0aW9uS2V5fS8ke2FwcEJ1bmRsZS5Sb3dLZXl9XFxcclxuICAgICAgICAgICAgL2Rvd25sb2FkP0JlYXJlcj0ke2FjY2Vzc1Rva2VufVwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2Rvd25sb2FkSGVscGVyLmRvd25sb2FkKGRvd25sb2FkVXJsKTtcclxuICAgIH1cclxufSJdfQ==