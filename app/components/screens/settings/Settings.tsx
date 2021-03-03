import React from "react";
import Menu from "../../menu/Menu";
import BasicItem from "../../menu/items/BasicItem";

export class Settings extends Menu {
    render(): JSX.Element {
        return <Menu>
            <BasicItem opens="/themeSettings">Barevné schéma</BasicItem>
            <BasicItem opens="/fontSizeSettings">Velikost písma</BasicItem>
        </Menu>
    }
}
