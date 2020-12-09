import React from 'react';

import VisiviContainer from '../VisiviContainer';
import styles from './Menu.css';

export default class Menu extends VisiviContainer {
    render(): JSX.Element {
        return <div className={styles.menu}>{this.props.children}</div>;
    }
}
