import React from 'react';

export default abstract class VisiviContainer<P, S = {}> extends React.Component<P, S> {
    abstract render(): JSX.Element;
}
