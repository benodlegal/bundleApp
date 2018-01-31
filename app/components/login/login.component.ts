import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";
import { RouterExtensions } from "nativescript-angular/router";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import *  as webViewModule from "tns-core-modules/ui/web-view";
import { getViewById } from "tns-core-modules/ui/frame/frame";
import { Page } from "ui/page";
import {Router, NavigationExtras} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "ns-login",
    templateUrl: "login.component.html",
})

export class LoginComponent implements AfterViewInit{
    
    public myWebViewSrc: string = "https://app.bundledocs.com/auth/oauth2/authorize?response_type=token&client_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJTaWduYXR1cmUiOiIwYzE0ZmY0ZmU0ZGU0YTc5ODAxOTQ4OTMxMzIzYzIyYiIsIlBhcnRpdGlvbktleSI6IjEyNTE5OTcyMTQyMDYxNzk1MjgwXzUxNDU1M2Q0LWIxMzItNGU3OC1iZWExLWQyMjkwNjNjODNjNSIsIlJvd0tleSI6IjEyNTE4ODY1NTI1Mjc5NDc0OTM0Xzk1NzMzMmIwLWY2MjctNDRjYy1iMDk3LTM2NDhmNWRiNmYwYyJ9.qYi227w3Bbxpat7tppYdnF8rHbMX2c7ILMeidb9kdIo&redirect_uri=https://app.bundledocs.com/auth/oauth2/approval&state=user-id-from-my-application";
    
    public constructor(private router: Router) {
       
    }
    
    public MyValue: string = "noValue";
    myActualFunction(){
        this.router.navigate(["/secure"], { queryParams: { accessToken: "myAccessToken" } });
    }

    @ViewChild("myWebView") webViewRef: ElementRef;    
    ngAfterViewInit() {
        let webview: WebView = this.webViewRef.nativeElement;                
        let myValue: string = "myValue";
        const myFunc = (theirValue:string)=>{
            myValue = theirValue
            this.MyValue = myValue;
            this.myActualFunction();
        };
        const getAccessToken = (url:string)=>{
            //throw 'not an access token';
           let accessToken = myValue.split(['&'][1])
            return accessToken;
        }
        webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
            let authenticationUrl = args.url;            
            
            console.log("authenticationUrl:");
            console.log(authenticationUrl);            
            
            try{
                getAccessToken(authenticationUrl);
                //myFunc(accessToken);
            }catch{
                //ignore
            }            
        });              
    }
   

    public ngOnInit() {            
        // setInterval(()=>{
        //     console.log(this.MyValue);
        // }, 5000);    
        
    }    
}