import React from 'react';
import VisiviContainer, {PVisiviContainer, SVisiviContainer} from '../VisiviContainer';
import stylesheet from './stylesheet.css';

export default class Menu extends VisiviContainer {
    styles = stylesheet;
    items: React.ReactNode | React.ReactElement[] | undefined = []

    constructor(props: PVisiviContainer, state: SVisiviContainer) {
        super(props, state);

        this.items = this.props.children;
    }

    renderItems(items = this.items) {
        return React.Children.map(items, (child, index) => {
            // @ts-ignore
            return React.cloneElement(child, {id: index, focused: (this.state.focused == index)});
        });
    }

    render(): JSX.Element {
        return <div className={this.styles.menu}>
            {this.renderItems()}
        </div>;
    }
}
