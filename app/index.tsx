import React, {Fragment} from 'react';
import {render} from 'react-dom';
import {AppContainer as ReactHotAppContainer} from 'react-hot-loader';
import './app.global.css';
import Visivi from './components/Visivi';
import Menu from './components/menu/Menu';
import BasicItem from './components/menu/items/BasicItem';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
    render(
        <AppContainer>
            <Visivi>
                <Menu>
                    <BasicItem opens={<div>file manager</div>}>Průzkumník souborů</BasicItem>
                    <BasicItem opens={<div>notes</div>}>Poznámky</BasicItem>
                    <BasicItem opens={<div>settings</div>}>Nastavení</BasicItem>
                </Menu>
            </Visivi>
        </AppContainer>,
        document.getElementById('app')
    );
});
