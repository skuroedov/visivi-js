import React from "react";
import {Redirect, Route, Router} from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import {Settings} from "./screens/settings/Settings";
import {ThemeSelector} from "./screens/settings/ThemeSelector";
import VisiviHistory from "../providers/VisiviHistory";
import {FontSizeSettings} from "./screens/settings/FontSizeSettings";

export default class VisiviRouter extends React.Component {
    render() {
        return <Router history={VisiviHistory}>
            <Redirect from="/" to="/home" />
            <Route path="/home" component={MainScreen} />
            <Route path="/settings" component={Settings} />
            <Route path="/themeSelector" component={ThemeSelector} />
            <Route path="/fontSizeSettings" component={FontSizeSettings} />
        </Router>
    }
}
