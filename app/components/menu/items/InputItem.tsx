import {MenuItem, PMenuItem} from "../MenuItem";
import React from "react";

interface PInputItem extends PMenuItem {
    value: React.RefObject<HTMLInputElement>;
}

export default class InputItem extends MenuItem<PInputItem> {
    defaultClasses = this.styles.item + " " + this.styles.input;
    focussedClasses = this.defaultClasses + " " + this.styles.focused;

    render(): JSX.Element {
        return super.render(<>
            <label>{this.props.children}</label>
            <input type="text" ref={this.props.value} />
        </>);
    }

    onEnter() {
        this.props.value.current?.focus();
    }

    onEsc() {
        this.props.value.current?.blur();
        this.repeat();
    }

    protected TTSText(): string {
        let content = this.props.value.current?.value;
        return `Vstupní pole ${String(this.props.children)} ${(content ?? "").length > 0 ? content : "Prázdné"}`;
    }
}
