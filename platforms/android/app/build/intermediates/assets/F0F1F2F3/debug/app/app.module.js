"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-sidedrawer/angular");
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
var drawer_component_1 = require("./components/sideDrawer/drawer.component");
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
                angular_2.NativeScriptUISideDrawerModule,
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
                secure_component_1.SecureComponent,
                drawer_component_1.SideDrawerComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFFOUUsNERBQWdGO0FBQ2hGLDhEQUFvRjtBQUVwRixzREFBOEY7QUFDOUYsb0RBQXFFO0FBRXJFLHNDQUFrRjtBQUNsRiwwQ0FBK0M7QUFFL0MsNkNBQW9FO0FBQ3BFLDZDQUF5RDtBQUV6RCw2Q0FBaUQ7QUFFakQsaURBQStDO0FBQy9DLHNFQUFvRTtBQUNwRSx5RUFBdUU7QUFDdkUsNkVBQTRFO0FBRTVFLHNFQUFvRTtBQUVwRSx3REFBc0Q7QUFFdEQscUVBQTRFO0FBQzVFLG1FQUFpRTtBQUNqRSw2REFBMkQ7QUFDM0QseUVBQWlGO0FBNkNqRjtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBM0NyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFCQUFZO2dCQUNaLHNDQUE0QjtnQkFDNUIsd0NBQThCO2dCQUM5QiwrQkFBdUI7Z0JBQ3ZCLGlDQUF3QjtnQkFFeEIsdUJBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLDhCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGlDQUF3QjthQUMzQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCxrQ0FBZTtnQkFDZixzQ0FBbUI7YUFDdEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsdUJBQWdCO2dCQUNoQiwwQkFBVztnQkFDWDtvQkFDSSxPQUFPLEVBQUUsd0JBQWlCO29CQUMxQixRQUFRLEVBQUUsb0NBQWdCO29CQUMxQixLQUFLLEVBQUUsSUFBSTtpQkFDZDtnQkFDRCxxQ0FBcUI7Z0JBQ3JCLDBDQUF3QjtnQkFDeEIsc0NBQWlCO2dCQUNqQixnQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2VjdXJlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN1cmUvc2VjdXJlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZGVEcmF3ZXJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZURyYXdlci9kcmF3ZXIuY29tcG9uZW50XCJcclxuXHJcbmltcG9ydCB7IFRva2VuSW50ZXJjZXB0b3IgfSBmcm9tICcuL2ludGVyY2VwdG9ycy90b2tlbi5pbnRlcmNlcHRvcic7XHJcblxyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQnVuZGxlZG9jc1VzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYnVuZGxlZG9jcy91c2Vycy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuSGVscGVyIH0gZnJvbSBcIi4vaGVscGVycy9hY2Nlc3NUb2tlbi5oZWxwZXJcIjtcclxuaW1wb3J0IHsgRG93bmxvYWRIZWxwZXIgfSBmcm9tIFwiLi9oZWxwZXJzL2Rvd25sb2FkLmhlbHBlclwiO1xyXG5pbXBvcnQgeyBCdW5kbGVkb2NzQnVuZGxlc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9idW5kbGVkb2NzL2J1bmRsZXMuc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuXHJcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgTG9naW5Db21wb25lbnQsXHJcbiAgICAgICAgU2VjdXJlQ29tcG9uZW50LFxyXG4gICAgICAgIFNpZGVEcmF3ZXJDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgICAgICAgIHVzZUNsYXNzOiBUb2tlbkludGVyY2VwdG9yLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLFxyXG4gICAgICAgIEJ1bmRsZWRvY3NCdW5kbGVzU2VydmljZSxcclxuICAgICAgICBBY2Nlc3NUb2tlbkhlbHBlcixcclxuICAgICAgICBEb3dubG9hZEhlbHBlclxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9Il19