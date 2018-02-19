//All of the imports necessary for the login class
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";
import { RouterExtensions } from "nativescript-angular/router";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import * as webViewModule from "tns-core-modules/ui/web-view";
import { getViewById, topmost, NavigationEntry } from "tns-core-modules/ui/frame/frame";
import * as pages from "ui/page";
import { Router, NavigationExtras } from "@angular/router";
import { HttpClient } from '@angular/common/http';

//let accessToken;
//defining login component
@Component({
    moduleId: module.id,
    selector: "ns-login",
    templateUrl: "login.component.html",
})
//Login component class that implements the 'AfterViewInit' import
export class LoginComponent implements AfterViewInit, OnInit, OnDestroy {

    //Web view URL
    public myWebViewSrc: string = "https://app.bundledocs.com/auth/oauth2/authorize?response_type=token&client_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJTaWduYXR1cmUiOiIwYzE0ZmY0ZmU0ZGU0YTc5ODAxOTQ4OTMxMzIzYzIyYiIsIlBhcnRpdGlvbktleSI6IjEyNTE5OTcyMTQyMDYxNzk1MjgwXzUxNDU1M2Q0LWIxMzItNGU3OC1iZWExLWQyMjkwNjNjODNjNSIsIlJvd0tleSI6IjEyNTE4ODY1NTI1Mjc5NDc0OTM0Xzk1NzMzMmIwLWY2MjctNDRjYy1iMDk3LTM2NDhmNWRiNmYwYyJ9.qYi227w3Bbxpat7tppYdnF8rHbMX2c7ILMeidb9kdIo&redirect_uri=https://app.bundledocs.com/auth/oauth2/approval&state=user-id-from-my-application";
    //Constructor for the Router
    public constructor(private router: Router, private cdRef: ChangeDetectorRef, public _http: HttpClient) {

    }
    public MyValue: string = "noValue";
    myNavigation(accessToken: string) {
        //router navigates to the secure server and passes in
        //the access token in the query perameter
        this.router.navigate(["/secure"], { queryParams: { accessToken: accessToken } }).then((success) => {
            console.log(success);
        });
    }

    @ViewChild("myWebView") webViewRef: ElementRef;
    ngAfterViewInit() {
        let webview: WebView = this.webViewRef.nativeElement;
        let myValue: string = "myValue";
        this._http.get<AppResponseUser>('https://app.bundledocs.com/api/v1/users/me')
            .subscribe(
            data => console.log(data.data[0].Email),
            err => console.log(JSON.stringify(err))
            );

        const getAccessToken = (url: string) => {
            let accessToken: string = "";

            if (!isAccessTokenInUrl(url)) {
                throw "give me a url that has an access token";
            }

            let accessTokenPartOne: string[] = url.split('access_token=');
            let accessTokenPartOneReverse: string[] = accessTokenPartOne.reverse();
            accessToken = accessTokenPartOneReverse.join('').split('&', 1)[0];

            localStorage.setItem('accessToken', accessToken);
            console.log('your access token is ' + localStorage.getItem('accessToken'));
            console.log("------------------------------------");
            return accessToken;
        }

        const isAccessTokenInUrl = (url: string) => {
            //test for access token
            return (url.indexOf("access_token") > -1);
        }

        const navigateToSecureComponent = (accessToken: string) => {
            //test for access token

            this.myNavigation(accessToken);
        }

        //this gets called when the webview is loaded
        webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
            let authenticationUrl = args.url;

            try {
                //test for existance of the access token in the url
                var isInUrl: boolean = isAccessTokenInUrl(authenticationUrl);

                if (isInUrl) {
                    //when an access token is in the url
                    var accessToken = getAccessToken(authenticationUrl);

                    //navigate router to secure component with our access token
                    navigateToSecureComponent(accessToken);
                }
            }
            catch (exception) {
                console.log("cannot get authenticationURL");
            }
        });

        this.cdRef.detectChanges();
    }
    //Called at runtime
    ngOnInit() {
        console.log('this got called - ngOnInit');
    }
    ngOnDestroy() {
        console.log('this got called - ngOnDestroy');
    }
}