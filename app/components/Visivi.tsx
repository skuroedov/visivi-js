import React from 'react';
import styles from './Visivi.css';
import ConfigManager from '../providers/ConfigManager';
import {THEME_BLACK_WHITE} from "../constants/themes";
import {EventEmitter} from "events";
import VisiviRouter from "./VisiviRouter";

interface SVisivi {
    theme: string;
}

export default class Visivi extends React.Component<{}, SVisivi> {
    private static _instance: Visivi;
    private static _configManager: ConfigManager;
    // @ts-ignore
    private static _mespeak;
    private static _eventEmitter: EventEmitter;

    constructor() {
        super({});

        Visivi._instance = this;
        Visivi._configManager = new ConfigManager();
        Visivi._mespeak = require("mespeak");
        Visivi._eventEmitter = new EventEmitter();

        Visivi._mespeak.loadConfig(require("mespeak/src/mespeak_config.json"));
        Visivi._mespeak.loadVoice(require("mespeak/voices/cs.json"));

        this.state = {
            theme: Visivi.configManager.config.theme ?? THEME_BLACK_WHITE.value,
        };
    }

    render(): JSX.Element {
        const classes = `${styles.visiviContainer} ${styles[this.state.theme]}`;
        return <div className={classes}>
            <VisiviRouter />
        </div>;
    }

    static get instance(): Visivi {
        return this._instance;
    }

    static get configManager(): ConfigManager {
        return this._configManager;
    }

    static get TTS() {
        return Visivi._mespeak
    }

    static get eventEmitter() {
        return Visivi._eventEmitter;
    }

    static set theme(value: string) {
        if(Visivi._instance.state.theme != value) {
            Visivi.configManager.set({theme: value});
            Visivi.instance.setState({theme: value});
        }
    }

    static resetTheme(): void {
        Visivi.instance.setState({theme: THEME_BLACK_WHITE.name});
    }
}
