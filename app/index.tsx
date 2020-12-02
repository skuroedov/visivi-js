import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import './app.global.css';
import Visivi from './containers/Visivi';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
    render(
        <AppContainer>
            <Visivi />
        </AppContainer>,
        document.getElementById('app')
    );
});
