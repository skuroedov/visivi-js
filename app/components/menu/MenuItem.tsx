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
    active: boolean = false;

    constructor(props: P) {
        super(props);
        this.state = {
            focused: false
        } as S;

        this.repeat = this.repeat.bind(this);
    }

    focus(): void {
        this.classes = this.focussedClasses;

        this.timeout = setTimeout(() => {VisiviTTS.speak(this.TTSText())}, 250);

        Visivi.eventEmitter.on("KEY_R", this.repeat);

        this.onFocus?.();
    }

    unFocus(): void {
        this.classes = this.defaultClasses;

        clearTimeout(this.timeout!);
        Visivi.eventEmitter.removeListener("KEY_R", this.repeat);

        this.onUnFocus?.();
    }

    onFocus?(): void;
    onUnFocus?(): void;

    enter(): void {
        this.props.onenter?.();
        this.active = true;
        this.onEnter?.();
    }

    esc(): void {
        this.active = false;
        this.onEsc?.();
    }

    onEnter?(): void;
    onEsc?(): void;

    repeat(): void {
        console.log("REPEAT: "+this.TTSText());
        if(VisiviTTS.isSpeaking) {
            VisiviTTS.stop();
        } else {
            VisiviTTS.speak(this.TTSText());
        }
    }

    protected TTSText(): string {
        return String(this.props.children);
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

    componentWillUnmount() {
        Visivi.eventEmitter.removeListener("KEY_R", this.repeat);
    }
}
