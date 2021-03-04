import {join} from "path";
import {EOL} from "os";
import DesktopFile from "../entities/DesktopFile";

const fs = require('fs');
const os = require('os');

export default class DesktopAppList {
    private desktopFiles: DesktopFile[] = [];
    private _categories: string[] = [];

    constructor() {
        const dirs = ["/usr/share/applications", join(os.homedir(), ".local/share/applications")];
        dirs.forEach(dir => this.getRawFilesFromFolder(dir));
    }


    private getRawFilesFromFolder(path: string): void {
        fs.readdirSync(path)
            .filter((filename: string) => filename.endsWith(".desktop"))
            .forEach((filename: string) => this.desktopFiles.push(this.parseFile(join(path, filename))));
    }

    private parseFile(file: string): DesktopFile {
        const content: string = fs.readFileSync(file).toString();
        let desktopFile = new DesktopFile();
        const relevant = Object.getOwnPropertyNames(desktopFile);
        const relevantLowerCase = Object.getOwnPropertyNames(desktopFile).map(property => property.toLowerCase());

        content.split(EOL).forEach(line => {
            let substr: string[] = line.split("=");

            if (relevantLowerCase.includes(substr[0].toLowerCase())) {
                const i = relevantLowerCase.indexOf(substr[0].toLowerCase());
                if (substr[0] == "Categories") {
                    substr[1] = substr[1].slice(0, -1);

                    let categories = substr[1].split(";");
                    desktopFile.categories = categories;
                    categories.forEach(category => {
                        if(!this.categories.includes(category)) {
                            this.categories.push(category);
                        }
                    })
                } else {
                    // @ts-ignore
                    desktopFile[relevant[i]] = substr[1];
                }
            }
        });

        return desktopFile;
    }

    get get(): DesktopFile[] {
        return this.desktopFiles;
    }

    get categories(): string[] {
        return this._categories;
    }
}
