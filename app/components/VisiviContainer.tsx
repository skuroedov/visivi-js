import React from 'react';
import Visivi from "./Visivi";
import VisiviComponent, {PVisiviComponent} from "./VisiviComponent";
import VisiviHistory from "../providers/VisiviHistory";

export interface SVisiviContainer {
    focused: number,
}

export default abstract class VisiviContainer<P = PVisiviComponent, S extends SVisiviContainer = SVisiviContainer> extends VisiviComponent<P, S> {
    defaultClasses = this.styles.visiviContainer;
    childCount: number;

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
        console.log([Date.now(), e])
        switch(e.key) {
            case "ArrowUp":
                if(this.state.focused - 1 >= 0) {
                    this.setState({focused: this.state.focused - 1});
                }
                break;
            case "ArrowDown":
                if(this.state.focused + 1 < this.childCount) {
                    this.setState({focused: this.state.focused + 1});
                }
                break;
            case "Enter":
                Visivi.eventEmitter.emit("enter")
                break;
            case "Escape":
                VisiviHistory.goBack();
                break;
        }
    }

    render(items = this.props.children): JSX.Element {
        return <div className={this.classes}>
            {this.renderItems(this.state.focused, items)}
        </div>;
    }

    renderItems(focused: number, items = this.props.children) {
        return React.Children.map(items, (child, index) => {
            // @ts-ignore
            return React.cloneElement(child, {focused: (focused == index)});
        });
    }

    componentWillUnmount() {
        removeEventListener("keyup", this.keyListener);
    }
}
