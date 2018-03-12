"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        //subscribe to the data
        this._bdUserService.me().subscribe(function (data) {
            _this.bdUser = data.data[0];
            _this.bdUserBundles = _this.bdUser.Briefs;
            _this.htmlUsersToken = data.data[0].Email;
        }, function (err) { return console.log(err); });
        //push each data item onto the obserbvable array
        //this._bdUserService.push(this.bdUserBundles);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0w7QUFFbEwsc0RBQStEO0FBSS9ELDBDQUFpRDtBQU9qRCw0RkFBMkY7QUFRM0Ysb0NBQXNDO0FBQ3RDLG1DQUFxQztBQUdyQyx3QkFBK0IsSUFBZTtJQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDdkMsc0JBQXNCO0FBQzFCLENBQUM7QUFIRCx3Q0FHQztBQVVEO0lBV0kseUJBQ1ksT0FBeUIsRUFDekIsZUFBK0IsRUFDL0IsS0FBd0IsRUFDeEIsY0FBcUMsRUFDckMsT0FBZSxFQUNmLG1CQUFzQztRQUx0QyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6QixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO0lBQ2xELENBQUM7SUFFTSxrQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSx1Q0FBYSxHQUFwQixVQUFxQixJQUFJO1FBQ3JCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQU1ELHlDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFF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LGlCQUFpQixDQUFDO2tDQUFrQixpQkFBVTs0REFBQztJQUNqQztRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQztrQ0FBYSxpQkFBVTt1REFBQztJQS9CdkMsZUFBZTtRQVQzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDbEQsQ0FBQztRQUVELGlCQUFVLEVBQUU7eUNBY1kseUJBQWdCO1lBQ1IsdUJBQWM7WUFDeEIsd0JBQWlCO1lBQ1IsNkNBQXFCO1lBQzVCLGFBQU07WUFDTSx3QkFBaUI7T0FqQnpDLGVBQWUsQ0F3RzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhHRCxJQXdHQztBQXhHWSwwQ0FBZTtBQTBHNUI7SUFDSSxnQkFBbUIsRUFBVSxFQUFTLElBQVksRUFBUyxHQUFXO1FBQW5ELE9BQUUsR0FBRixFQUFFLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBUTtJQUV0RSxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBQ0Q7SUFFSTtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFFYixDQUFBO0lBQ0wsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgSW5qZWN0YWJsZSwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgdGV4dFZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBodG1sVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9odG1sLXZpZXdcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdG1sVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2h0bWwtdmlld1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBCdW5kbGVkb2NzVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9CdW5kbGVkb2NzQXBpL0J1bmRsZWRvY3NVc2VyU2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHsgU2V0dXBJdGVtVmlld0FyZ3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlc1wiO1xyXG5pbXBvcnQgKiBhcyBidXR0b25Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCAqIGFzIGJpbmRhYmxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvYmluZGFibGVcIjtcclxuaW1wb3J0ICogYXMgb2JzZXJ2YWJsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NpZGVEcmF3ZXIoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNob3cgU2lkZURyYXdlciB0YXBwZWQuXCIpO1xyXG4gICAgLy8gU2hvdyBzaWRlZHJhd2VyIC4uLlxyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLXNlY3VyZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwic2VjdXJlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIHJvdztcclxuICAgIHB1YmxpYyBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gICAgcHVibGljIG9uY2VMb2dnZWRJblNyYzogc3RyaW5nOyAvL1RPRE9cclxuICAgIHB1YmxpYyBodG1sQWNjZXNzVG9rZW46IHN0cmluZztcclxuICAgIHB1YmxpYyBodG1sVXNlcnNUb2tlbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGJkVXNlcjogQXBwVXNlcjtcclxuICAgIHB1YmxpYyBiZFVzZXJCdW5kbGVzOkFwcEJ1bmRsZVtdO1xyXG4gICAgcHVibGljIHNlYXJjaFBocmFzZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG15TGlzdDogTXlMaXN0O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgX2JkVXNlclNlcnZpY2U6IEJ1bmRsZWRvY3NVc2VyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBhbGVydChcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJ0eHRTZWFyY2hQaHJhc2VcIikgdHh0U2VhcmNoUGhyYXNlOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImxzdEJ1bmRsZXNcIikgbHN0QnVuZGxlczogRWxlbWVudFJlZjtcclxuXHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkIHdhcyBjYWxsZWQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vbGVhdmUgdGhlIGJlbG93XHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hQaHJhc2U6IFNlYXJjaEJhciA9IHRoaXMudHh0U2VhcmNoUGhyYXNlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHNlYXJjaFBocmFzZS50ZXh0ID0gXCIgXCI7XHJcbiAgICAgICAgICAgIHNlYXJjaFBocmFzZS50ZXh0ID0gXCJcIjtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FjY2Vzc1Rva2VuMycpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdERhdGFJdGVtcygpO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25nT25Jbml0IGNhbGxlZCBpbiBzZWN1cmUnKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaW5pdERhdGFJdGVtcygpIHtcclxuICAgICAgICBcclxuICAgICAgICAvL3N1YnNjcmliZSB0byB0aGUgZGF0YVxyXG4gICAgICAgIHRoaXMuX2JkVXNlclNlcnZpY2UubWUoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYmRVc2VyID0gZGF0YS5kYXRhWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmJkVXNlckJ1bmRsZXMgPSB0aGlzLmJkVXNlci5CcmllZnM7XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbFVzZXJzVG9rZW4gPSBkYXRhLmRhdGFbMF0uRW1haWw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vcHVzaCBlYWNoIGRhdGEgaXRlbSBvbnRvIHRoZSBvYnNlcmJ2YWJsZSBhcnJheVxyXG4gICAgICAgIC8vdGhpcy5fYmRVc2VyU2VydmljZS5wdXNoKHRoaXMuYmRVc2VyQnVuZGxlcyk7XHJcbiAgICB9XHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmdPbkRlc3Ryb3kgY2FsbGVkIGluIHNlY3VyZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICAvLyBBcHBsaWNhdGlvblNldHRpbmdzLnJlbW92ZShcImF1dGhlbnRpY2F0ZWRcIik7XHJcbiAgICAgICAgLy8gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc1Rva2VuJywgbnVsbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3lvdSBjbGlja2VkIGxvZ291dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhlbHAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbHAuLi4uLicpO1xyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0J1bmRsZSgpIHtcclxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5ldyBCdW5kbGVcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDb2RlKGVnLiBBQkMyMC8xKVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICB9KS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdXNlcjogXCIgKyByLnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRCdW5kbGUoYnVuZGxlOiBBcHBCdW5kbGUpIHtcclxuICAgICAgICB1dGlscy5vcGVuVXJsKFwiaHR0cHM6Ly9hcHAuYnVuZGxlZG9jcy5jb20vYXBpL3YxL2J1bmRsZXMvXCIgKyBidW5kbGUuUGFydGl0aW9uS2V5XHJcbiAgICAgICAgICAgICsgXCIvXCIgKyBidW5kbGUuUm93S2V5ICsgXCIvZG93bmxvYWQ/QmVhcmVyPVwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJykpO1xyXG4gICAgfVxyXG4gICAgb3BlbkdtYWlsKCkge1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL2dtYWlsLmNvbS9cIik7XHJcbiAgICB9XHJcbiAgICBvcGVuTWFudWFsKCkge1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL2FwcC5idW5kbGVkb2NzLmNvbS9idW5kbGVkb2NzLWFwcC11c2VyLW1hbnVhbFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQnVuZGxlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogbnVtYmVyLCBwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgYWdlOiBudW1iZXIpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE15TGlzdCB7XHJcbiAgICBidW5kbGU6IEJ1bmRsZVtdO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5idW5kbGUgPSBbXHJcblxyXG4gICAgICAgIF1cclxuICAgIH1cclxufSJdfQ==