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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFFOUUsNERBQWdGO0FBQ2hGLDhEQUFvRjtBQUVwRixzREFBOEY7QUFDOUYsb0RBQXFFO0FBRXJFLHNDQUFrRjtBQUNsRiwwQ0FBK0M7QUFFL0MsNkNBQW9FO0FBQ3BFLDZDQUF5RDtBQUV6RCw2Q0FBaUQ7QUFFakQsaURBQStDO0FBQy9DLHNFQUFvRTtBQUNwRSx5RUFBdUU7QUFFdkUsc0VBQW9FO0FBRXBFLHdEQUFzRDtBQUV0RCxxRUFBNEU7QUFDNUUsbUVBQWlFO0FBQ2pFLDZEQUEyRDtBQUMzRCx5RUFBaUY7QUE0Q2pGO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUExQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUJBQVk7Z0JBQ1osc0NBQTRCO2dCQUM1Qix3Q0FBOEI7Z0JBQzlCLCtCQUF1QjtnQkFDdkIsaUNBQXdCO2dCQUV4Qix1QkFBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsOEJBQWdCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsaUNBQXdCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLGtDQUFlO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLHVCQUFnQjtnQkFDaEIsMEJBQVc7Z0JBQ1g7b0JBQ0ksT0FBTyxFQUFFLHdCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLG9DQUFnQjtvQkFDMUIsS0FBSyxFQUFFLElBQUk7aUJBQ2Q7Z0JBQ0QscUNBQXFCO2dCQUNyQiwwQ0FBd0I7Z0JBQ3hCLHNDQUFpQjtnQkFDakIsZ0NBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlY3VyZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdXJlL3NlY3VyZS5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgVG9rZW5JbnRlcmNlcHRvciB9IGZyb20gJy4vaW50ZXJjZXB0b3JzL3Rva2VuLmludGVyY2VwdG9yJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQnVuZGxlZG9jc1VzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYnVuZGxlZG9jcy91c2Vycy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkhlbHBlciB9IGZyb20gXCIuL2hlbHBlcnMvYWNjZXNzVG9rZW4uaGVscGVyXCI7XG5pbXBvcnQgeyBEb3dubG9hZEhlbHBlciB9IGZyb20gXCIuL2hlbHBlcnMvZG93bmxvYWQuaGVscGVyXCI7XG5pbXBvcnQgeyBCdW5kbGVkb2NzQnVuZGxlc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9idW5kbGVkb2NzL2J1bmRsZXMuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcblxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFNlY3VyZUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIEF1dGhTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICAgIHVzZUNsYXNzOiBUb2tlbkludGVyY2VwdG9yLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgQnVuZGxlZG9jc1VzZXJTZXJ2aWNlLFxuICAgICAgICBCdW5kbGVkb2NzQnVuZGxlc1NlcnZpY2UsXG4gICAgICAgIEFjY2Vzc1Rva2VuSGVscGVyLFxuICAgICAgICBEb3dubG9hZEhlbHBlclxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSAgIFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9Il19