"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//important class used to import everything such as routing, sideDrawer etc..
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2RUFBNkU7QUFDN0UsZ0ZBQThFO0FBRTlFLDREQUFnRjtBQUNoRiw4REFBb0Y7QUFFcEYsc0RBQThGO0FBQzlGLG9EQUFxRTtBQUVyRSxzQ0FBa0Y7QUFDbEYsMENBQStDO0FBRS9DLDZDQUFvRTtBQUNwRSw2Q0FBeUQ7QUFFekQsNkNBQWlEO0FBRWpELGlEQUErQztBQUMvQyxzRUFBb0U7QUFDcEUseUVBQXVFO0FBRXZFLHNFQUFvRTtBQUVwRSx3REFBc0Q7QUFFdEQscUVBQTRFO0FBQzVFLG1FQUFpRTtBQUNqRSw2REFBMkQ7QUFDM0QseUVBQWlGO0FBNENqRjtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBMUNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFCQUFZO2dCQUNaLHNDQUE0QjtnQkFDNUIsd0NBQThCO2dCQUM5QiwrQkFBdUI7Z0JBQ3ZCLGlDQUF3QjtnQkFFeEIsdUJBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLDhCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGlDQUF3QjthQUMzQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCxrQ0FBZTthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDUCx1QkFBZ0I7Z0JBQ2hCLDBCQUFXO2dCQUNYO29CQUNJLE9BQU8sRUFBRSx3QkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxvQ0FBZ0I7b0JBQzFCLEtBQUssRUFBRSxJQUFJO2lCQUNkO2dCQUNELHFDQUFxQjtnQkFDckIsMENBQXdCO2dCQUN4QixzQ0FBaUI7Z0JBQ2pCLGdDQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydGFudCBjbGFzcyB1c2VkIHRvIGltcG9ydCBldmVyeXRoaW5nIHN1Y2ggYXMgcm91dGluZywgc2lkZURyYXdlciBldGMuLlxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VjdXJlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN1cmUvc2VjdXJlLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBUb2tlbkludGVyY2VwdG9yIH0gZnJvbSAnLi9pbnRlcmNlcHRvcnMvdG9rZW4uaW50ZXJjZXB0b3InO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuXG5pbXBvcnQgeyBCdW5kbGVkb2NzVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9idW5kbGVkb2NzL3VzZXJzLnNlcnZpY2VcIjtcbmltcG9ydCB7IEFjY2Vzc1Rva2VuSGVscGVyIH0gZnJvbSBcIi4vaGVscGVycy9hY2Nlc3NUb2tlbi5oZWxwZXJcIjtcbmltcG9ydCB7IERvd25sb2FkSGVscGVyIH0gZnJvbSBcIi4vaGVscGVycy9kb3dubG9hZC5oZWxwZXJcIjtcbmltcG9ydCB7IEJ1bmRsZWRvY3NCdW5kbGVzU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2J1bmRsZWRvY3MvYnVuZGxlcy5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgU2VjdXJlQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgQXV0aFNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICAgICAgdXNlQ2xhc3M6IFRva2VuSW50ZXJjZXB0b3IsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBCdW5kbGVkb2NzVXNlclNlcnZpY2UsXG4gICAgICAgIEJ1bmRsZWRvY3NCdW5kbGVzU2VydmljZSxcbiAgICAgICAgQWNjZXNzVG9rZW5IZWxwZXIsXG4gICAgICAgIERvd25sb2FkSGVscGVyXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdICAgXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXX0=