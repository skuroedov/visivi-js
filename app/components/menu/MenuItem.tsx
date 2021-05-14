import React from 'react';
import stylesheet from './stylesheet.css';
import Visivi from "../Visivi";
import VisiviComponent, {PVisiviComponent} from "../VisiviComponent";
import VisiviTTS from "../../providers/VisiviTTS";

export interface PMenuItem extends PVisiviComponent {
    focused?: boolean;
    onenter?(): void;
}

export interface SMenuItem {
    focused?: boolean;
}

export abstract class MenuItem<P extends PMenuItem = PMenuItem, S extends SMenuItem = SMenuItem> extends VisiviComponent<P, S> {
    styles = stylesheet;
    defaultClasses = this.styles.item;
    classes = this.defaultClasses;
    focussedClasses = this.defaultClasses + " " + this.styles.focused;
    timeout?: NodeJS.Timeout;

    constructor(props: P) {
        super(props);
        this.state = {
            focused: false
        } as S;

        this.onEnter = this.onEnter.bind(this);
        this.repeat = this.repeat.bind(this);
    }

    focus(): void {
        this.classes = this.focussedClasses;

        this.timeout = setTimeout(() => {VisiviTTS.speak(String(this.props.children))}, 250);

        Visivi.eventEmitter.removeAllListeners("enter");
        Visivi.eventEmitter.once("enter", this.onEnter);
        Visivi.eventEmitter.on("KEY_R", this.repeat);

        this.onFocus();
    }

    unFocus(): void {
        this.classes = this.defaultClasses;

        clearTimeout(this.timeout!);
        Visivi.eventEmitter.removeListener("enter", this.onEnter);
        Visivi.eventEmitter.removeListener("KEY_R", this.repeat);

        this.onUnFocus();
    }

    onFocus(): void {}
    onUnFocus(): void {}
    onEnter(): void {
        this.props.onenter?.();
    }

    repeat(): void {
        console.log("REPEAT");
        if(VisiviTTS.isSpeaking) {
            VisiviTTS.stop();
        } else {
            VisiviTTS.speak(String(this.props.children));
        }
    }

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
