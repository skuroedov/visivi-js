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

    public save(filename: string, note: Note): void {
        this.checkDir();

        fs.writeFileSync(this.dir + filename, JSON.stringify(note));
    }

    public new(name: string, content: string): Note {
        let note = new Note(name, content);
        let date = new Date(note.getCreated);
        const filename = "note_" + this.formatDate(date) + ".json";
        this.save(filename, note);
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

    public list(): any[] {
        this.checkDir();

        let notes: any[] = [];
        fs.readdirSync(this.dir, {withFileTypes: true}).forEach(file => {
            if(file.name.endsWith(".json")) {
                notes.push([file.name, this.getNote(file.name)]);
            }
        });
        return notes;
    }

    public getNote(filename: string): Note {
        this.checkDir();

        let obj = JSON.parse(fs.readFileSync(path.join(this.dir, filename)).toString());
        return Note.fromObj(obj);
    }
}
