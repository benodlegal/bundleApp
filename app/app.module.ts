import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { SecureComponent } from "./components/secure/secure.component";

import { TokenInterceptor } from './interceptors/token.interceptor';

import { AuthService } from "./services/auth.service";

import { BundledocsUserService } from "./services/bundledocs/users.service";
import { AccessTokenHelper } from "./helpers/accessToken.helper";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        HttpClientModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,        
        SecureComponent
    ],
    providers: [
        HttpClientModule,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        BundledocsUserService,
        AccessTokenHelper
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }