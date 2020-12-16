import {ItemProps, MenuItem, SMenuItem} from "../MenuItem";
import React from "react";

export interface PRadioItem extends ItemProps {
    value: string;
}

export interface SRadioItem extends SMenuItem{
    checked: boolean;
}

export default class RadioItem extends MenuItem<PRadioItem, SRadioItem> {
    classes = this.styles.item + " " + this.styles.radio;

    onClick(): void {
        console.log("Item clicked");
    }

    onChange(): void {
        console.log("Value changed");
    }

    //TODO: name prop
    render(): JSX.Element {
        console.log(this.state)
        return this.renderDefault(
            <label className={this.styles.radio}>
                <span className={this.styles.radioInput}>
                    <input type="radio" name="name" defaultChecked={this.state.checked} onChange={() => this.onChange()}/>
                    <span className={this.styles.radioControl}/>
                </span>
                <span className={this.styles.radioLabel}>{this.props.children}</span>
            </label>
        );
    }
}
