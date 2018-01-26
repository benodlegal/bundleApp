import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import  *  as webViewModule from "tns-core-modules/ui/web-view";
import { getViewById } from "tns-core-modules/ui/frame/frame";
import { WebView, LoadEventData } from "ui/web-view";
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    selector: "ns-login",
    templateUrl: "login.component.html",
})


export class LoginComponent implements OnInit {
    public input: any;
    webViewLoaded(args){
        
        var webview:webViewModule.WebView = <webViewModule.WebView>args.object;
        webview.android.getSettings().setDisplayZoomControls(false);
        console.dir("hello1212");
    }

    public constructor(private router: RouterExtensions) {
        this.input = {
            "email": "",
            "password": ""
        }
    }
    
    public gButton(){
        console.log("hi");
    }
    
    public mButton(){
       console.log("hello"); 
    }
    
    public bButton(){
        console.log("hey");  
    }
    

    public ngOnInit() {
        console.dir("121212121");
       
        let webView = new webViewModule.WebView()
          if(ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/secure"], { clearHistory: true });
            
        }
        
    }
    public login() {
        if(this.input.email && this.input.password) {
            let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
            if(this.input.email == account.email && this.input.password == account.password) {
                ApplicationSettings.setBoolean("authenticated", true);
                this.router.navigate(["/secure"], { clearHistory: true });
            } else {
                (new SnackBar()).simple("Incorrect Credentials!");
            }
        } else {
            (new SnackBar()).simple("All Fields Required!");
        }
    }
    

}