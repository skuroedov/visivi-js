import {MenuItem} from "../MenuItem";
import React from "react";

export default class InputItem extends MenuItem {
    input: React.RefObject<HTMLInputElement> = React.createRef();
    defaultClasses = this.styles.item + " " + this.styles.input;
    focussedClasses = this.defaultClasses + " " + this.styles.focused;

    render(): JSX.Element {
        return super.render(<>
            <label>{this.props.children}</label>
            <input type="text" ref={this.input} />
        </>);
    }

    get value(): any {
        return this.input.current?.value;
    }
}
