import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class BundledocsUserService {
    public userMe:any;
    constructor(private http: HttpClient) { }

    me() {
        this.userMe = this.http.get("https://app.bundledocs.com/api/v1/users/me");
        return this.userMe;
        
    }
}