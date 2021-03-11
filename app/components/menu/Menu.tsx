import VisiviContainer, {PVisiviContainer} from '../VisiviContainer';
import stylesheet from './stylesheet.css';
import React from "react";

export default class Menu<P extends PVisiviContainer = PVisiviContainer> extends VisiviContainer<P> {
    styles = stylesheet;
    defaultClasses = this.styles.menu;

    _items: React.ReactNode;

    constructor(props: P) {
        super(props);

        this.items = this.props.children;
    }

    render() {
        return super.render(this.items);
    }

    set items(value: React.ReactNode) {
        this._items = value;
        this.childCount = React.Children.count(value);
    }

    get items(): React.ReactNode {
        return this._items;
    }
}
