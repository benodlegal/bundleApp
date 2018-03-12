import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import * as webViewModule from "tns-core-modules/ui/web-view";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { SecureComponent } from "./components/secure/secure.component";
import { AuthService } from "./auth/auth.service";
import { Component } from "@angular/core/src/metadata/directives";
const routes: Routes = [
     { path: "", redirectTo: "/login", pathMatch: "full" },
     { path: "login", component: LoginComponent },
     { path: "register", component: RegisterComponent },
     { path: "secure", component: SecureComponent },
     { path: "auth", component: AuthService },
     { path: "login/:id", component: LoginComponent}
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }