import Menu from "../../menu/Menu";
import {PVisiviContainer} from "../../VisiviContainer";
import React from "react";
import InputItem from "../../menu/items/InputItem";
import {MenuItem} from "../../menu/MenuItem";

export default class NewNote extends Menu {
    nameInput: React.RefObject<InputItem> = React.createRef();
    contentInput: React.RefObject<InputItem> = React.createRef();

    constructor(props: PVisiviContainer) {
        super(props);

        this.items = [
            <InputItem ref={this.nameInput}>Název</InputItem>,
            <InputItem ref={this.contentInput}>Text</InputItem>,
            <MenuItem onenter={() => this.submit()}>Uložit</MenuItem>
        ];
    }

    submit(): void {
        const name = this.nameInput.current?.value;
        const content = this.contentInput.current?.value;
    }
}
