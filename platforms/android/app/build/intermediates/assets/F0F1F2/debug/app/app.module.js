"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/common/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var login_component_1 = require("./components/login/login.component");
var secure_component_1 = require("./components/secure/secure.component");
var token_interceptor_1 = require("./interceptors/token.interceptor");
var auth_service_1 = require("./services/auth.service");
var users_service_1 = require("./services/bundledocs/users.service");
var accessToken_helper_1 = require("./helpers/accessToken.helper");
var download_helper_1 = require("./helpers/download.helper");
var bundles_service_1 = require("./services/bundledocs/bundles.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                common_1.CommonModule,
                angular_1.NativeScriptUIListViewModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                http_1.HttpClientModule,
                forms_1.NativeScriptFormsModule,
                app_routing_1.AppRoutingModule
            ],
            exports: [
                nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                secure_component_1.SecureComponent
            ],
            providers: [
                http_1.HttpClientModule,
                auth_service_1.AuthService,
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_1.TokenInterceptor,
                    multi: true
                },
                users_service_1.BundledocsUserService,
                bundles_service_1.BundledocsBundlesService,
                accessToken_helper_1.AccessTokenHelper,
                download_helper_1.DownloadHelper
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFFOUUsNERBQWdGO0FBQ2hGLHNEQUE4RjtBQUM5RixvREFBcUU7QUFFckUsc0NBQWtGO0FBQ2xGLDBDQUErQztBQUUvQyw2Q0FBb0U7QUFDcEUsNkNBQXlEO0FBRXpELDZDQUFpRDtBQUVqRCxpREFBK0M7QUFDL0Msc0VBQW9FO0FBQ3BFLHlFQUF1RTtBQUV2RSxzRUFBb0U7QUFFcEUsd0RBQXNEO0FBRXRELHFFQUE0RTtBQUM1RSxtRUFBaUU7QUFDakUsNkRBQTJEO0FBQzNELHlFQUFpRjtBQTJDakY7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXpDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQkFBWTtnQkFDWixzQ0FBNEI7Z0JBQzVCLCtCQUF1QjtnQkFDdkIsaUNBQXdCO2dCQUV4Qix1QkFBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsOEJBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsaUNBQXdCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLGtDQUFlO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLHVCQUFnQjtnQkFDaEIsMEJBQVc7Z0JBQ1g7b0JBQ0ksT0FBTyxFQUFFLHdCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLG9DQUFnQjtvQkFDMUIsS0FBSyxFQUFFLElBQUk7aUJBQ2Q7Z0JBQ0QscUNBQXFCO2dCQUNyQiwwQ0FBd0I7Z0JBQ3hCLHNDQUFpQjtnQkFDakIsZ0NBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcblxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VjdXJlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN1cmUvc2VjdXJlLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgVG9rZW5JbnRlcmNlcHRvciB9IGZyb20gJy4vaW50ZXJjZXB0b3JzL3Rva2VuLmludGVyY2VwdG9yJztcclxuXHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBCdW5kbGVkb2NzVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9idW5kbGVkb2NzL3VzZXJzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5IZWxwZXIgfSBmcm9tIFwiLi9oZWxwZXJzL2FjY2Vzc1Rva2VuLmhlbHBlclwiO1xyXG5pbXBvcnQgeyBEb3dubG9hZEhlbHBlciB9IGZyb20gXCIuL2hlbHBlcnMvZG93bmxvYWQuaGVscGVyXCI7XHJcbmltcG9ydCB7IEJ1bmRsZWRvY3NCdW5kbGVzU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2J1bmRsZWRvY3MvYnVuZGxlcy5zZXJ2aWNlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcblxyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIFNlY3VyZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgQXV0aFNlcnZpY2UsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgICAgICAgdXNlQ2xhc3M6IFRva2VuSW50ZXJjZXB0b3IsXHJcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBCdW5kbGVkb2NzVXNlclNlcnZpY2UsXHJcbiAgICAgICAgQnVuZGxlZG9jc0J1bmRsZXNTZXJ2aWNlLFxyXG4gICAgICAgIEFjY2Vzc1Rva2VuSGVscGVyLFxyXG4gICAgICAgIERvd25sb2FkSGVscGVyXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF0gICBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXX0=