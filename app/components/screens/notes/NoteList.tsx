import Menu from "../../menu/Menu";
import {PVisiviContainer} from "../../VisiviContainer";
import React from "react";
import BasicItem from "../../menu/items/BasicItem";
import Visivi from "../../Visivi";
import Note from "../../../entities/Note";


export default class NoteList extends Menu {
    constructor(props: PVisiviContainer) {
        super(props);
        let items = [<BasicItem opens="/notes/new">Nová poznámka</BasicItem>];
        Visivi.notesManager.list().forEach(note => {
            items.push(<BasicItem opens={`/notes/note/${note[0]}`}>{(note[1] as Note).getName}</BasicItem>);
        });
        this.items = items;
    }
}
