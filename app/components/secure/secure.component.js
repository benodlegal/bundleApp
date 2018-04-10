"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var auth_service_1 = require("../../services/auth.service");
var users_service_1 = require("../../services/bundledocs/users.service");
var bundles_service_1 = require("../../services/bundledocs/bundles.service");
var download_helper_1 = require("../../helpers/download.helper");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var SecureComponent = (function () {
    function SecureComponent(_changeDetectionRef, _router, _authService, _bdUserService, _bdBundlesService, _downloadHelper) {
        this._changeDetectionRef = _changeDetectionRef;
        this._router = _router;
        this._authService = _authService;
        this._bdUserService = _bdUserService;
        this._bdBundlesService = _bdBundlesService;
        this._downloadHelper = _downloadHelper;
        this.count = 0;
    }
    Object.defineProperty(SecureComponent.prototype, "bdUser", {
        get: function () {
            return this._bdUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SecureComponent.prototype, "searchPhrase", {
        get: function () {
            return this._searchPhrase;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SecureComponent.prototype, "bdUserBundles", {
        get: function () {
            return this._bdUserBundles;
        },
        enumerable: true,
        configurable: true
    });
    SecureComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    };
    SecureComponent.prototype.onClickSearch = function () {
        this.count++;
        console.log(this.count);
        if (this.count == 1) {
            this._txtSearchPhrase.nativeElement.visibility = "visible";
            this.count--;
            this.count--;
        }
        else if (this.count == 0) {
            this._txtSearchPhrase.nativeElement.visibility = "hidden";
        }
    };
    SecureComponent.prototype.onPullToRefreshInitiated = function (args) {
        this.initBundles();
        var listView = args.object;
        listView.notifyPullToRefreshFinished();
    };
    SecureComponent.prototype.ngOnInit = function () {
        this.initBundles();
        this._changeDetectionRef.detectChanges();
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
        this.mainContentText = "Side Drawer Button";
    };
    Object.defineProperty(SecureComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    SecureComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    SecureComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    SecureComponent.prototype.initBundles = function () {
        var _this = this;
        this._bdUserBundles = new observable_array_1.ObservableArray();
        //subscribe to the data
        this._bdUserService.me().subscribe(function (response) {
            _this._bdUser = response.data[0];
            //push each data item onto the obserbvable array
            for (var i = 0; i < _this._bdUser.Briefs.length; i++) {
                var currentBrief = _this._bdUser.Briefs[i];
                _this._bdUserBundles.push(currentBrief);
            }
        }, function (err) { return console.log(err); });
    };
    SecureComponent.prototype.logout = function () {
        console.log('secure.component.logout');
        this._authService.setAccessToken(null);
        this._router.navigate(["/"]);
    };
    SecureComponent.prototype.emailSupport = function () {
        this._downloadHelper.download("mailto:support@bundledocs.com");
    };
    SecureComponent.prototype.downloadBundle = function (bundle) {
        this._bdBundlesService.download(bundle);
    };
    SecureComponent.prototype.downloadManual = function () {
        this._downloadHelper.download("https://app.bundledocs.com/bundledocs-app-user-manual");
    };
    SecureComponent.prototype.drawerService = function () {
        this._router.navigate(["/sideDrawer"]);
    };
    __decorate([
        core_1.ViewChild("txtSearchPhrase"),
        __metadata("design:type", core_1.ElementRef)
    ], SecureComponent.prototype, "_txtSearchPhrase", void 0);
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SecureComponent.prototype, "drawerComponent", void 0);
    SecureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-secure",
            templateUrl: "secure.component.html"
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            router_1.Router,
            auth_service_1.AuthService,
            users_service_1.BundledocsUserService,
            bundles_service_1.BundledocsBundlesService,
            download_helper_1.DownloadHelper])
    ], SecureComponent);
    return SecureComponent;
}());
exports.SecureComponent = SecureComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEY7QUFFNUYsMENBQXlDO0FBR3pDLDJFQUF5RTtBQUt6RSw0REFBMEQ7QUFDMUQseUVBQWdGO0FBQ2hGLDZFQUFxRjtBQUNyRixpRUFBK0Q7QUFLL0QsOERBQTRGO0FBYTVGO0lBc0JJLHlCQUNZLG1CQUFzQyxFQUN0QyxPQUFlLEVBQ2YsWUFBeUIsRUFDekIsY0FBcUMsRUFDckMsaUJBQTJDLEVBQzNDLGVBQStCO1FBTC9CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDdEMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQTNCcEMsVUFBSyxHQUFTLENBQUMsQ0FBQztJQTRCcEIsQ0FBQztJQXhCSixzQkFBSSxtQ0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSx5Q0FBWTthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksMENBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQWNELHVDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2QsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsdUNBQWEsR0FBYjtR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RyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxNQUFpQjtRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsdURBQXVELENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBN0dEO1FBREMsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQztrQ0FDSCxpQkFBVTs2REFBQztJQXFCRjtRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7NERBQUM7SUEvQnpFLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBd0JtQyx3QkFBaUI7WUFDN0IsZUFBTTtZQUNELDBCQUFXO1lBQ1QscUNBQXFCO1lBQ2xCLDBDQUF3QjtZQUMxQixnQ0FBYztPQTVCbEMsZUFBZSxDQXdIM0I7SUFBRCxzQkFBQztDQUFBLEFBeEhELElBd0hDO0FBeEhZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuXG5pbXBvcnQgeyBBcHBCdW5kbGUgfSBmcm9tIFwiLi4vLi4vbW9kZWwvQXBwQnVuZGxlXCI7XG5pbXBvcnQgeyBBcHBVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVsL0FwcFVzZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgQnVuZGxlZG9jc1VzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2J1bmRsZWRvY3MvdXNlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgQnVuZGxlZG9jc0J1bmRsZXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2J1bmRsZWRvY3MvYnVuZGxlcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEb3dubG9hZEhlbHBlciB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Rvd25sb2FkLmhlbHBlclwiO1xuXG5pbXBvcnQgeyBQYWdlLCB2aXNpYmlsaXR5UHJvcGVydHkgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XG5cbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5cbmltcG9ydCB7IFRuc1NpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtc2lkZWRyYXdlcidcbmltcG9ydCB7IFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaWRlRHJhd2VyL2RyYXdlci5jb21wb25lbnRcIlxuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwibnMtc2VjdXJlXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwic2VjdXJlLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU2VjdXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgY291bnQ6IG51bWJlcj0wO1xuICAgIHByaXZhdGUgX2JkVXNlcjogQXBwVXNlcjtcbiAgICBwcml2YXRlIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcblxuICAgIGdldCBiZFVzZXIoKTogQXBwVXNlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iZFVzZXI7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChcInR4dFNlYXJjaFBocmFzZVwiKVxuICAgIHByaXZhdGUgX3R4dFNlYXJjaFBocmFzZTogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgX3NlYXJjaFBocmFzZTogc3RyaW5nO1xuICAgIGdldCBzZWFyY2hQaHJhc2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaFBocmFzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9iZFVzZXJCdW5kbGVzOiBPYnNlcnZhYmxlQXJyYXk8QXBwQnVuZGxlPjtcbiAgICBnZXQgYmRVc2VyQnVuZGxlcygpOiBPYnNlcnZhYmxlQXJyYXk8QXBwQnVuZGxlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iZFVzZXJCdW5kbGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfYmRVc2VyU2VydmljZTogQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9iZEJ1bmRsZXNTZXJ2aWNlOiBCdW5kbGVkb2NzQnVuZGxlc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2Rvd25sb2FkSGVscGVyOiBEb3dubG9hZEhlbHBlclxuICAgICkge31cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICAgIG9uVGV4dENoYW5nZWQoYXJncykge1xuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb3VudCk7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ID09IDEpIHtcbiAgICAgICAgICAgICg8U2VhcmNoQmFyPnRoaXMuX3R4dFNlYXJjaFBocmFzZS5uYXRpdmVFbGVtZW50KS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICB0aGlzLmNvdW50LS07XG4gICAgICAgICAgICB0aGlzLmNvdW50LS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmNvdW50ID09IDApe1xuICAgICAgICAgICAgKDxTZWFyY2hCYXI+dGhpcy5fdHh0U2VhcmNoUGhyYXNlLm5hdGl2ZUVsZW1lbnQpLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuaW5pdEJ1bmRsZXMoKTtcbiAgICAgICAgbGV0IGxpc3RWaWV3OiBSYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBsaXN0Vmlldy5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0QnVuZGxlcygpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRUZXh0ID0gXCJTaWRlIERyYXdlciBCdXR0b25cIjtcbiAgICB9XG5cbiAgICBnZXQgbWFpbkNvbnRlbnRUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFpbkNvbnRlbnRUZXh0O1xuICAgIH1cblxuICAgIHNldCBtYWluQ29udGVudFRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9tYWluQ29udGVudFRleHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0QnVuZGxlcygpIHtcbiAgICAgICAgdGhpcy5fYmRVc2VyQnVuZGxlcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8QXBwQnVuZGxlPigpO1xuICAgICAgICAvL3N1YnNjcmliZSB0byB0aGUgZGF0YVxuICAgICAgICB0aGlzLl9iZFVzZXJTZXJ2aWNlLm1lKCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2JkVXNlciA9IHJlc3BvbnNlLmRhdGFbMF07XG5cbiAgICAgICAgICAgIC8vcHVzaCBlYWNoIGRhdGEgaXRlbSBvbnRvIHRoZSBvYnNlcmJ2YWJsZSBhcnJheVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9iZFVzZXIuQnJpZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRCcmllZiA9IHRoaXMuX2JkVXNlci5CcmllZnNbaV07XG4gICAgICAgICAgICAgICAgdGhpcy5fYmRVc2VyQnVuZGxlcy5wdXNoKGN1cnJlbnRCcmllZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlY3VyZS5jb21wb25lbnQubG9nb3V0Jyk7XG5cbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2V0QWNjZXNzVG9rZW4obnVsbCk7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKTtcbiAgICB9XG5cbiAgICBlbWFpbFN1cHBvcnQoKSB7XG4gICAgICAgIHRoaXMuX2Rvd25sb2FkSGVscGVyLmRvd25sb2FkKFwibWFpbHRvOnN1cHBvcnRAYnVuZGxlZG9jcy5jb21cIik7XG4gICAgfVxuXG4gICAgZG93bmxvYWRCdW5kbGUoYnVuZGxlOiBBcHBCdW5kbGUpIHtcbiAgICAgICAgdGhpcy5fYmRCdW5kbGVzU2VydmljZS5kb3dubG9hZChidW5kbGUpO1xuICAgIH1cblxuICAgIGRvd25sb2FkTWFudWFsKCkge1xuICAgICAgICB0aGlzLl9kb3dubG9hZEhlbHBlci5kb3dubG9hZChcImh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2J1bmRsZWRvY3MtYXBwLXVzZXItbWFudWFsXCIpO1xuICAgIH1cblxuICAgIGRyYXdlclNlcnZpY2UoKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCIvc2lkZURyYXdlclwiXSk7XG4gICAgfVxufVxuIl19