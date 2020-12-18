import React, {ReactNode} from 'react';

import VisiviContainer from '../VisiviContainer';
import styles from './stylesheet.css';

export interface PMenu {
    children: ReactNode,
}

export interface SMenu {
    focused: number,
}

export default class Menu extends VisiviContainer<PMenu, SMenu> {
    constructor(props: PMenu) {
        super(props);
        this.state = {
            focused: 0,
        }
    }

    render(): JSX.Element {
        return <div className={styles.menu}>{this.props.children}</div>;
    }
}
