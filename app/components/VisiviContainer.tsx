import React from 'react';
import Visivi from "./Visivi";
import VisiviComponent, {PVisiviComponent} from "./VisiviComponent";
import VisiviTTS from "../providers/VisiviTTS";

export interface PVisiviContainer extends PVisiviComponent {
    title?: string;
}

export interface SVisiviContainer {
    focused: number,
}

export default abstract class VisiviContainer<P extends PVisiviContainer = PVisiviContainer, S extends SVisiviContainer = SVisiviContainer> extends VisiviComponent<P, S> {
    defaultClasses = this.styles.visiviContainer;
    childCount: number;
    title: string = "";

    protected constructor(props: P) {
        super(props);
        this.state = {
            focused: 0,
        } as S;

        this.keyListener = this.keyListener.bind(this);
        addEventListener("keyup", this.keyListener);

        this.childCount = React.Children.count(this.props.children);
    }

    keyListener(e: KeyboardEvent) {
        switch(e.key) {
            case "ArrowUp":
                if(this.state.focused - 1 >= 0) {
                    this.setState({focused: this.state.focused - 1});
                } else {
                    VisiviTTS.speak("Upozornění: začátek");
                }
                break;
            case "ArrowDown":
                if(this.state.focused + 1 < this.childCount) {
                    this.setState({focused: this.state.focused + 1});
                } else {
                    VisiviTTS.speak("Upozornění: konec");
                }
                break;
            case "Enter":
                Visivi.eventEmitter.emit("enter")
                break;
            case "Escape":
                this.onEsc();
                break;
            /**
             * Key: R
             * Primary function: Repeat
             */
            case "r":
                Visivi.eventEmitter.emit("KEY_R");
                break;
        }
    }

    render(items = this.props.children): JSX.Element {
        return <div className={this.classes}>
            <div><h1>{this.props.title ?? this.title}</h1></div>
            {this.renderItems(this.state.focused, items)}
        </div>;
    }

    renderItems(focused: number, items = this.props.children) {
        return React.Children.map(items, (child, index) => {
            // @ts-ignore
            return React.cloneElement(child, {focused: (focused == index)});
        });
    }

    componentDidMount() {
        VisiviTTS.speak(this.props.title ?? this.title, true);
        VisiviTTS.wait(1500);
    }

    componentWillUnmount() {
        removeEventListener("keyup", this.keyListener);
    }

    abstract onEsc(): void;
}
