import React, {ReactElement} from "react";
import Menu from "../menu/Menu";
import Theme, { THEMES} from "../../constants/themes";
import RadioItem from "../menu/items/RadioItem";
import Visivi from "../Visivi";
import {PVisiviContainer, SVisiviContainer} from "../VisiviContainer";

export class ThemeItem extends RadioItem {
    onChange(): void {
        Visivi.theme = this.props.value;
    }
}

export class ThemeSelector extends Menu {
    constructor(props: PVisiviContainer, state: SVisiviContainer) {
        super(props, state);

        let items: ReactElement[] = [];
        let theme: Theme;
        for(let i = 0; i < THEMES.length; ++i) {
            theme = THEMES[i];

            if(Visivi.configManager.config.theme == theme.value) {
                this.state = {
                    focused: i,
                };
            }

            items.push(React.createElement(ThemeItem, {
                key: theme.value,
                value: theme.value,
                children: theme.name,
            }));
        }
        this.items = items;
    }
}
