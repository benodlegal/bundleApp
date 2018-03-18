import * as utils from "utils/utils";

export class DownloadHelper {

    public Download(url: string) {
        utils.openUrl(url);
    }
}