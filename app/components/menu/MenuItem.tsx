import React, {ReactNode} from 'react';
import stylesheet from './stylesheet.css';
import Visivi from "../Visivi";

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

    onFocus() {
        Visivi.TTS.speak(this.props.children);
    }

    renderDefault(inside?: ReactNode): JSX.Element {
        return <div className={this.classes} onClick={() => this.onClick()} onFocus={() => this.onFocus()} tabIndex={0}>{inside ?? this.props.children}</div>
    }
}
