import React from 'react';
import stylesheet from './stylesheet.css';
import Visivi from "../Visivi";
import VisiviComponent, {PVisiviComponent} from "../VisiviComponent";
import VisiviTTS from "../../providers/VisiviTTS";

export interface PMenuItem extends PVisiviComponent {
    focused?: boolean;
}

export interface SMenuItem {
    focused?: boolean;
}

export abstract class MenuItem<P extends PMenuItem = PMenuItem, S extends SMenuItem = SMenuItem> extends VisiviComponent<P, S> {
    styles = stylesheet;
    defaultClasses = this.styles.item;
    classes = this.defaultClasses;
    focussedClasses = this.defaultClasses + " " + this.styles.focused;

    constructor(props: P) {
        super(props);
        this.state = {
            focused: false
        } as S;

        this.onEnter = this.onEnter.bind(this);
    }

    focus(): void {
        this.classes = this.focussedClasses;

        VisiviTTS.stop();
        VisiviTTS.speak(String(this.props.children));

        Visivi.eventEmitter.removeAllListeners("enter");
        Visivi.eventEmitter.once("enter", this.onEnter);

        this.onFocus();
    }

    unFocus(): void {
        this.classes = this.defaultClasses;

        Visivi.eventEmitter.removeListener("enter", this.onEnter);

        this.onUnFocus();
    }

    onFocus(): void {}
    onUnFocus(): void {}
    onEnter(): void {}

    render(content = this.props.children): JSX.Element {
        return <div className={this.state.focused ? this.focussedClasses : this.defaultClasses} ref={this.selfRef}>{content}</div>;
    }

    componentDidMount() {
        this.setState({focused: this.props.focused});
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>) {
        if(prevState.focused != this.state.focused) {
            this.state.focused ? this.focus() : this.unFocus();
        }
        if(prevProps.focused != this.props.focused) {
            this.setState({focused: this.props.focused});
        }
    }
}
