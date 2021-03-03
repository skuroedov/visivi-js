import React, {ReactElement} from "react";
import RadioItem from "../../menu/items/RadioItem";
import Visivi from "../../Visivi";
import Menu from "../../menu/Menu";
import {PVisiviComponent} from "../../VisiviComponent";

const START: number = 12;
const STEP: number = 2;

class FontSizeItem extends RadioItem {
    onChange(): void {
        Visivi.config.set({fontSize: Number(this.props.value)})
    }
}

export class FontSizeSettings extends Menu {
    constructor(props: PVisiviComponent) {
        super(props);
        let items: ReactElement[] = [];

        for(let i = 0; (i * STEP) + START < 21; ++i) {
            let actualSize: number = (i * STEP) + START;
            if(Number(Visivi.config.get("fontSize")) == actualSize) {
                this.state = {
                    focused: i,
                };
            }
            items.push(React.createElement(FontSizeItem, {
                value: actualSize,
                children: `${actualSize} bodů`,
            }))
        }

        this.items = items;
    }
}
