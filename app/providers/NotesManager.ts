import * as os from "os";
import Note from "../entities/Note";
import fs from "fs";
import path from "path";

export default class NotesManager {
    private dir = path.join(os.homedir(), "/Visivi/Notes/");

    constructor() {
        this.checkDir();
    }

    private checkDir() {
        if (!fs.existsSync(this.dir)){
            fs.mkdirSync(this.dir, {recursive: true});
        }
    }

    public new(name: string, content: string): Note {
        this.checkDir();

        let note = new Note(name, content);
        let date = new Date(note.getCreated);
        const filename = "note_" + this.formatDate(date) + ".json";
        fs.appendFile(this.dir + filename, JSON.stringify(note), err => {
            if(err) console.log(err);
        });
        return note;
    }

    private formatDate(date: Date): string {
        const segments = [date.getFullYear(), date.getMonth()+1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
        let result = "";
        segments.forEach(value => {
            result += value > 9 ? String(value) : "0"+value;
        });
        return result;
    }
}
