import React from "react";
import Menu from "../menu/Menu";
import Theme, {THEMES} from "../../constants/themes";
import RadioItem, {PRadioItem, SRadioItem} from "../menu/items/RadioItem";
import Visivi from "../Visivi";

class ThemeItem extends RadioItem {
    constructor(props: PRadioItem, state: SRadioItem) {
        super(props, state);

        let newState: SRadioItem = state;
        newState.checked = Visivi.configManager.config.theme == this.props.value;
        this.state = newState;
    }

    onChange() {
        Visivi.theme = this.props.value;
    }
}

export class ThemeSelector extends Menu {
    list(): JSX.Element[] {
        let result: JSX.Element[] = [];

        let theme: Theme;
        for(let i = 0; i < THEMES.length; ++i) {
            theme = THEMES[i];
            result.push(
                <ThemeItem key={theme.value} value={theme.value}>{theme.name}</ThemeItem>
            );
        }
        return result;
    }

    render(): JSX.Element {
        return <Menu children={this.list()} />
    }
}
