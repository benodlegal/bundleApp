import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy, Injectable } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { GestureTypes, GestureEventData } from "ui/gestures";
import * as ApplicationSettings from "application-settings";
import { WebView, LoadEventData } from "ui/web-view";
import { ActivatedRoute } from "@angular/router";
import * as textViewModule from "tns-core-modules/ui/text-view";
import { Page } from "ui/page";
import * as htmlViewModule from "tns-core-modules/ui/html-view";
import { Router, NavigationExtras } from "@angular/router";
import { HtmlView } from "tns-core-modules/ui/html-view";
import { HttpClient } from '@angular/common/http';
import { BundledocsUserService } from '../../services/BundledocsApi/BundledocsUserService';
import { EventData, Observable } from "data/observable";
import { View } from "ui/core/view";

export function logout() {
    // ApplicationSettings.remove("authenticated");
    // this._router.navigate(["/login"], { clearHistory: true });
    // localStorage.setItem('accessToken', null);
    console.log('you clicked logout');
};

export function showSideDrawer(args:EventData) {
    console.log("Show SideDrawer tapped.");
    // Show sidedrawer ...
}
@Component({
    moduleId: module.id,
    selector: "ns-secure",
    templateUrl: "secure.component.html"
})

@Injectable()

export class SecureComponent implements AfterViewInit, OnInit, OnDestroy {
    public accessToken: string;
    public onceLoggedInSrc: string; //TODO
    public htmlAccessToken: string;
    public htmlUsersToken: string;
    public appUser: AppUser;
    public constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private cdRef: ChangeDetectorRef, public _http: HttpClient) {
        this._activatedRoute.queryParams.subscribe(params => {
            this.accessToken = params["accessToken"];
            this.htmlAccessToken = 'your access Token is ' + this.accessToken;
            _http.get<AppResponseUser>('https://app.bundledocs.com/api/v1/users/me')
                .subscribe(
                    data => {
                        this.htmlUsersToken = 'your email is ' + data.data[0].Email;
                    },
                    err => console.log(err)
                );

            return this.htmlAccessToken;
        });
    }
    ngAfterViewInit() {
        console.log('accessToken3');
    }

    ngOnInit() {
        console.log('ngOnInit called in secure');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy called in secure');
    }

}