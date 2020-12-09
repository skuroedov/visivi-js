import React from 'react';

export default abstract class VisiviContainer<P> extends React.Component<P> {
    abstract render(): JSX.Element;
}
