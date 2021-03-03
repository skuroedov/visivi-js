import React from "react";
import stylesheet from "./Visivi.css";

export interface PVisiviComponent {
    children: React.ReactNode;
    tabIndex?: number;
}

export default abstract class VisiviComponent<P = {}, S = {}> extends React.Component<P, S> {
    styles = stylesheet;
    defaultClasses: string = "";
    classes: string = this.defaultClasses;
    selfRef: React.RefObject<any> = React.createRef();
}
