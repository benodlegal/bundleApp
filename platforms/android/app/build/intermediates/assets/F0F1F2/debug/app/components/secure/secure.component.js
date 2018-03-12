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
    function SecureComponent(_router, _activatedRoute, cdRef, _bdUserService, _ngZone) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.cdRef = cdRef;
        this._bdUserService = _bdUserService;
        this._ngZone = _ngZone;
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
        var _this = this;
        try {
            console.log("NgZone.isInAngularZone");
            console.log(core_1.NgZone.isInAngularZone);
            this._ngZone.run(function () {
                return _this._bdUserService.me().subscribe(function (data) {
                    _this.bdUser = data.data[0];
                    _this.bdUserBundles = _this.bdUser.Briefs;
                    _this.htmlUsersToken = data.data[0].Email;
                }, function (err) { return console.log(err); });
            });
            console.log('load was called');
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
        console.log('ngOnInit called in secure');
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
        __metadata("design:paramtypes", [router_1.RouterExtensions, router_2.ActivatedRoute, core_1.ChangeDetectorRef, BundledocsUserService_1.BundledocsUserService, core_1.NgZone])
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
        this.bundle = [
            {
                id: 0,
                name: 'Michael Smith',
                age: 25
            },
            {
                id: 1,
                name: 'Paul McCarthy',
                age: 36
            },
            {
                id: 2,
                name: 'Mary O Driscoll',
                age: 19
            },
            {
                id: 3,
                name: 'John Doe',
                age: 56
            },
            {
                id: 4,
                name: 'Ross Petter',
                age: 43
            },
            {
                id: 5,
                name: 'Barry O Connor',
                age: 19
            },
            {
                id: 6,
                name: 'Julie Burke',
                age: 60
            },
            {
                id: 7,
                name: 'Mark Stud',
                age: 26
            },
            {
                id: 8,
                name: 'Jim Burnes',
                age: 39
            },
        ];
    }
    return MyList;
}());
exports.MyList = MyList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0w7QUFDbEwsc0RBQStEO0FBSS9ELDBDQUFpRDtBQU9qRCw0RkFBMkY7QUFRM0Ysb0NBQXNDO0FBQ3RDLG1DQUFxQztBQUdyQyx3QkFBK0IsSUFBZTtJQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDdkMsc0JBQXNCO0FBQzFCLENBQUM7QUFIRCx3Q0FHQztBQVVEO0lBV0kseUJBQTJCLE9BQXlCLEVBQVUsZUFBK0IsRUFBVSxLQUF3QixFQUFVLGNBQXFDLEVBQVUsT0FBZTtRQUE1SyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUV2TSxDQUFDO0lBRU0sa0NBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sdUNBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFNRCx5Q0FBZSxHQUFmO1FBQUEsaUJBc0JDO1FBckJHLElBQUksQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQU0sQ0FBQyxlQUFl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QUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixHQUFHLEVBQUUsRUFBRTthQUNWO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEdBQUcsRUFBRSxFQUFFO2FBQ1Y7WUFFRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsV0FBVztnQkFDakIsR0FBRyxFQUFFLEVBQUU7YUFDVjtZQUVEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxZQUFZO2dCQUNsQixHQUFHLEVBQUUsRUFBRTthQUNWO1NBQ0osQ0FBQTtJQUNMLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQztBQXpEWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksIEluamVjdGFibGUsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgV2ViVmlldywgTG9hZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS93ZWItdmlld1wiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgdGV4dFZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgKiBhcyBodG1sVmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9odG1sLXZpZXdcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBIdG1sVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2h0bWwtdmlld1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBCdW5kbGVkb2NzVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9CdW5kbGVkb2NzQXBpL0J1bmRsZWRvY3NVc2VyU2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHsgU2V0dXBJdGVtVmlld0FyZ3MgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlc1wiO1xyXG5pbXBvcnQgKiBhcyBidXR0b25Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCAqIGFzIGJpbmRhYmxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvYmluZGFibGVcIjtcclxuaW1wb3J0ICogYXMgb2JzZXJ2YWJsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NpZGVEcmF3ZXIoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNob3cgU2lkZURyYXdlciB0YXBwZWQuXCIpO1xyXG4gICAgLy8gU2hvdyBzaWRlZHJhd2VyIC4uLlxyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLXNlY3VyZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwic2VjdXJlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIHJvdztcclxuICAgIHB1YmxpYyBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gICAgcHVibGljIG9uY2VMb2dnZWRJblNyYzogc3RyaW5nOyAvL1RPRE9cclxuICAgIHB1YmxpYyBodG1sQWNjZXNzVG9rZW46IHN0cmluZztcclxuICAgIHB1YmxpYyBodG1sVXNlcnNUb2tlbjogc3RyaW5nO1xyXG4gICAgcHVibGljIGJkVXNlcjogQXBwVXNlcjtcclxuICAgIHB1YmxpYyBiZFVzZXJCdW5kbGVzOiBBcHBCdW5kbGVbXTtcclxuICAgIHB1YmxpYyBzZWFyY2hQaHJhc2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBteUxpc3Q6IE15TGlzdDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIF9iZFVzZXJTZXJ2aWNlOiBCdW5kbGVkb2NzVXNlclNlcnZpY2UsIHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBhbGVydChcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoXCJ0eHRTZWFyY2hQaHJhc2VcIikgdHh0U2VhcmNoUGhyYXNlOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImxzdEJ1bmRsZXNcIikgbHN0QnVuZGxlczogRWxlbWVudFJlZjtcclxuIFxyXG4gIFxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmdab25lLmlzSW5Bbmd1bGFyWm9uZVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coTmdab25lLmlzSW5Bbmd1bGFyWm9uZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5fbmdab25lLnJ1bigoKT0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iZFVzZXJTZXJ2aWNlLm1lKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmRVc2VyID0gZGF0YS5kYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmRVc2VyQnVuZGxlcyA9IHRoaXMuYmRVc2VyLkJyaWVmcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxVc2Vyc1Rva2VuID0gZGF0YS5kYXRhWzBdLkVtYWlsO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZCB3YXMgY2FsbGVkJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VhcmNoUGhyYXNlOiBTZWFyY2hCYXIgPSB0aGlzLnR4dFNlYXJjaFBocmFzZS5uYXRpdmVFbGVtZW50OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZWFyY2hQaHJhc2UudGV4dCA9IFwiIFwiO1xyXG4gICAgICAgICAgICBzZWFyY2hQaHJhc2UudGV4dCA9IFwiXCI7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhY2Nlc3NUb2tlbjMnKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmdPbkluaXQgY2FsbGVkIGluIHNlY3VyZScpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZ09uRGVzdHJveSBjYWxsZWQgaW4gc2VjdXJlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIC8vIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKFwiYXV0aGVudGljYXRlZFwiKTtcclxuICAgICAgICAvLyB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzVG9rZW4nLCBudWxsKTtcclxuICAgICAgICBjb25zb2xlLmxvZygneW91IGNsaWNrZWQgbG9nb3V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVscCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGVscC4uLi4uJyk7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICB9XHJcblxyXG4gICAgbmV3QnVuZGxlKCkge1xyXG4gICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTmV3IEJ1bmRsZVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkNvZGUoZWcuIEFCQzIwLzEpXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJDcmVhdGVcIixcclxuICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IFwiT2tcIlxyXG4gICAgICAgIH0pLnRoZW4ociA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByLnJlc3VsdCArIFwiLCB1c2VyOiBcIiArIHIudGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEJ1bmRsZShidW5kbGU6QXBwQnVuZGxlKSB7XHJcbiAgICAgICAgdXRpbHMub3BlblVybChcImh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2FwaS92MS9idW5kbGVzL1wiICsgYnVuZGxlLlBhcnRpdGlvbktleVxyXG4gICAgICAgICtcIi9cIiArIGJ1bmRsZS5Sb3dLZXkgK1wiL2Rvd25sb2FkP0JlYXJlcj1cIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpKTtcclxuICAgIH1cclxuICAgIG9wZW5HbWFpbCgpe1xyXG4gICAgICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL2dtYWlsLmNvbS9cIik7XHJcbiAgICB9XHJcbiAgICBvcGVuTWFudWFsKCl7XHJcbiAgICAgICAgdXRpbHMub3BlblVybChcImh0dHBzOi8vYXBwLmJ1bmRsZWRvY3MuY29tL2J1bmRsZWRvY3MtYXBwLXVzZXItbWFudWFsXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCdW5kbGUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGlkOiBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBhZ2U6IG51bWJlcikge1xyXG5cclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTXlMaXN0IHtcclxuICAgIGJ1bmRsZTogQnVuZGxlW107XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJ1bmRsZSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWljaGFlbCBTbWl0aCcsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IDI1XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQYXVsIE1jQ2FydGh5JyxcclxuICAgICAgICAgICAgICAgIGFnZTogMzZcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ01hcnkgTyBEcmlzY29sbCcsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IDE5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0pvaG4gRG9lJyxcclxuICAgICAgICAgICAgICAgIGFnZTogNTZcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1Jvc3MgUGV0dGVyJyxcclxuICAgICAgICAgICAgICAgIGFnZTogNDNcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0JhcnJ5IE8gQ29ubm9yJyxcclxuICAgICAgICAgICAgICAgIGFnZTogMTlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSnVsaWUgQnVya2UnLFxyXG4gICAgICAgICAgICAgICAgYWdlOiA2MFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWFyayBTdHVkJyxcclxuICAgICAgICAgICAgICAgIGFnZTogMjZcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiA4LFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0ppbSBCdXJuZXMnLFxyXG4gICAgICAgICAgICAgICAgYWdlOiAzOVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxufSJdfQ==