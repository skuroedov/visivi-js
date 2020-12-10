import React, {ReactNode} from 'react';
import styles from './Visivi.css';
import ConfigManager from '../providers/ConfigManager';
import {THEME_BLACK_WHITE} from "../constants/themes";

type Props = {
    children: ReactNode;
};

interface MainState {
    content: ReactNode;
    theme: string;
}

export default class Visivi extends React.Component<{}, MainState> {
    private static _instance: Visivi;
    private static _configManager: ConfigManager;

    constructor(props: Props) {
        super(props);

        Visivi._instance = this;
        Visivi._configManager = new ConfigManager();

        this.state = {
            content: props.children,
            theme: Visivi.configManager.config.theme ?? THEME_BLACK_WHITE.value,
        };
        Visivi._instance = this;
    }

    render(): JSX.Element {
        const conf = new ConfigManager();
        const theme = styles[conf.getConfig.theme];
        const classes = `${styles.visiviContainer} ${theme}`;
        return <div className={classes}>{this.state.content}</div>;
    }

    static get instance(): Visivi {
        return this._instance;
    }

    static get configManager(): ConfigManager {
        return this._configManager;
    }
}
