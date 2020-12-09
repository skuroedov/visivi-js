import React, {ReactNode} from 'react';
import styles from './Visivi.css';
import ConfigManager from '../providers/ConfigManager';

type Props = {
    children: ReactNode;
};

interface MainState {
    content: ReactNode;
}

export default class Visivi extends React.Component<{}, MainState> {
    private static _instance: Visivi;

    constructor(props: Props) {
        super(props);
        this.state = {
            content: props.children,
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
}
