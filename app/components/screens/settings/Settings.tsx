import React from "react";
import Menu from "../../menu/Menu";
import BasicItem from "../../menu/items/BasicItem";
import {PVisiviContainer} from "../../VisiviContainer";

export class Settings extends Menu {
    title = "Nastavení";

    constructor(props: PVisiviContainer) {
        super(props);

        this.items = [
            <BasicItem opens="/themeSettings">Barevné schéma</BasicItem>,
            <BasicItem opens="/fontSizeSettings">Velikost písma</BasicItem>,
        ];
    }
}
