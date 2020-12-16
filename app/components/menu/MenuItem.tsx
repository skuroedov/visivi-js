import React, {ReactNode} from 'react';
import stylesheet from './stylesheet.css';

export interface ItemProps {
    children: string;
}

export interface SMenuItem {
    focused: boolean;
}

export abstract class MenuItem<ItemProps, S> extends React.Component<ItemProps> {
    styles = stylesheet;
    classes: string = this.styles.item;

    abstract onClick(): void;
    abstract render(): JSX.Element;

    renderDefault(inside?: ReactNode): JSX.Element {
        return <div className={this.classes} onClick={() => this.onClick()}>{inside ?? this.props.children}</div>
    }
}
