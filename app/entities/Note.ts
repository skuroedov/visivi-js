export default class Note {
    protected created: number;
    protected edited: number;
    protected name: string;
    protected content: string;

    constructor(name: string, content: string) {
        this.name = name;
        this.content = content;
        this.created = Date.now();
        this.edited = this.created;
    }

    get getName(): string {
        return this.name;
    }

    set setName(value: string) {
        this.name = value;
        this.edited = Date.now();
    }

    get getContent(): string {
        return this.content;
    }

    set setContent(value: string) {
        this.content = value;
        this.edited = Date.now();
    }

    get getCreated(): number {
        return this.created;
    }

    get getEdited(): number {
        return this.edited;
    }

    static fromObj(obj: object): Note {
        // @ts-ignore
        let note = new Note(obj.name, obj.content);
        // @ts-ignore
        note.created = obj.created;
        // @ts-ignore
        note.edited = obj.edited;
        return note;
    }
}
