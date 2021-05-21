import {MenuItem, PMenuItem} from '../MenuItem';
import React from 'react';
import {Link} from 'react-router-dom';
import VisiviHistory from "../../../providers/VisiviHistory";
import Visivi from "../../Visivi";

interface PBasicItem extends PMenuItem {
    opens: string;
}

export default class BasicItem extends MenuItem<PBasicItem> {
    onEnter(): void {
        Visivi.eventEmitter.removeListener("KEY_R", this.repeat);
        VisiviHistory.push(this.props.opens);
    }

    render(): JSX.Element {
        return <Link to={this.props.opens} style={{textDecoration: 'none', color: 'inherit'}}>
            {super.render()}
        </Link>
    }
}
