import React from "react";
import Menu from "../../menu/Menu";
import BasicItem from "../../menu/items/BasicItem";

export class Settings extends Menu {
    render(): JSX.Element {
        return <Menu>
            <BasicItem opens="/themeSelector">Barevné schéma</BasicItem>
        </Menu>
    }
}
