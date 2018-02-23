import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy, Injectable, Input, Output } from "@angular/core";
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
import { SearchBar } from "ui/search-bar";
import { SetupItemViewArgs } from "nativescript-angular/directives";
import * as buttonModule from "tns-core-modules/ui/button";
import * as bindable from "tns-core-modules/ui/core/bindable";
import * as observable from "tns-core-modules/data/observable";
import * as dialogs from "ui/dialogs";

export function showSideDrawer(args: EventData) {
    console.log("Show SideDrawer tapped.");
    // Show sidedrawer ...
}
@Component({
    moduleId: module.id,
    selector: "ns-secure",
    templateUrl: "secure.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

@Injectable()

export class SecureComponent implements AfterViewInit, OnInit, OnDestroy {
    @Input() row;

    public accessToken: string;
    public onceLoggedInSrc: string; //TODO
    public htmlAccessToken: string;
    public htmlUsersToken: string;
    public bdUser: AppUser;
    public bdUserBundles: AppBundle[];
    public searchPhrase: string;
    public myList: MyList;

    public constructor(private _router: RouterExtensions, private _activatedRoute: ActivatedRoute, private cdRef: ChangeDetectorRef, private _bdUserService: BundledocsUserService) {

    }

    load(args) {
        this._bdUserService.me().subscribe(
                data => {   
                    this.bdUser = data.data[0];                    
                    this.bdUserBundles = this.bdUser.Briefs;
                    this.htmlUsersToken = data.data[0].Email;
                },
                err => console.log(err)
            );
    } 
    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);
    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
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

    logout() {
        // ApplicationSettings.remove("authenticated");
        // this._router.navigate(["/login"], { clearHistory: true });
        // localStorage.setItem('accessToken', null);
        console.log('you clicked logout');
    }

    help(){
        console.log('help.....');
       //TODO
    }
    newBundle() {
        dialogs.prompt({
            title: "New Bundle",
            message: "Code(eg. ABC20/1)",
            cancelButtonText: "Cancel",
            okButtonText: "Create",
            neutralButtonText: "Ok"
        }).then(r => {
            console.log("Dialog result: " + r.result + ", user: " + r.text);
        });
    }


}

class Bundle {
    constructor(public id: number, public name: string, public age: number) {

    }
}
export class MyList {
    bundle: Bundle[];
    constructor() {
        this.bundle = [
            {
                id: 0,
                name: 'Michael Smith',
                age: 25
            },

            {
                id: 1,
                name: 'Paul McCarthy',
                age: 36
            },

            {
                id: 2,
                name: 'Mary O Driscoll',
                age: 19
            },
            {
                id: 3,
                name: 'John Doe',
                age: 56
            },

            {
                id: 4,
                name: 'Ross Petter',
                age: 43
            },

            {
                id: 5,
                name: 'Barry O Connor',
                age: 19
            },
            {
                id: 6,
                name: 'Julie Burke',
                age: 60
            },

            {
                id: 7,
                name: 'Mark Stud',
                age: 26
            },

            {
                id: 8,
                name: 'Jim Burnes',
                age: 39
            },
        ]
    }
}