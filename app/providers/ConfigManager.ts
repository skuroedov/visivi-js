import Config from '../entities/Config';

const fs = require('fs');
const os = require('os');

const path = `${os.homedir()}/.config/visivi.conf`;

export default class ConfigManager {
    private _config!: Config;

    constructor() {
        let fd;
        try {
            fd = this.readConfig();
        } catch (e) {
            this.generateConfig();
            fd = this.readConfig();
        }
        this._config = JSON.parse(fd);
    }

    generateConfig = () => {
        fs.copyFileSync('./resources/config', path);
    };

    private readConfig(): string {
        return fs.readFileSync(path);
    }

    static updateConfig = (value: Config) => {
        fs.writeFile(path, JSON.stringify(value));
    };

    get getConfig(): Config {
        return this._config;
    }

    set getConfig(value: Config) {
        this._config = value;
    }
}
