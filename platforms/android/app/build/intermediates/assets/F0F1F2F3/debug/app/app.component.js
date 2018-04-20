"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var token_interceptor_1 = require("./interceptors/token.interceptor");
var core_2 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_2.NgModule({
            bootstrap: [AppComponent],
            imports: [],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_1.TokenInterceptor,
                    multi: true
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNkNBQXlEO0FBQ3pELHNFQUFvRTtBQUNwRSxzQ0FBeUM7QUFNekM7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDbEMsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVk7QUFhekI7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQVhyQixlQUFRLENBQUM7WUFDUixTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHdCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLG9DQUFnQjtvQkFDMUIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUb2tlbkludGVyY2VwdG9yIH0gZnJvbSAnLi9pbnRlcmNlcHRvcnMvdG9rZW4uaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuXG5ATmdNb2R1bGUoe1xuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogVG9rZW5JbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cblxuIl19