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
        //tried string interpolation but wasn't successful, this is the url used to download the bundle 
        var downloadUrl = "https://app.bundledocs.com/api/v1" +
            "/bundles/" + appBundle.PartitionKey + "/" + appBundle.RowKey + "/download?Bearer=" + accessToken;
        console.log(downloadUrl);
        //sends the downloadUrl to the downloadhelper.ts class for further assessment 
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVuZGxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLGdEQUE4QztBQUM5QyxpRUFBOEQ7QUFHOUQ7SUFFSSxrQ0FDWSxZQUF3QixFQUN4QixlQUErQjtRQUQvQixpQkFBWSxHQUFaLFlBQVksQ0FBWTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFDdkMsQ0FBQztJQUVMLDJDQUFRLEdBQVIsVUFBUyxTQUFvQjtRQUN6QixJQUFJLFdBQVcsR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdELGdHQUFnRztRQUNoRyxJQUFJLFdBQVcsR0FDZixtQ0FBbUM7WUFDbkMsV0FBVyxHQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUMsR0FBRyxHQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsbUJBQW1CLEdBQUMsV0FBVyxDQUFDO1FBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekIsOEVBQThFO1FBQ2xGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFqQlEsd0JBQXdCO1FBRHBDLGlCQUFVLEVBQUU7eUNBSWdCLDBCQUFXO1lBQ1AsZ0NBQWM7T0FKbEMsd0JBQXdCLENBa0JwQztJQUFELCtCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwQnVuZGxlIH0gZnJvbSBcIi4uLy4uL21vZGVsL0FwcEJ1bmRsZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgRG93bmxvYWRIZWxwZXIgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9kb3dubG9hZC5oZWxwZXJcIlxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnVuZGxlZG9jc0J1bmRsZXNTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2Rvd25sb2FkSGVscGVyOiBEb3dubG9hZEhlbHBlclxuICAgICkgeyB9XG5cbiAgICBkb3dubG9hZChhcHBCdW5kbGU6IEFwcEJ1bmRsZSkge1xuICAgICAgICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZyA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldEFjY2Vzc1Rva2VuKCk7XG4gICAgICAgIC8vdHJpZWQgc3RyaW5nIGludGVycG9sYXRpb24gYnV0IHdhc24ndCBzdWNjZXNzZnVsLCB0aGlzIGlzIHRoZSB1cmwgdXNlZCB0byBkb3dubG9hZCB0aGUgYnVuZGxlIFxuICAgICAgICBsZXQgZG93bmxvYWRVcmw6c3RyaW5nID0gXG4gICAgICAgIFwiaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXBpL3YxXCIrXG4gICAgICAgIFwiL2J1bmRsZXMvXCIrYXBwQnVuZGxlLlBhcnRpdGlvbktleStcIi9cIithcHBCdW5kbGUuUm93S2V5K1wiL2Rvd25sb2FkP0JlYXJlcj1cIithY2Nlc3NUb2tlbjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvd25sb2FkVXJsKTtcblxuICAgICAgICAgICAgLy9zZW5kcyB0aGUgZG93bmxvYWRVcmwgdG8gdGhlIGRvd25sb2FkaGVscGVyLnRzIGNsYXNzIGZvciBmdXJ0aGVyIGFzc2Vzc21lbnQgXG4gICAgICAgIHRoaXMuX2Rvd25sb2FkSGVscGVyLmRvd25sb2FkKGRvd25sb2FkVXJsKTtcbiAgICB9XG59Il19