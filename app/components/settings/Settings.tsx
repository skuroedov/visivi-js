import React from "react";
import Menu from "../menu/Menu";
import BasicItem from "../menu/items/BasicItem";
import {ThemeSelector} from "./ThemeSelector";

export class Settings extends Menu {
    render(): JSX.Element {
        return <Menu>
            <BasicItem opens={<ThemeSelector />}>Barevné schéma</BasicItem>
        </Menu>
    }
}
