import { Component, NgZone, ChangeDetectionStrategy, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy, Injectable, Input, Output } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
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
import * as utils from "utils/utils";
import { ListViewEventData } from "nativescript-ui-listview";

import { AppBundle } from "../../model/AppBundle";
import { AppUser } from "../../model/AppUser";

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
    private _bdUserBundles: ObservableArray<AppBundle>;
    public searchPhrase: string;
    public myList: MyList;

    get bdUserBundles(): ObservableArray<AppBundle> {
        return this._bdUserBundles;
    }

    public constructor(
        private _router: RouterExtensions,
        private _activatedRoute: ActivatedRoute,
        private cdRef: ChangeDetectorRef,
        private _bdUserService: BundledocsUserService,
        private _ngZone: NgZone,
        private _changeDetectionRef: ChangeDetectorRef) {
    }

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);
    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    }

    @ViewChild("txtSearchPhrase") txtSearchPhrase: ElementRef;
    @ViewChild("lstBundles") lstBundles: ElementRef;

    ngAfterViewInit() {
        try {
            console.log('load was called');

            //leave the below
            let searchPhrase: SearchBar = this.txtSearchPhrase.nativeElement;
            searchPhrase.text = " ";
            searchPhrase.text = "";
        } catch (e) {
            console.log(JSON.stringify(e));
        }
        console.log('accessToken3');
    }

    ngOnInit() {
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
        console.log('ngOnInit called in secure');
    }
    private initDataItems() {
        this._bdUserBundles = new ObservableArray<AppBundle>();
        //subscribe to the data
        this._bdUserService.me().subscribe(response => {
            this.bdUser = response.data[0];
            this.htmlUsersToken = response.data[0].Email;
            for (let i=0; i <= this.bdUser.Briefs.length; i++) {
                let currentBrief = this.bdUser.Briefs[i];
                this.bdUserBundles.push(currentBrief);
                console.log(JSON.stringify(this.bdUserBundles));
            }
        },
            err => console.log(err)
        );
        //push each data item onto the obserbvable array
       
       
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

    help() {
        console.log('help.....');
        //TODO
    }
    add(){
        console.log(this.bdUserBundles.length);
        let bundle: AppBundle = new AppBundle();
        bundle.Title = "Title";        
        this.bdUserBundles.push(bundle);
        console.log(this.bdUserBundles.length);
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

    editBundle(bundle: AppBundle) {
        utils.openUrl("https://app.bundledocs.com/api/v1/bundles/" + bundle.PartitionKey
            + "/" + bundle.RowKey + "/download?Bearer=" + localStorage.getItem('accessToken'));
    }
    openGmail() {
        utils.openUrl("https://gmail.com/");
    }
    openManual() {
        utils.openUrl("https://app.bundledocs.com/bundledocs-app-user-manual");
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

        ]
    }
}