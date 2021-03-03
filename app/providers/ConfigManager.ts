import Config from '../entities/Config';

const fs = require('fs');
const os = require('os');

const path = `${os.homedir()}/.config/visivi.conf`;

export default class ConfigManager {
    private _config: Config;
    private _defaultConfig: Config;

    constructor() {
        this._defaultConfig = this.readDefaultConfig();
        this._config = this.readConfig();
    }

    private readConfig(): Config {
        let fd;
        try {
            fd = fs.readFileSync(path);
            return JSON.parse(fd);
        } catch (e) {
            return this._defaultConfig;
        }
    }

    private readDefaultConfig(): Config {
        let fd;
        try {
            fd = fs.readFileSync('./resources/config');
        } catch (e) {
            console.log(e);
        }
        return JSON.parse(fd);
    }

    private updateConfig(): void {
        fs.writeFile(path, JSON.stringify(this._config), () => null);
    }

    get config(): Config {
        return this._config;
    }

    public set(config: Config) {
        for (let key in config) {
            // @ts-ignore
            this._config[key] = config[key];
        }
        this.updateConfig();
    }
}
