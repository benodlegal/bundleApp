import { Injectable} from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class BundledocsUserService {
    
    push(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    constructor(private _http: HttpClient) { }

    me() {
        return this._http.get<AppResponseUser>("https://app.bundledocs.com/api/v1/users/me");
    }

}