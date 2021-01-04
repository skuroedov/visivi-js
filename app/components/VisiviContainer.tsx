import React, {ReactNode} from 'react';
import Visivi from "./Visivi";

export interface PVisiviContainer {
    children?: ReactNode;
}

export interface SVisiviContainer {
    focused: number,
}

export default abstract class VisiviContainer<P extends PVisiviContainer = PVisiviContainer, S extends SVisiviContainer = SVisiviContainer> extends React.Component<P, SVisiviContainer> {
    protected constructor(props: P, state: S) {
        super(props, state);
        this.state = {
            focused: 0,
        };

        addEventListener("keyup", e => this.keyListener(e));
    }

    keyListener(e: KeyboardEvent) {
        switch(e.key) {
            case "ArrowUp":
                if(this.state.focused - 1 >= 0)
                    this.setState({focused: this.state.focused-1});
                break;
            case "ArrowDown":
                if(this.state.focused + 1 < React.Children.count(this.props.children))
                    this.setState({focused: this.state.focused+1});
                break;
            case "Enter":
                Visivi.eventEmitter.emit("enter")
        }
    }

    abstract render(): JSX.Element;
}
