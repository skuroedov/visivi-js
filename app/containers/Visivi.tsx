import React, { CSSProperties, ReactNode } from 'react';
import styles from './Visivi.css';
import ConfigManager from '../providers/ConfigManager';

type Props = {
    children: ReactNode;
};

export default class Visivi extends React.Component {
    readonly #props: Props;

    style: CSSProperties = {
        fontSize: '2em',
    };

    constructor(props: Props) {
        super(props);
        this.#props = props;
    }

    render() {
        const { children } = this.#props;
        const conf = new ConfigManager();
        const theme = styles[conf.getConfig.theme];
        const classes = `${styles.visiviContainer} ${theme}`;
        return <div className={classes}>{children}</div>;
    }
}
