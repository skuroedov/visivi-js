import {MenuItem, PMenuItem} from "../../menu/MenuItem";
import {startApp} from "../../../entities/DesktopFile";

interface PAppItem extends PMenuItem {
    exec: string
}

export class AppItem extends MenuItem<PAppItem> {
    onEnter() {
        super.onEnter();
        startApp(this.props.exec, () => this.focus());
    }
}
