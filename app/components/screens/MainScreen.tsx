import Menu from "../menu/Menu";
import BasicItem from "../menu/items/BasicItem";
import React from "react";
import {PVisiviContainer} from "../VisiviContainer";

export default class MainScreen extends Menu {
    title = "Visivi";

    constructor(props: PVisiviContainer) {
        super(props);

        this.items = [
            <BasicItem opens={"/apps/categories"}>Aplikace</BasicItem>,
            <BasicItem opens={"/settings"}>Nastavení</BasicItem>,
        ];
    }
}
