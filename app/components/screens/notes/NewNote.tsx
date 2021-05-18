import Menu from "../../menu/Menu";
import {PVisiviContainer} from "../../VisiviContainer";
import React from "react";
import InputItem from "../../menu/items/InputItem";
import {MenuItem} from "../../menu/MenuItem";
import Visivi from "../../Visivi";

export default class NewNote extends Menu {
    nameInput: React.RefObject<HTMLInputElement> = React.createRef();
    contentInput: React.RefObject<HTMLInputElement> = React.createRef();

    constructor(props: PVisiviContainer) {
        super(props);

        this.items = [
            <InputItem value={this.nameInput}>Název</InputItem>,
            <InputItem value={this.contentInput}>Text</InputItem>,
            <MenuItem onenter={() => this.submit()}>Uložit</MenuItem>
        ];
    }

    submit(): void {
        const name = this.nameInput.current?.value;
        const content = this.contentInput.current?.value;
        Visivi.notesManager.new(name!, content!);
    }
}
