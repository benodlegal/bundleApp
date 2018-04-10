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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVuZGxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLGdEQUE4QztBQUU5QyxpRUFBOEQ7QUFHOUQ7SUFFSSxrQ0FDWSxZQUF3QixFQUN4QixlQUErQjtRQUQvQixpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFDdkMsQ0FBQztJQUVMLDJDQUFRLEdBQVIsVUFBUyxTQUFvQjtRQUN6QixJQUFNLFdBQVcsR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9ELElBQU0sV0FBVyxHQUFVOzs0Q0FFUyxDQUFDO1FBRXJDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFkUSx3QkFBd0I7UUFEcEMsaUJBQVUsRUFBRTt5Q0FJZ0IsMEJBQVc7WUFDUCxnQ0FBYztPQUpsQyx3QkFBd0IsQ0FlcEM7SUFBRCwrQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwQnVuZGxlIH0gZnJvbSBcIi4uLy4uL21vZGVsL0FwcEJ1bmRsZVwiO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5cbmltcG9ydCB7IERvd25sb2FkSGVscGVyIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZG93bmxvYWQuaGVscGVyXCJcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJ1bmRsZWRvY3NCdW5kbGVzU2VydmljZSB7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9kb3dubG9hZEhlbHBlcjogRG93bmxvYWRIZWxwZXJcbiAgICApIHsgfVxuXG4gICAgZG93bmxvYWQoYXBwQnVuZGxlOiBBcHBCdW5kbGUpIHtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW46IHN0cmluZyA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldEFjY2Vzc1Rva2VuKCk7XG4gICAgICAgIGNvbnN0IGRvd25sb2FkVXJsOnN0cmluZyA9IFwiaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXBpL3YxXFxcbiAgICAgICAgICAgIC9idW5kbGVzLyR7YXBwQnVuZGxlLlBhcnRpdGlvbktleX0vJHthcHBCdW5kbGUuUm93S2V5fVxcXG4gICAgICAgICAgICAvZG93bmxvYWQ/QmVhcmVyPSR7YWNjZXNzVG9rZW59XCI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9kb3dubG9hZEhlbHBlci5kb3dubG9hZChkb3dubG9hZFVybCk7XG4gICAgfVxufSJdfQ==