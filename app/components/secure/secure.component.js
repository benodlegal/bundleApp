"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var BundledocsUserService_1 = require("../../services/BundledocsApi/BundledocsUserService");
var dialogs = require("ui/dialogs");
function showSideDrawer(args) {
    console.log("Show SideDrawer tapped.");
    // Show sidedrawer ...
}
exports.showSideDrawer = showSideDrawer;
var SecureComponent = (function () {
    function SecureComponent(_router, _activatedRoute, cdRef, _bdUserService) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.cdRef = cdRef;
        this._bdUserService = _bdUserService;
    }
    SecureComponent.prototype.load = function (args) {
        var _this = this;
        this._bdUserService.me().subscribe(function (data) {
            _this.bdUser = data.data[0];
            _this.bdUserBundles = _this.bdUser.Briefs;
            _this.htmlUsersToken = data.data[0].Email;
        }, function (err) { return console.log(err); });
    };
    SecureComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        alert("You are searching for " + searchBar.text);
    };
    SecureComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    };
    SecureComponent.prototype.ngAfterViewInit = function () {
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SecureComponent.prototype, "row", void 0);
    SecureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-secure",
            templateUrl: "secure.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions, router_2.ActivatedRoute, core_1.ChangeDetectorRef, BundledocsUserService_1.BundledocsUserService])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlY3VyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEs7QUFDMUssc0RBQStEO0FBSS9ELDBDQUFpRDtBQU9qRCw0RkFBMkY7QUFRM0Ysb0NBQXNDO0FBRXRDLHdCQUErQixJQUFlO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN2QyxzQkFBc0I7QUFDMUIsQ0FBQztBQUhELHdDQUdDO0FBVUQ7SUFZSSx5QkFBMkIsT0FBeUIsRUFBVSxlQUErQixFQUFVLEtBQXdCLEVBQVUsY0FBcUM7UUFBbkosWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtJQUU5SyxDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLElBQUk7UUFBVCxpQkFTQztRQVJHLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUMxQixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN4QyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzdDLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQzFCLENBQUM7SUFDVixDQUFDO0lBQ00sa0NBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENB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QUM7Z0JBQ0wsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsR0FBRyxFQUFFLEVBQUU7YUFDVjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxhQUFhO2dCQUNuQixHQUFHLEVBQUUsRUFBRTthQUNWO1lBRUQ7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEdBQUcsRUFBRSxFQUFFO2FBQ1Y7WUFFRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsR0FBRyxFQUFFLEVBQUU7YUFDVjtTQUNKLENBQUE7SUFDTCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6RFksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgSW5qZWN0YWJsZSwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBXZWJWaWV3LCBMb2FkRXZlbnREYXRhIH0gZnJvbSBcInVpL3dlYi12aWV3XCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyB0ZXh0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCAqIGFzIGh0bWxWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2h0bWwtdmlld1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEh0bWxWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaHRtbC12aWV3XCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEJ1bmRsZWRvY3NVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0J1bmRsZWRvY3NBcGkvQnVuZGxlZG9jc1VzZXJTZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xyXG5pbXBvcnQgeyBTZXR1cEl0ZW1WaWV3QXJncyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzXCI7XHJcbmltcG9ydCAqIGFzIGJ1dHRvbk1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcclxuaW1wb3J0ICogYXMgYmluZGFibGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS9iaW5kYWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBvYnNlcnZhYmxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1NpZGVEcmF3ZXIoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNob3cgU2lkZURyYXdlciB0YXBwZWQuXCIpO1xyXG4gICAgLy8gU2hvdyBzaWRlZHJhd2VyIC4uLlxyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLXNlY3VyZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwic2VjdXJlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlY3VyZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIEBJbnB1dCgpIHJvdztcclxuXHJcbiAgICBwdWJsaWMgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICAgIHB1YmxpYyBvbmNlTG9nZ2VkSW5TcmM6IHN0cmluZzsgLy9UT0RPXHJcbiAgICBwdWJsaWMgaHRtbEFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaHRtbFVzZXJzVG9rZW46IHN0cmluZztcclxuICAgIHB1YmxpYyBiZFVzZXI6IEFwcFVzZXI7XHJcbiAgICBwdWJsaWMgYmRVc2VyQnVuZGxlczogQXBwQnVuZGxlW107XHJcbiAgICBwdWJsaWMgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbXlMaXN0OiBNeUxpc3Q7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBfYmRVc2VyU2VydmljZTogQnVuZGxlZG9jc1VzZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoYXJncykge1xyXG4gICAgICAgIHRoaXMuX2JkVXNlclNlcnZpY2UubWUoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHsgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJkVXNlciA9IGRhdGEuZGF0YVswXTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmRVc2VyQnVuZGxlcyA9IHRoaXMuYmRVc2VyLkJyaWVmcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWxVc2Vyc1Rva2VuID0gZGF0YS5kYXRhWzBdLkVtYWlsO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBhbGVydChcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWNjZXNzVG9rZW4zJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25nT25Jbml0IGNhbGxlZCBpbiBzZWN1cmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmdPbkRlc3Ryb3kgY2FsbGVkIGluIHNlY3VyZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICAvLyBBcHBsaWNhdGlvblNldHRpbmdzLnJlbW92ZShcImF1dGhlbnRpY2F0ZWRcIik7XHJcbiAgICAgICAgLy8gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc1Rva2VuJywgbnVsbCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3lvdSBjbGlja2VkIGxvZ291dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGhlbHAoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnaGVscC4uLi4uJyk7XHJcbiAgICAgICAvL1RPRE9cclxuICAgIH1cclxuICAgIG5ld0J1bmRsZSgpIHtcclxuICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5ldyBCdW5kbGVcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJDb2RlKGVnLiBBQkMyMC8xKVwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgICB9KS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdXNlcjogXCIgKyByLnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmNsYXNzIEJ1bmRsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIGFnZTogbnVtYmVyKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBNeUxpc3Qge1xyXG4gICAgYnVuZGxlOiBCdW5kbGVbXTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYnVuZGxlID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNaWNoYWVsIFNtaXRoJyxcclxuICAgICAgICAgICAgICAgIGFnZTogMjVcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhdWwgTWNDYXJ0aHknLFxyXG4gICAgICAgICAgICAgICAgYWdlOiAzNlxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWFyeSBPIERyaXNjb2xsJyxcclxuICAgICAgICAgICAgICAgIGFnZTogMTlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSm9obiBEb2UnLFxyXG4gICAgICAgICAgICAgICAgYWdlOiA1NlxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUm9zcyBQZXR0ZXInLFxyXG4gICAgICAgICAgICAgICAgYWdlOiA0M1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnQmFycnkgTyBDb25ub3InLFxyXG4gICAgICAgICAgICAgICAgYWdlOiAxOVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogNixcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdKdWxpZSBCdXJrZScsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IDYwXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogNyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdNYXJrIFN0dWQnLFxyXG4gICAgICAgICAgICAgICAgYWdlOiAyNlxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSmltIEJ1cm5lcycsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IDM5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59Il19