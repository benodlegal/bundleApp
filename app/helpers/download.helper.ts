import * as utils from "utils/utils";

export class DownloadHelper {

    public download(url: string) {
        utils.openUrl(url);
    }
}