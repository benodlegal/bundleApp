import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy} from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";
import { WebView, LoadEventData } from "ui/web-view";
import {ActivatedRoute} from "@angular/router";
import * as textViewModule from "tns-core-modules/ui/text-view";
import {Page} from "ui/page";
import * as htmlViewModule from "tns-core-modules/ui/html-view";
import {Router, NavigationExtras} from "@angular/router";
import { HtmlView } from "tns-core-modules/ui/html-view";
import * as local from 'nativescript-localstorage';
@Component({
    moduleId: module.id,
    selector: "ns-secure",
    templateUrl: "secure.component.html"
})
   
export class SecureComponent implements AfterViewInit, OnInit, OnDestroy{
    public accessToken: string;
    public onceLoggedInSrc: string; //TODO
    public htmlString: string;

    public constructor(private _router:Router, private _activatedRoute: ActivatedRoute, private cdRef:ChangeDetectorRef) {
        this._activatedRoute.queryParams.subscribe(params => {
        this.accessToken = params["accessToken"];
        console.log('accessToken2');
        console.log(this.accessToken);
        localStorage.setItem("saved", JSON.stringify(this.accessToken));
        //localStorage.getItem(this.accessToken);
        });
        
    }
  
    ngAfterViewInit() {  
        console.log('accessToken33');
        //this.htmlString = '<span><h1>HtmlView demo in <font color="blue">NativeScript</font> App</h1></span>';   
    }

    ngOnInit(){
        console.log('ngOnInit called in secure');
    }
    ngOnDestroy(){
        console.log('ngOnDestroy called in secure');
    }
    // public logout() {
    // ApplicationSettings.remove("authenticated");
    // this.router.navigate(["/login"], { clearHistory: true });
    // }

}