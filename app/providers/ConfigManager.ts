import Config from '../entities/Config';

const fs = require('fs');
const os = require('os');

const path = `${os.homedir()}/.config/visivi.conf`;

export default class ConfigManager {
    private _config: Config;

    constructor() {
        let fd;
        try {
            fd = this.readConfig();
        } catch (e) {
            fs.copyFileSync('./resources/config', path);
            fd = this.readConfig();
        }
        this._config = JSON.parse(fd);
    }

    private readConfig(): string {
        return fs.readFileSync(path);
    }

    private updateConfig(): void {
        fs.writeFile(path, JSON.stringify(this._config), null);
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
