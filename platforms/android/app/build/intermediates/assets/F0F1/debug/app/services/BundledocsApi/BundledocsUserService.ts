import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class BundledocsUserService {
    constructor(private http: HttpClient) { }

    getMe() {
        return this.http.get("https://app.bundledocs.com/api/v1/users/me");
    }
}