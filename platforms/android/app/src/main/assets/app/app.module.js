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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFFOUUsNERBQWdGO0FBQ2hGLDhEQUFvRjtBQUVwRixzREFBOEY7QUFDOUYsb0RBQXFFO0FBRXJFLHNDQUFrRjtBQUNsRiwwQ0FBK0M7QUFFL0MsNkNBQW9FO0FBQ3BFLDZDQUF5RDtBQUV6RCw2Q0FBaUQ7QUFFakQsaURBQStDO0FBQy9DLHNFQUFvRTtBQUNwRSx5RUFBdUU7QUFDdkUsNkVBQTRFO0FBRTVFLHNFQUFvRTtBQUVwRSx3REFBc0Q7QUFFdEQscUVBQTRFO0FBQzVFLG1FQUFpRTtBQUNqRSw2REFBMkQ7QUFDM0QseUVBQWlGO0FBNkNqRjtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBM0NyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFCQUFZO2dCQUNaLHNDQUE0QjtnQkFDNUIsd0NBQThCO2dCQUM5QiwrQkFBdUI7Z0JBQ3ZCLGlDQUF3QjtnQkFFeEIsdUJBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLDhCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGlDQUF3QjthQUMzQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCxrQ0FBZTtnQkFDZixzQ0FBbUI7YUFDdEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsdUJBQWdCO2dCQUNoQiwwQkFBVztnQkFDWDtvQkFDSSxPQUFPLEVBQUUsd0JBQWlCO29CQUMxQixRQUFRLEVBQUUsb0NBQWdCO29CQUMxQixLQUFLLEVBQUUsSUFBSTtpQkFDZDtnQkFDRCxxQ0FBcUI7Z0JBQ3JCLDBDQUF3QjtnQkFDeEIsc0NBQWlCO2dCQUNqQixnQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VjdXJlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN1cmUvc2VjdXJlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWRlRHJhd2VyQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGVEcmF3ZXIvZHJhd2VyLmNvbXBvbmVudFwiXG5cbmltcG9ydCB7IFRva2VuSW50ZXJjZXB0b3IgfSBmcm9tICcuL2ludGVyY2VwdG9ycy90b2tlbi5pbnRlcmNlcHRvcic7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IEJ1bmRsZWRvY3NVc2VyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2J1bmRsZWRvY3MvdXNlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5IZWxwZXIgfSBmcm9tIFwiLi9oZWxwZXJzL2FjY2Vzc1Rva2VuLmhlbHBlclwiO1xuaW1wb3J0IHsgRG93bmxvYWRIZWxwZXIgfSBmcm9tIFwiLi9oZWxwZXJzL2Rvd25sb2FkLmhlbHBlclwiO1xuaW1wb3J0IHsgQnVuZGxlZG9jc0J1bmRsZXNTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYnVuZGxlZG9jcy9idW5kbGVzLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG5cbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBTZWN1cmVDb21wb25lbnQsXG4gICAgICAgIFNpZGVEcmF3ZXJDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBBdXRoU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgICAgICB1c2VDbGFzczogVG9rZW5JbnRlcmNlcHRvcixcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIEJ1bmRsZWRvY3NVc2VyU2VydmljZSxcbiAgICAgICAgQnVuZGxlZG9jc0J1bmRsZXNTZXJ2aWNlLFxuICAgICAgICBBY2Nlc3NUb2tlbkhlbHBlcixcbiAgICAgICAgRG93bmxvYWRIZWxwZXJcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF0gICBcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfSJdfQ==