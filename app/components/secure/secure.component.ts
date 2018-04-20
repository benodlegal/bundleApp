//high priority class, most components exist in this class
import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";
import { Router } from "@angular/router";
import { RouterModule, Routes } from '@angular/router';
import { SearchBar } from "ui/search-bar";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";

import { AppBundle } from "../../model/AppBundle";
import { AppUser } from "../../model/AppUser";
import { AuthService } from "../../services/auth.service";
import { BundledocsUserService } from "../../services/bundledocs/users.service";
import { BundledocsBundlesService } from "../../services/bundledocs/bundles.service";
import { DownloadHelper } from "../../helpers/download.helper";

import { Page, visibilityProperty } from "ui/page";
import { ActionItem } from "ui/action-bar";

import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Observable } from "tns-core-modules/ui/page/page";
import { TnsSideDrawer } from 'nativescript-sidedrawer'



@Component({
    moduleId: module.id,
    selector: "ns-secure",
    templateUrl: "secure.component.html"
})
export class SecureComponent implements OnInit {
    public count: number = 0; //used to decide whether the searchbar is visible or hidden
    private _bdUser: AppUser;
    private _mainContentText: string;

    get bdUser(): AppUser {
        return this._bdUser;
    }

    @ViewChild("txtSearchPhrase")
    private _txtSearchPhrase: ElementRef;

    //string that is entered in the searchbar 
    private _searchPhrase: string;
    get searchPhrase(): string {
        return this._searchPhrase;
    }

    private _bdUserBundles: ObservableArray<AppBundle>;
    get bdUserBundles(): ObservableArray<AppBundle> {
        return this._bdUserBundles;
    }

    public constructor(
        private _changeDetectionRef: ChangeDetectorRef,
        private _router: Router,
        private _authService: AuthService,
        private _bdUserService: BundledocsUserService,
        private _bdBundlesService: BundledocsBundlesService,
        private _downloadHelper: DownloadHelper
    ) { }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    //updates real time on the console 
    onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    }

    //this class decides whether to display the searchbar or not, 1 or 0
    onClickSearch() {
        this.count++;
        console.log(this.count);
        if (this.count == 1) {
            (<SearchBar>this._txtSearchPhrase.nativeElement).visibility = "visible";
            this.count--;
            this.count--;
        }
        else if (this.count == 0) {
            (<SearchBar>this._txtSearchPhrase.nativeElement).visibility = "hidden";
        }
    }

    //refreshing the listview
    onPullToRefreshInitiated(args: ListViewEventData) {
        this.initBundles();
        let listView: RadListView = args.object;
        listView.notifyPullToRefreshFinished();
    }

    //all these actions happen once initialised
    ngOnInit() {
        this.initBundles();
        this._changeDetectionRef.detectChanges();
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
        this.mainContentText = "Side Drawer Button";
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    //class used for opening and displaying the side drawer 
    //count is used once again for the purpose of deciding
    //whether the drawer is opened or closed
    public openDrawer() {
        this.drawer.showDrawer();
        this.count++;
        console.log(this.count);
        if (this.count == 1) {
            this.count--;
            this.count--;
        }
        else if (this.count == 0) {
            this.onCloseDrawerTap();
        }
    }

    //called once count is 0
    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

    private initBundles() {
        this._bdUserBundles = new ObservableArray<AppBundle>();
        //subscribe to the data
        this._bdUserService.me().subscribe(response => {
            this._bdUser = response.data[0];

            //push each data item onto the obserbvable array
            for (let i = 0; i < this._bdUser.Briefs.length; i++) {
                let currentBrief = this._bdUser.Briefs[i];
                this._bdUserBundles.push(currentBrief);
            }
        },
            err => console.log(err)
        );
    }

    //TODO, not fully functioal yet 
    logout() {
        console.log('secure.component.logout');

        this._authService.setAccessToken(null);
        this._router.navigate(["/"]);
    }

    emailSupport() {
        this._downloadHelper.download("mailto:support@bundledocs.com");
    }

    downloadBundle(bundle: AppBundle) {
        this._bdBundlesService.download(bundle);
    }

    downloadManual() {
        this._downloadHelper.download("https://app.bundledocs.com/bundledocs-app-user-manual");
    }

}
