import {ItemProps, MenuItem} from '../MenuItem';
import Visivi from '../../Visivi';
import {ReactNode} from 'react';

interface Props extends ItemProps{
    opens: ReactNode;
}

export default class BasicItem extends MenuItem<Props> {
    onClick(): void {
        Visivi.instance.setState({content: this.props.opens});
    }

    render(): JSX.Element {
        return this.renderDefault();
    }
}
