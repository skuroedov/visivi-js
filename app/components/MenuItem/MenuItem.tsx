import React, {ReactNode} from 'react';
import Visivi from '../../containers/Visivi';
import styles from './MenuItem.css';

type Props = {
    children: ReactNode;
    opens: ReactNode;
}

export default class MenuItem extends React.Component<Props> {
    onClick(): void {
        Visivi.instance.setState({content: this.props.opens});
    }

    render(): JSX.Element {
        return <div className={styles.menuItem} onClick={() => this.onClick()}>{this.props.children}</div>;
    }
}
