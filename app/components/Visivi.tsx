import React from 'react';
import styles from './Visivi.css';
import ConfigManager from '../providers/ConfigManager';
import {EventEmitter} from "events";
import VisiviRouter from "./VisiviRouter";
import Config from "../entities/Config";
import VisiviConfig from "../providers/VisiviConfig";

export default class Visivi extends React.Component<{}, Config> {
    private static _instance: Visivi;
    private static _configManager: ConfigManager;
    private static _config: VisiviConfig;
    private static _eventEmitter: EventEmitter;

    constructor() {
        super({});

        Visivi._instance = this;
        Visivi._configManager = new ConfigManager();
        Visivi._config = new VisiviConfig(Visivi.configManager);
        Visivi._eventEmitter = new EventEmitter();

        this.state = Visivi.configManager.config;
    }

    render(): JSX.Element {
        // @ts-ignore
        const classes = `${styles.visiviContainer} ${styles[this.state.theme]}`;
        const style = {fontSize: `${Visivi.config.get('fontSize')}pt`};
        return <div className={classes} style={style}>
            <VisiviRouter />
        </div>;
    }

    static get instance(): Visivi {
        return this._instance;
    }

    static get configManager(): ConfigManager {
        return this._configManager;
    }

    static get config(): VisiviConfig {
        return this._config;
    }

    static get eventEmitter() {
        return Visivi._eventEmitter;
    }
}
