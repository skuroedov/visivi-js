import Menu from "../../menu/Menu";
import {PVisiviContainer} from "../../VisiviContainer";
import React from "react";
import BasicItem from "../../menu/items/BasicItem";


export default class NoteList extends Menu {
    constructor(props: PVisiviContainer) {
        super(props);
        this.items = [<BasicItem opens="/notes/new">Nová poznámka</BasicItem>];
    }
}
