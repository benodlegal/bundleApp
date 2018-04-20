import { Injectable } from '@angular/core';
import { AppBundle } from "../../model/AppBundle";
import { AuthService } from '../auth.service';
import { DownloadHelper } from "../../helpers/download.helper"

@Injectable()
export class BundledocsBundlesService {

    public constructor(
        private _authService:AuthService,
        private _downloadHelper: DownloadHelper
    ) { }

    download(appBundle: AppBundle) {
        let accessToken: string = this._authService.getAccessToken();
        let downloadUrl:string = 
        "https://app.bundledocs.com/api/v1"+
        "/bundles/"+appBundle.PartitionKey+"/"+appBundle.RowKey+"/download?Bearer="+accessToken;
            console.log(downloadUrl);

        this._downloadHelper.download(downloadUrl);
    }
}