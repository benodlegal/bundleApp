import { Component, OnInit } from "@angular/core";
import { RouterExtensions} from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";
import {ActivatedRoute} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: "ns-secure",
    templateUrl: "secure.component.html",
})
export class SecureComponent implements OnInit {
    public accessToken: string;

    public constructor(private route: ActivatedRoute) { 
        this.route.queryParams.subscribe(params => {
            this.accessToken = params["accessToken"];
            
        });
    }

    public ngOnInit() {
        console.log(this.accessToken);
        console.log('accessToken');
        if(!ApplicationSettings.getBoolean("authenticated", false)) {
            //this.route.navigate(["/login"]);
        }
    }
    public newBundle(){
    console.log("hello");
    //this.router.navigate(["/login"], { clearHistory: true });
    }

    public logout() {
        ApplicationSettings.remove("authenticated");
       // this.router.navigate(["/login"], { clearHistory: true });
    }

}