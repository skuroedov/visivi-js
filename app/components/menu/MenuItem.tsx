import React from 'react';
import stylesheet from './stylesheet.css';
import Visivi from "../Visivi";

export interface PMenuItem {
    children: any;
    id?: number;
    focused?: boolean;
}

export interface SMenuItem {
    focused?: boolean;
}

export abstract class MenuItem<P extends PMenuItem = PMenuItem, S extends SMenuItem = SMenuItem> extends React.Component<P, S> {
    protected _mounted: boolean = false;

    styles = stylesheet;
    defaultClasses: string = this.styles.item;
    classes: string = this.defaultClasses;

    constructor(props: P) {
        super(props);

        Visivi.eventEmitter.addListener("enter", () => {
            if(this.state.focused && this._mounted) {
                this.onEnter();
            }
        });

        Visivi.eventEmitter.addListener("unmount", () => {
            this._mounted = false;
        })
    }

    focus(): void {
        this.classes += " " + this.styles.focused;

        Visivi.TTS.stop();
        Visivi.TTS.speak(this.props.children);

        this.onFocus();
    }

    unFocus(): void {
        this.classes = this.defaultClasses;
    }

    onFocus(): void {}
    onEnter(): void {}

    render(): JSX.Element {
        return <div className={this.classes}>{this.props.children}</div>;
    }

    componentDidMount() {
        this.setState({focused: this.props.focused});
        this._mounted = true;
    }

    shouldComponentUpdate(nextProps: P, nextState: S): boolean {
        if(nextProps.focused != this.props.focused) {
            this.setState({focused: nextProps.focused});
        }

        nextState.focused ? this.focus() : this.unFocus();

        return true;
    }

    componentWillUnmount() {
        this._mounted = false;
    }
}
