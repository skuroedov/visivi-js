import {MenuItem, PMenuItem} from "../../menu/MenuItem";

interface PAppItem extends PMenuItem {
    exec: string
}

export class AppItem extends MenuItem<PAppItem> {

}
