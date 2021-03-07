import Menu from "../../menu/Menu";
import {PVisiviComponent} from "../../VisiviComponent";
import React, {ReactElement} from "react";
import {AppItem} from "./AppItem";
import {RouteComponentProps, match} from "react-router";
import DesktopAppList from "../../../providers/DesktopAppList";

interface PAppList extends PVisiviComponent, RouteComponentProps {
    match: match<{ category: string }>;
}

export default class AppList extends Menu<PAppList> {
    constructor(props: PAppList) {
        super(props);

        let items: ReactElement[] = [];
        new DesktopAppList()
            .get
            .filter(DesktopAppList.filterDisplayable)
            .filter(desktopFile => desktopFile.categories?.includes(this.props.match.params.category))
            .sort((a,b) => 0 - (a > b ? -1 : 1))
            .forEach(desktopFile => {
                items.push(React.createElement(AppItem, {
                    children: desktopFile.name,
                    exec: desktopFile.exec,
                }));
            });

        this.items = items;
    }
}
