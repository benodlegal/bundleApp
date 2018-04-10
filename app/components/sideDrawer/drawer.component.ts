// >> sidedrawer-getting-started-angular
import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { DownloadHelper } from "../../helpers/download.helper";
import { AppBundle } from "../../model/AppBundle";
import { BundledocsBundlesService } from "../../services/bundledocs/bundles.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,    
    templateUrl: 'drawer.component.html'
})
export class SideDrawerComponent implements AfterViewInit, OnInit {

    private _mainContentText: string;

    public constructor(
        private _changeDetectionRef: ChangeDetectorRef,
        private _downloadHelper: DownloadHelper,
        private _bdBundlesService: BundledocsBundlesService,
        private _authService: AuthService,
        private _router: Router
    ) {
        
    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this.mainContentText = "Side Drawer Button";
    }

    get mainContentText() {
        return this._mainContentText;
    }

    set mainContentText(value: string) {
        this._mainContentText = value;
    }

    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
       this.drawer.closeDrawer();
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

    logout() {
        console.log('secure.component.logout');

        this._authService.setAccessToken(null);
        this._router.navigate(["/"]);
    }
}
// << sidedrawer-getting-started-angular