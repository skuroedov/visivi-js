import {exec} from "./VisiviProcess";

export default class DesktopFile {
    name!: string;
    comment?: string;
    icon?: string;
    exec!: string;
    categories?: string[];
    noDisplay?: boolean;
}

export function startApp(script: string, callback: () => void) {
    let process = exec(script);
    let orca = exec("orca");

    process.childProcess.on("exit", () => {
        orca.childProcess.emit("exit");
        callback();
    });
}
