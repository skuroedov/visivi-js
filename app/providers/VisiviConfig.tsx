import ConfigManager from "./ConfigManager";
import Config from "../entities/Config";
import Visivi from "../components/Visivi";

export default class VisiviConfig {
    configManager: ConfigManager;

    constructor(configManager: ConfigManager) {
        this.configManager = configManager;
    }

    get(key: string) {
        // @ts-ignore
        return this.configManager.config[key];
    }

    set(config: Config) {
        Visivi.instance.setState(config);
        this.configManager.set(config);
    }
}
