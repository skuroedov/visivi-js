import Menu from "../../menu/Menu";
import {PVisiviComponent} from "../../VisiviComponent";
import React from "react";
import {RouteComponentProps, match} from "react-router";
import Visivi from "../../Visivi";
import {MenuItem} from "../../menu/MenuItem";

interface PNote extends PVisiviComponent, RouteComponentProps {
    match: match<{ file: string }>;
}

export default class Note extends Menu<PNote> {
    constructor(props: PNote) {
        super(props);
        let note = Visivi.notesManager.getNote(this.props.match.params.file);
        this.items = [
            <MenuItem>Vytvořeno {this.dateFormat(new Date(note.getCreated))}</MenuItem>,
            <MenuItem>Upraveno {this.dateFormat(new Date(note.getEdited))}</MenuItem>,
            <MenuItem>Název {note.getName}</MenuItem>,
            <MenuItem>Obsah {note.getContent}</MenuItem>
        ];
    }

    private dateFormat(date: Date): string {
        return `${date.getDate()}. ${date.getMonth()+1}. ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }
}
