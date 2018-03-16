import {AppBaseModel} from "../model/AppBaseModel";
import { AppBundle } from "../model/AppBundle";

export class AppUser extends AppBaseModel {
    public Email: string;
    public Briefs: AppBundle[]
}