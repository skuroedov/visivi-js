import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import Visivi from './components/Visivi';

export default function Routes() {
    return (
        <Visivi>
            <Switch>
                <Route path={routes.HOME} component={Visivi} />
            </Switch>
        </Visivi>
    );
}
