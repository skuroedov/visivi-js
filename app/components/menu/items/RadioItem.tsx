import {MenuItem, PMenuItem} from "../MenuItem";
import React from "react";

export interface PRadioItem extends PMenuItem {
    value: string;
}

export default class RadioItem extends MenuItem<PRadioItem> {
    defaultClasses = this.styles.item + " " + this.styles.radio;

    input: React.RefObject<HTMLInputElement>;

    constructor(props: PRadioItem) {
        super(props);

        this.input = React.createRef();
    }

    onChange(): void {};

    onFocus() {
        // @ts-ignore
        this.input.current.checked = true;
        this.onChange();
    }

    //TODO: name prop
    render(): JSX.Element {
        return <div className={this.classes}>
            <label className={this.styles.radio}>
                <span className={this.styles.radioInput}>
                    <input ref={this.input} type="radio" name="name" defaultChecked={(this.state == null) ? false : this.state.focused} />
                    <span className={this.styles.radioControl}/>
                </span>
                <span className={this.styles.radioLabel}>{this.props.children}</span>
            </label>
        </div>
    }
}
