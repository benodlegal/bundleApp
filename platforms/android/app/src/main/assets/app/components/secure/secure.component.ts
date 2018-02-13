import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy, Injectable} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";
import {WebView, LoadEventData} from "ui/web-view";
import {ActivatedRoute} from "@angular/router";
import * as textViewModule from "tns-core-modules/ui/text-view";
import {Page} from "ui/page";
import * as htmlViewModule from "tns-core-modules/ui/html-view";
import {Router, NavigationExtras} from "@angular/router";
import {HtmlView} from "tns-core-modules/ui/html-view";
import { HttpClient } from '@angular/common/http';
import { BundledocsUserService } from '../../services/BundledocsApi/BundledocsUserService';

@Component({
    moduleId: module.id,
    selector: "ns-secure",
    templateUrl: "secure.component.html"
})
   @Injectable()
   
export class SecureComponent implements AfterViewInit, OnInit, OnDestroy{
    public accessToken: string;
    public onceLoggedInSrc: string; //TODO
    public htmlAccessToken: string;
    public htmlUsersToken:string;
    public appUser:AppUser;   
    public constructor(private _router:Router, private _activatedRoute: ActivatedRoute, private cdRef:ChangeDetectorRef, public _http: HttpClient) {
        this._activatedRoute.queryParams.subscribe(params => {
        this.accessToken = params["accessToken"];           
        this.htmlAccessToken = 'your access Token is ' + this.accessToken;
        this.htmlUsersToken = 'your email is' + this._http.get<AppResponseUser>('https://app.bundledocs.com/api/v1/users/me')
        .subscribe(
        data =>(data.data[0].Email),
        err => ((err)));
        });        
    }

    ngAfterViewInit() {
        console.log('accessToken3');
    }

    ngOnInit(){
        console.log('ngOnInit called in secure');
    }

    ngOnDestroy(){
        console.log('ngOnDestroy called in secure');
    }
    
    public logout() {
        ApplicationSettings.remove("authenticated");
        this._router.navigate(["/login"]);
        localStorage.setItem('accessToken', null);
     }

}