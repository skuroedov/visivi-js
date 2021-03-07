import Menu from "../menu/Menu";
import BasicItem from "../menu/items/BasicItem";
import React from "react";
import VisiviComponent from "../VisiviComponent";

export default class MainScreen extends VisiviComponent {
    render(): JSX.Element {
        return <Menu>
            <BasicItem opens={"/apps/categories"}>Aplikace</BasicItem>
            <BasicItem opens={"/settings"}>Nastavení</BasicItem>
        </Menu>
    }
}
