import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";
import { Router } from "@angular/router";

import { SearchBar } from "ui/search-bar";

import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ListViewEventData } from "nativescript-ui-listview";

import { AppBundle } from "../../model/AppBundle";
import { AppUser } from "../../model/AppUser";
import { AuthService } from "../../services/auth.service";
import { BundledocsUserService } from "../../services/bundledocs/users.service";
import { BundledocsBundlesService } from "../../services/bundledocs/bundles.service";
import { DownloadHelper } from "../../helpers/download.helper";

@Component({
    moduleId: module.id,
    selector: "ns-secure",
    templateUrl: "secure.component.html"
})
export class SecureComponent implements OnInit {
    private _bdUser: AppUser;
    get bdUser(): AppUser {
        return this._bdUser;
    }

    @ViewChild("txtSearchPhrase")
    private _txtSearchPhrase: ElementRef;

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
    ) {
    }

    onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    }

    onPullToRefreshInitiated($event) {
        this.initBundles();
    }

    ngOnInit() {
        this.initBundles();
        this._changeDetectionRef.detectChanges();
        console.log('secure.component.ngOnInit');
    }

    private initBundles() {
        this._bdUserBundles = new ObservableArray<AppBundle>();
        //subscribe to the data
        this._bdUserService.me().subscribe(response => {
            this._bdUser = response.data[0];

            //push each data item onto the obserbvable array
            for (let i = 0; i <= this._bdUser.Briefs.length; i++) {
                let currentBrief = this._bdUser.Briefs[i];
                this._bdUserBundles.push(currentBrief);
            }
        },
            err => console.log(err)
        );
    }

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