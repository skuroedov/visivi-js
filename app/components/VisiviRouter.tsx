import React from "react";
import {Redirect, Route, Router} from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import {Settings} from "./screens/settings/Settings";
import {ThemeSettings} from "./screens/settings/ThemeSettings";
import VisiviHistory from "../providers/VisiviHistory";
import {FontSizeSettings} from "./screens/settings/FontSizeSettings";
import {Categories} from "./screens/apps/Categories";
import AppList from "./screens/apps/AppList";
import NoteList from "./screens/notes/NoteList";
import NewNote from "./screens/notes/NewNote";
import Note from "./screens/notes/Note";

export default class VisiviRouter extends React.Component {
    render() {
        return <Router history={VisiviHistory}>
            <Redirect from="/" to="/home" />
            <Route path="/home" component={MainScreen} />
            <Route path="/settings" component={Settings} />
            <Route path="/themeSettings" component={ThemeSettings} />
            <Route path="/fontSizeSettings" component={FontSizeSettings} />

            <Route path="/notes/list" component={NoteList} />
            <Route path="/notes/new" component={NewNote} />
            <Route path="/notes/note/:file" component={Note} />

            <Route path="/apps/categories" component={Categories} />
            <Route path="/app/category/:category" component={AppList} />
        </Router>
    }
}
