import Menu from "../../menu/Menu";
import {PVisiviContainer} from "../../VisiviContainer";
import React from "react";
import InputItem from "../../menu/items/InputItem";
import {MenuItem} from "../../menu/MenuItem";

export abstract class NoteEditor<P extends PVisiviContainer = PVisiviContainer> extends Menu<P> {
    title = "Upravit poznámku";
    nameInput: React.RefObject<HTMLInputElement> = React.createRef();
    contentInput: React.RefObject<HTMLInputElement> = React.createRef();

    constructor(props: P) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.items = [
            <InputItem value={this.nameInput}>Název</InputItem>,
            <InputItem value={this.contentInput}>Text</InputItem>,
            <MenuItem onenter={() => this.submit()}>Uložit</MenuItem>
        ];
    }

    setValues(name: string, content: string): void {
        // @ts-ignore
        this.nameInput.current.value = name;
        // @ts-ignore
        this.contentInput.current.value = content;
    }

    submit(): void {
        const name = this.nameInput.current?.value;
        const content = this.contentInput.current?.value;
        this.onSubmit(name!, content!);
    }

    abstract onSubmit(name: string, content: string): void;
}
