"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var BundledocsUserService_1 = require("../../services/BundledocsApi/BundledocsUserService");
var dialogs = require("ui/dialogs");
var utils = require("utils/utils");
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
        var bundle = new AppBundle();
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
            BundledocsUserService_1.BundledocsUserService,
            core_1.NgZone,
            core_1.ChangeDetectorRef])
    ], SecureComponent);
    return SecureComponent;
}());
exports.SecureComponent = SecureComponent;
var Bundle = (function () {
    function Bundle(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return Bundle;
}());
var MyList = (function () {
    function MyList() {
        this.bundle = [];
    }
    return MyList;
}());
exports.MyList = MyList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0w7QUFDbEwsMkVBQXlFO0FBQ3pFLHNEQUErRDtBQUkvRCwwQ0FBaUQ7QUFPakQsNEZBQTJGO0FBUTNGLG9DQUFzQztBQUN0QyxtQ0FBcUM7QUFHckMsd0JBQStCLElBQWU7SUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3ZDLHNCQUFzQjtBQUMxQixDQUFDO0FBSEQsd0NBR0M7QUFVRDtJQWVJLHlCQUNZLE9BQXlCLEVBQ3pCLGVBQStCLEVBQy9CLEtBQXdCLEVBQ3hCLGNBQXFDLEVBQ3JDLE9BQWUsRUFDZixtQkFBc0M7UUFMdEMsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtJQUNsRCxDQUFDO0lBWEQsc0JBQUksMENBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQVdNLGtDQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLHVDQUFhLEdBQXBCLFVBQXFCLElBQUk7UUFDckIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FB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RCxpQkFBVSxFQUFFO3lDQWtCWSx5QkFBZ0I7WUFDUix1QkFBYztZQUN4Qix3QkFBaUI7WUFDUiw2Q0FBcUI7WUFDNUIsYUFBTTtZQUNNLHdCQUFpQjtPQXJCekMsZUFBZSxDQXNIM0I7SUFBRCxzQkFBQztDQUFBLEFBdEhELElBc0hDO0FBdEhZLDBDQUFlO0FBd0g1QjtJQUNJLGdCQUFtQixFQUFVLEVBQVMsSUFBWSxFQUFTLEdBQVc7UUFBbkQsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFRO0lBRXRFLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFDRDtJQUVJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUViLENBQUE7SUFDTCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBJbmplY3RhYmxlLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyB0ZXh0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCAqIGFzIGh0bWxWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2h0bWwtdmlld1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEh0bWxWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaHRtbC12aWV3XCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJ1bmRsZWRvY3NVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0J1bmRsZWRvY3NBcGkvQnVuZGxlZG9jc1VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xyXG5pbXBvcnQgeyBTZXR1cEl0ZW1WaWV3QXJncyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzXCI7XHJcbmltcG9ydCAqIGFzIGJ1dHRvbk1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcclxuaW1wb3J0ICogYXMgYmluZGFibGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS9iaW5kYWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBvYnNlcnZhYmxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93U2lkZURyYXdlcihhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2hvdyBTaWRlRHJhd2VyIHRhcHBlZC5cIik7XHJcbiAgICAvLyBTaG93IHNpZGVkcmF3ZXIgLi4uXHJcbn1cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtc2VjdXJlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJzZWN1cmUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdXJlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgQElucHV0KCkgcm93O1xyXG4gICAgcHVibGljIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgb25jZUxvZ2dlZEluU3JjOiBzdHJpbmc7IC8vVE9ET1xyXG4gICAgcHVibGljIGh0bWxBY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGh0bWxVc2Vyc1Rva2VuOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYmRVc2VyOiBBcHBVc2VyO1xyXG4gICAgcHJpdmF0ZSBfYmRVc2VyQnVuZGxlczogT2JzZXJ2YWJsZUFycmF5PEFwcEJ1bmRsZT47XHJcbiAgICBwdWJsaWMgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbXlMaXN0OiBNeUxpc3Q7XHJcblxyXG4gICAgZ2V0IGJkVXNlckJ1bmRsZXMoKTogT2JzZXJ2YWJsZUFycmF5PEFwcEJ1bmRsZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iZFVzZXJCdW5kbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgX2JkVXNlclNlcnZpY2U6IEJ1bmRsZWRvY3NVc2VyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBhbGVydChcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJ0eHRTZWFyY2hQaHJhc2VcIikgdHh0U2VhcmNoUGhyYXNlOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImxzdEJ1bmRsZXNcIikgbHN0QnVuZGxlczogRWxlbWVudFJlZjtcclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvYWQgd2FzIGNhbGxlZCcpO1xyXG5cclxuICAgICAgICAgICAgLy9sZWF2ZSB0aGUgYmVsb3dcclxuICAgICAgICAgICAgbGV0IHNlYXJjaFBocmFzZTogU2VhcmNoQmFyID0gdGhpcy50eHRTZWFyY2hQaHJhc2UubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgc2VhcmNoUGhyYXNlLnRleHQgPSBcIiBcIjtcclxuICAgICAgICAgICAgc2VhcmNoUGhyYXNlLnRleHQgPSBcIlwiO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnYWNjZXNzVG9rZW4zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0RGF0YUl0ZW1zKCk7XHJcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmdPbkluaXQgY2FsbGVkIGluIHNlY3VyZScpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpbml0RGF0YUl0ZW1zKCkge1xyXG4gICAgICAgIHRoaXMuX2JkVXNlckJ1bmRsZXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PEFwcEJ1bmRsZT4oKTtcclxuICAgICAgICAvL3N1YnNjcmliZSB0byB0aGUgZGF0YVxyXG4gICAgICAgIHRoaXMuX2JkVXNlclNlcnZpY2UubWUoKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJkVXNlciA9IHJlc3BvbnNlLmRhdGFbMF07XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbFVzZXJzVG9rZW4gPSByZXNwb25zZS5kYXRhWzBdLkVtYWlsO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPD0gdGhpcy5iZFVzZXIuQnJpZWZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEJyaWVmID0gdGhpcy5iZFVzZXIuQnJpZWZzW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZFVzZXJCdW5kbGVzLnB1c2goY3VycmVudEJyaWVmKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuYmRVc2VyQnVuZGxlcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vcHVzaCBlYWNoIGRhdGEgaXRlbSBvbnRvIHRoZSBvYnNlcmJ2YWJsZSBhcnJheVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZ09uRGVzdHJveSBjYWxsZWQgaW4gc2VjdXJlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIC8vIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKFwiYXV0aGVudGljYXRlZFwiKTtcclxuICAgICAgICAvLyB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzVG9rZW4nLCBudWxsKTtcclxuICAgICAgICBjb25zb2xlLmxvZygneW91IGNsaWNrZWQgbG9nb3V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVscCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGVscC4uLi4uJyk7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICB9XHJcbiAgICBhZGQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJkVXNlckJ1bmRsZXMubGVuZ3RoKTtcclxuICAgICAgICBsZXQgYnVuZGxlOiBBcHBCdW5kbGUgPSBuZXcgQXBwQnVuZGxlKCk7XHJcbiAgICAgICAgYnVuZGxlLlRpdGxlID0gXCJUaXRsZVwiOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5iZFVzZXJCdW5kbGVzLnB1c2goYnVuZGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJkVXNlckJ1bmRsZXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIG5ld0J1bmRsZSgpIHtcclxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5ldyBCdW5kbGVcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDb2RlKGVnLiBBQkMyMC8xKVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICB9KS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdXNlcjogXCIgKyByLnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRCdW5kbGUoYnVuZGxlOiBBcHBCdW5kbGUpIHtcclxuICAgICAgICB1dGlscy5vcGVuVXJsKFwiaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXBpL3YxL2J1bmRsZXMvXCIgKyBidW5kbGUuUGFydGl0aW9uS2V5XHJcbiAgICAgICAgICAgICsgXCIvXCIgKyBidW5kbGUuUm93S2V5ICsgXCIvZG93bmxvYWQ/QmVhcmVyPVwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykpO1xyXG4gICAgfVxyXG4gICAgb3BlbkdtYWlsKCkge1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL2dtYWlsLmNvbS9cIik7XHJcbiAgICB9XHJcbiAgICBvcGVuTWFudWFsKCkge1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9idW5kbGVkb2NzLWFwcC11c2VyLW1hbnVhbFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQnVuZGxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogbnVtYmVyLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYWdlOiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE15TGlzdCB7XHJcbiAgICBidW5kbGU6IEJ1bmRsZVtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5idW5kbGUgPSBbXHJcblxyXG4gICAgICAgIF1cclxuICAgIH1cclxufSJdfQ==