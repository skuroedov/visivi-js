import React, {ReactNode} from 'react';
import stylesheet from './stylesheet.css';

export interface PMenuItem {
    children: string;
}

export interface SMenuItem {
    focused: boolean;
}

export abstract class MenuItem<P extends PMenuItem = PMenuItem, S extends SMenuItem = SMenuItem> extends React.Component<P, S> {
    styles = stylesheet;
    classes: string = this.styles.item;

    abstract onClick(): void;
    abstract render(): JSX.Element;

    renderDefault(inside?: ReactNode): JSX.Element {
        return <div className={this.classes} onClick={() => this.onClick()}>{inside ?? this.props.children}</div>
    }
}
