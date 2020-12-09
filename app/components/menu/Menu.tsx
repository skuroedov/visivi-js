import React, {ReactNode} from 'react';

import VisiviContainer from '../VisiviContainer';
import styles from './stylesheet.css';

export type MenuProps = {
    children: ReactNode;
}

export default class Menu extends VisiviContainer<MenuProps> {
    render(): JSX.Element {
        return <div className={styles.menu}>{this.props.children}</div>;
    }
}
