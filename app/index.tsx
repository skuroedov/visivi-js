import React, {Fragment} from 'react';
import {render} from 'react-dom';
import {AppContainer as ReactHotAppContainer} from 'react-hot-loader';
import './app.global.css';
import Visivi from './containers/Visivi';
import Menu from './containers/Menu/Menu';
import MenuItem from './components/MenuItem/MenuItem';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
    render(
        <AppContainer>
            <Visivi>
                <Menu>
                    <MenuItem opens={<div>file manager</div>}>Průzkumník souborů</MenuItem>
                    <MenuItem opens={<div>notes</div>}>Poznámky</MenuItem>
                    <MenuItem opens={<div>settings</div>}>Nastavení</MenuItem>
                </Menu>
            </Visivi>
        </AppContainer>,
        document.getElementById('app')
    );
});
