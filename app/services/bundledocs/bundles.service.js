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
        var downloadUrl = "https://app.bundledocs.com/api/v1" +
            "/bundles/" + appBundle.PartitionKey + "/" + appBundle.RowKey + "/download?Bearer=" + accessToken;
        console.log(downloadUrl);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVuZGxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLGdEQUE4QztBQUM5QyxpRUFBOEQ7QUFHOUQ7SUFFSSxrQ0FDWSxZQUF3QixFQUN4QixlQUErQjtRQUQvQixpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFDdkMsQ0FBQztJQUVMLDJDQUFRLEdBQVIsVUFBUyxTQUFvQjtRQUN6QixJQUFJLFdBQVcsR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdELElBQUksV0FBVyxHQUNmLG1DQUFtQztZQUNuQyxXQUFXLEdBQUMsU0FBUyxDQUFDLFlBQVksR0FBQyxHQUFHLEdBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxtQkFBbUIsR0FBQyxXQUFXLENBQUM7UUFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBZlEsd0JBQXdCO1FBRHBDLGlCQUFVLEVBQUU7eUNBSWdCLDBCQUFXO1lBQ1AsZ0NBQWM7T0FKbEMsd0JBQXdCLENBZ0JwQztJQUFELCtCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwQnVuZGxlIH0gZnJvbSBcIi4uLy4uL21vZGVsL0FwcEJ1bmRsZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgRG93bmxvYWRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9kb3dubG9hZC5oZWxwZXJcIlxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnVuZGxlZG9jc0J1bmRsZXNTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2Rvd25sb2FkSGVscGVyOiBEb3dubG9hZEhlbHBlclxuICAgICkgeyB9XG5cbiAgICBkb3dubG9hZChhcHBCdW5kbGU6IEFwcEJ1bmRsZSkge1xuICAgICAgICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZyA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldEFjY2Vzc1Rva2VuKCk7XG4gICAgICAgIGxldCBkb3dubG9hZFVybDpzdHJpbmcgPSBcbiAgICAgICAgXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9hcGkvdjFcIitcbiAgICAgICAgXCIvYnVuZGxlcy9cIithcHBCdW5kbGUuUGFydGl0aW9uS2V5K1wiL1wiK2FwcEJ1bmRsZS5Sb3dLZXkrXCIvZG93bmxvYWQ/QmVhcmVyPVwiK2FjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZG93bmxvYWRVcmwpO1xuXG4gICAgICAgIHRoaXMuX2Rvd25sb2FkSGVscGVyLmRvd25sb2FkKGRvd25sb2FkVXJsKTtcbiAgICB9XG59Il19