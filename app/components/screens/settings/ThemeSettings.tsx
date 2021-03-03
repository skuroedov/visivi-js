import React, {ReactElement} from "react";
import RadioItem from "../../menu/items/RadioItem";
import Visivi from "../../Visivi";
import Menu from "../../menu/Menu";
import Theme, {THEMES} from "../../../constants/themes";
import {PVisiviComponent} from "../../VisiviComponent";

export class ThemeItem extends RadioItem {
    onChange(): void {
        Visivi.config.set({theme: this.props.value.toString()});
    }
}

export class ThemeSettings extends Menu {
    constructor(props: PVisiviComponent) {
        super(props);
        let items: ReactElement[] = [];
        let theme: Theme;
        for(let i = 0; i < THEMES.length; ++i) {
            theme = THEMES[i];

            if(Visivi.config.get("theme") == theme.value) {
                this.state = {
                    focused: i,
                };
            }

            items.push(React.createElement(ThemeItem, {
                value: theme.value,
                children: theme.name,
            }));
        }
        this.items = items;
    }
}
