import {MenuItem, PMenuItem} from "../MenuItem";
import React from "react";

export interface PRadioItem extends PMenuItem {
    value: string;
}

export default class RadioItem extends MenuItem<PRadioItem> {
    defaultClasses = this.styles.item + " " + this.styles.radio;
    focussedClasses = this.defaultClasses + " " + this.styles.focused;

    input: React.RefObject<HTMLInputElement>;

    constructor(props: PRadioItem) {
        super(props);
        this.state = {
            focused: false
        };
        this.input = React.createRef();
    }

    onChange(): void {};

    onFocus() {
        // @ts-ignore
        this.input.current.checked = true;
        this.onChange();
    }

    render(): JSX.Element {
        return <div className={this.state.focused ? this.focussedClasses : this.defaultClasses}>
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
