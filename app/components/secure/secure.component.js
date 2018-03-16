"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var users_service_1 = require("../../services/bundledocs/users.service");
var dialogs = require("ui/dialogs");
var utils = require("utils/utils");
var AppBundle_1 = require("../../model/AppBundle");
function showSideDrawer(args) {
    console.log("Show SideDrawer tapped.");
    // Show sidedrawer ...
}
exports.showSideDrawer = showSideDrawer;
var SecureComponent = (function () {
    function SecureComponent(_router, _activatedRoute, cdRef, _bdUserService, _ngZone, _changeDetectionRef) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.cdRef = cdRef;
        this._bdUserService = _bdUserService;
        this._ngZone = _ngZone;
        this._changeDetectionRef = _changeDetectionRef;
    }
    Object.defineProperty(SecureComponent.prototype, "bdUserBundles", {
        get: function () {
            return this._bdUserBundles;
        },
        enumerable: true,
        configurable: true
    });
    SecureComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        alert("You are searching for " + searchBar.text);
    };
    SecureComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    };
    SecureComponent.prototype.ngAfterViewInit = function () {
        try {
            console.log('load was called');
            //leave the below
            var searchPhrase = this.txtSearchPhrase.nativeElement;
            searchPhrase.text = " ";
            searchPhrase.text = "";
        }
        catch (e) {
            console.log(JSON.stringify(e));
        }
        console.log('accessToken3');
    };
    SecureComponent.prototype.ngOnInit = function () {
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
        console.log('ngOnInit called in secure');
    };
    SecureComponent.prototype.initDataItems = function () {
        var _this = this;
        this._bdUserBundles = new observable_array_1.ObservableArray();
        //subscribe to the data
        this._bdUserService.me().subscribe(function (response) {
            _this.bdUser = response.data[0];
            _this.htmlUsersToken = response.data[0].Email;
            for (var i = 0; i <= _this.bdUser.Briefs.length; i++) {
                var currentBrief = _this.bdUser.Briefs[i];
                _this.bdUserBundles.push(currentBrief);
                console.log(JSON.stringify(_this.bdUserBundles));
            }
        }, function (err) { return console.log(err); });
        //push each data item onto the obserbvable array
    };
    SecureComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy called in secure');
    };
    SecureComponent.prototype.logout = function () {
        // ApplicationSettings.remove("authenticated");
        // this._router.navigate(["/login"], { clearHistory: true });
        // localStorage.setItem('accessToken', null);
        console.log('you clicked logout');
    };
    SecureComponent.prototype.help = function () {
        console.log('help.....');
        //TODO
    };
    SecureComponent.prototype.add = function () {
        console.log(this.bdUserBundles.length);
        var bundle = new AppBundle_1.AppBundle();
        bundle.Title = "Title";
        this.bdUserBundles.push(bundle);
        console.log(this.bdUserBundles.length);
    };
    SecureComponent.prototype.newBundle = function () {
        dialogs.prompt({
            title: "New Bundle",
            message: "Code(eg. ABC20/1)",
            cancelButtonText: "Cancel",
            okButtonText: "Create",
            neutralButtonText: "Ok"
        }).then(function (r) {
            console.log("Dialog result: " + r.result + ", user: " + r.text);
        });
    };
    SecureComponent.prototype.editBundle = function (bundle) {
        utils.openUrl("https://app.bundledocs.com/api/v1/bundles/" + bundle.PartitionKey
            + "/" + bundle.RowKey + "/download?Bearer=" + localStorage.getItem('accessToken'));
    };
    SecureComponent.prototype.openGmail = function () {
        utils.openUrl("https://gmail.com/");
    };
    SecureComponent.prototype.openManual = function () {
        utils.openUrl("https://app.bundledocs.com/bundledocs-app-user-manual");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SecureComponent.prototype, "row", void 0);
    __decorate([
        core_1.ViewChild("txtSearchPhrase"),
        __metadata("design:type", core_1.ElementRef)
    ], SecureComponent.prototype, "txtSearchPhrase", void 0);
    __decorate([
        core_1.ViewChild("lstBundles"),
        __metadata("design:type", core_1.ElementRef)
    ], SecureComponent.prototype, "lstBundles", void 0);
    SecureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-secure",
            templateUrl: "secure.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_2.ActivatedRoute,
            core_1.ChangeDetectorRef,
            users_service_1.BundledocsUserService,
            core_1.NgZone,
            core_1.ChangeDetectorRef])
    ], SecureComponent);
    return SecureComponent;
}());
exports.SecureComponent = SecureComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0w7QUFDbEwsMkVBQXlFO0FBQ3pFLHNEQUErRDtBQUkvRCwwQ0FBaUQ7QUFPakQseUVBQWdGO0FBUWhGLG9DQUFzQztBQUN0QyxtQ0FBcUM7QUFHckMsbURBQWtEO0FBR2xELHdCQUErQixJQUFlO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN2QyxzQkFBc0I7QUFDMUIsQ0FBQztBQUhELHdDQUdDO0FBVUQ7SUFjSSx5QkFDWSxPQUF5QixFQUN6QixlQUErQixFQUMvQixLQUF3QixFQUN4QixjQUFxQyxFQUNyQyxPQUFlLEVBQ2YsbUJBQXNDO1FBTHRDLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7SUFDbEQsQ0FBQztJQVhELHNCQUFJLDBDQUFhO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFXTSxrQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSx1Q0FBYSxHQUFwQixVQUFxQixJQUFJO1FBQ3JCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRyxTQUFTLENBQUMs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U0FDbEQsQ0FBQztRQUVELGlCQUFVLEVBQUU7eUNBaUJZLHlCQUFnQjtZQUNSLHVCQUFjO1lBQ3hCLHdCQUFpQjtZQUNSLHFDQUFxQjtZQUM1QixhQUFNO1lBQ00sd0JBQWlCO09BcEJ6QyxlQUFlLENBcUgzQjtJQUFELHNCQUFDO0NBQUEsQUFySEQsSUFxSEM7QUFySFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBJbmplY3RhYmxlLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyB0ZXh0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCAqIGFzIGh0bWxWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2h0bWwtdmlld1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEh0bWxWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaHRtbC12aWV3XCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJ1bmRsZWRvY3NVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2J1bmRsZWRvY3MvdXNlcnMuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHsgU2V0dXBJdGVtVmlld0FyZ3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlc1wiO1xyXG5pbXBvcnQgKiBhcyBidXR0b25Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCAqIGFzIGJpbmRhYmxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvYmluZGFibGVcIjtcclxuaW1wb3J0ICogYXMgb2JzZXJ2YWJsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XHJcblxyXG5pbXBvcnQgeyBBcHBCdW5kbGUgfSBmcm9tIFwiLi4vLi4vbW9kZWwvQXBwQnVuZGxlXCI7XHJcbmltcG9ydCB7IEFwcFVzZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWwvQXBwVXNlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dTaWRlRHJhd2VyKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCJTaG93IFNpZGVEcmF3ZXIgdGFwcGVkLlwiKTtcclxuICAgIC8vIFNob3cgc2lkZWRyYXdlciAuLi5cclxufVxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJucy1zZWN1cmVcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInNlY3VyZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBASW5wdXQoKSByb3c7XHJcbiAgICBwdWJsaWMgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICAgIHB1YmxpYyBvbmNlTG9nZ2VkSW5TcmM6IHN0cmluZzsgLy9UT0RPXHJcbiAgICBwdWJsaWMgaHRtbEFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaHRtbFVzZXJzVG9rZW46IHN0cmluZztcclxuICAgIHB1YmxpYyBiZFVzZXI6IEFwcFVzZXI7XHJcbiAgICBwcml2YXRlIF9iZFVzZXJCdW5kbGVzOiBPYnNlcnZhYmxlQXJyYXk8QXBwQnVuZGxlPjtcclxuICAgIHB1YmxpYyBzZWFyY2hQaHJhc2U6IHN0cmluZzsgICAgXHJcblxyXG4gICAgZ2V0IGJkVXNlckJ1bmRsZXMoKTogT2JzZXJ2YWJsZUFycmF5PEFwcEJ1bmRsZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iZFVzZXJCdW5kbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgX2JkVXNlclNlcnZpY2U6IEJ1bmRsZWRvY3NVc2VyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBhbGVydChcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJ0eHRTZWFyY2hQaHJhc2VcIikgdHh0U2VhcmNoUGhyYXNlOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImxzdEJ1bmRsZXNcIikgbHN0QnVuZGxlczogRWxlbWVudFJlZjtcclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvYWQgd2FzIGNhbGxlZCcpO1xyXG5cclxuICAgICAgICAgICAgLy9sZWF2ZSB0aGUgYmVsb3dcclxuICAgICAgICAgICAgbGV0IHNlYXJjaFBocmFzZTogU2VhcmNoQmFyID0gdGhpcy50eHRTZWFyY2hQaHJhc2UubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgc2VhcmNoUGhyYXNlLnRleHQgPSBcIiBcIjtcclxuICAgICAgICAgICAgc2VhcmNoUGhyYXNlLnRleHQgPSBcIlwiO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnYWNjZXNzVG9rZW4zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0RGF0YUl0ZW1zKCk7XHJcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmdPbkluaXQgY2FsbGVkIGluIHNlY3VyZScpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpbml0RGF0YUl0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuX2JkVXNlckJ1bmRsZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PEFwcEJ1bmRsZT4oKTtcclxuICAgICAgICAvL3N1YnNjcmliZSB0byB0aGUgZGF0YVxyXG4gICAgICAgIHRoaXMuX2JkVXNlclNlcnZpY2UubWUoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJkVXNlciA9IHJlc3BvbnNlLmRhdGFbMF07XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbFVzZXJzVG9rZW4gPSByZXNwb25zZS5kYXRhWzBdLkVtYWlsO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPD0gdGhpcy5iZFVzZXIuQnJpZWZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEJyaWVmID0gdGhpcy5iZFVzZXIuQnJpZWZzW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZFVzZXJCdW5kbGVzLnB1c2goY3VycmVudEJyaWVmKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuYmRVc2VyQnVuZGxlcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vcHVzaCBlYWNoIGRhdGEgaXRlbSBvbnRvIHRoZSBvYnNlcmJ2YWJsZSBhcnJheVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZ09uRGVzdHJveSBjYWxsZWQgaW4gc2VjdXJlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIC8vIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKFwiYXV0aGVudGljYXRlZFwiKTtcclxuICAgICAgICAvLyB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzVG9rZW4nLCBudWxsKTtcclxuICAgICAgICBjb25zb2xlLmxvZygneW91IGNsaWNrZWQgbG9nb3V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVscCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGVscC4uLi4uJyk7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICB9XHJcbiAgICBhZGQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJkVXNlckJ1bmRsZXMubGVuZ3RoKTtcclxuICAgICAgICBsZXQgYnVuZGxlOiBBcHBCdW5kbGUgPSBuZXcgQXBwQnVuZGxlKCk7XHJcbiAgICAgICAgYnVuZGxlLlRpdGxlID0gXCJUaXRsZVwiOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5iZFVzZXJCdW5kbGVzLnB1c2goYnVuZGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJkVXNlckJ1bmRsZXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIG5ld0J1bmRsZSgpIHtcclxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5ldyBCdW5kbGVcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDb2RlKGVnLiBBQkMyMC8xKVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICB9KS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdXNlcjogXCIgKyByLnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRCdW5kbGUoYnVuZGxlOiBBcHBCdW5kbGUpIHtcclxuICAgICAgICB1dGlscy5vcGVuVXJsKFwiaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXBpL3YxL2J1bmRsZXMvXCIgKyBidW5kbGUuUGFydGl0aW9uS2V5XHJcbiAgICAgICAgICAgICsgXCIvXCIgKyBidW5kbGUuUm93S2V5ICsgXCIvZG93bmxvYWQ/QmVhcmVyPVwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykpO1xyXG4gICAgfVxyXG4gICAgb3BlbkdtYWlsKCkge1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL2dtYWlsLmNvbS9cIik7XHJcbiAgICB9XHJcbiAgICBvcGVuTWFudWFsKCkge1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9idW5kbGVkb2NzLWFwcC11c2VyLW1hbnVhbFwiKTtcclxuICAgIH1cclxufSJdfQ==