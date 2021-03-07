import Menu from "../../menu/Menu";
import {PVisiviComponent} from "../../VisiviComponent";
import React, {ReactElement} from "react";
import DesktopAppList from "../../../providers/DesktopAppList";
import BasicItem from "../../menu/items/BasicItem";

export class Categories extends Menu {
    constructor(props: PVisiviComponent) {
        super(props);

        let items: ReactElement[] = [];

        new DesktopAppList()
            .categories
            .sort((a,b) => 0 - (a > b ? -1 : 1))
            .forEach((category: string) => {
                items.push(React.createElement(BasicItem, {
                    children: category,
                    opens: `/app/category/${category}`,
                }));
            });

        this.items = items;
    }
}
