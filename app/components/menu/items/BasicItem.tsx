import {MenuItem, PMenuItem} from '../MenuItem';
import Visivi from '../../Visivi';
import {ReactNode} from 'react';

interface Props extends PMenuItem {
    opens: ReactNode;
}

export default class BasicItem extends MenuItem<Props> {
    onEnter(): void {
        Visivi.eventEmitter.emit("unmount");
        // @ts-ignore
        Visivi.instance.setState({content: this.props.opens});
    }
}
