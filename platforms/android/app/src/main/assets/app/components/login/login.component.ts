//All of the imports necessary for the login class
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";
import { RouterExtensions } from "nativescript-angular/router";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { AccessTokenHelper } from "../../helpers/accessToken.helper";

//define the login component
@Component({
    moduleId: module.id,
    selector: "ns-login",
    templateUrl: "login.component.html",
})
//login component class that implements the 'AfterViewInit' import
export class LoginComponent implements AfterViewInit, OnInit, OnDestroy {
    private self: LoginComponent = this;

    //web view url
    private _authenticationUrl: string = "https://app.bundledocs.com/auth/oauth2/authorize?response_type=token&client_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJTaWduYXR1cmUiOiIwYzE0ZmY0ZmU0ZGU0YTc5ODAxOTQ4OTMxMzIzYzIyYiIsIlBhcnRpdGlvbktleSI6IjEyNTE5OTcyMTQyMDYxNzk1MjgwXzUxNDU1M2Q0LWIxMzItNGU3OC1iZWExLWQyMjkwNjNjODNjNSIsIlJvd0tleSI6IjEyNTE4ODY1NTI1Mjc5NDc0OTM0Xzk1NzMzMmIwLWY2MjctNDRjYy1iMDk3LTM2NDhmNWRiNmYwYyJ9.qYi227w3Bbxpat7tppYdnF8rHbMX2c7ILMeidb9kdIo&redirect_uri=https://app.bundledocs.com/auth/oauth2/approval&state=Bundledocs.Android";
    get authenticationUrl(): string { return this._authenticationUrl; }

    //constructor for the Router
    public constructor(
        private _router: Router,
        private _changeDetectionRef: ChangeDetectorRef,
        private _authService: AuthService,
        private _accessTokenHelper: AccessTokenHelper,
    ) { }

    @ViewChild("webView") webViewRef: ElementRef;
    ngAfterViewInit() {
        const webview: WebView = this.webViewRef.nativeElement;
        const accessTokenHelper: AccessTokenHelper = this._accessTokenHelper;
        const authService: AuthService = this._authService;
        const router: Router = this._router;

        //this gets called when the webview is loaded
        webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
            try {
                const authenticationUrl:string = args.url;

                //test for existance of the access token in the url
                var isInUrl: boolean = accessTokenHelper.isAccessTokenInUrl(authenticationUrl);

                if (isInUrl) {
                    //when an access token is in the url
                    var accessToken = accessTokenHelper.toAccessTokenFromUrl(authenticationUrl);

                    //save the access token
                    authService.setAccessToken(accessToken);

                    //navigate router to secure component with our access token                                
                    router.navigate(["/secure"], { queryParams: { accessToken: accessToken } }).then((success) => {
                        console.log(success);
                    });
                }
            }
            catch (exception) {
                console.log("login.component.WebView.loadFinishedEvent");
                console.log(exception.toString());
            }
        });
    }
    //Called at runtime
    ngOnInit() {
        console.log('login.component.ngOnInit');
        this._changeDetectionRef.detectChanges();
    }
    ngOnDestroy() {
        console.log('login.component.ngOnDestroy');
    }
}