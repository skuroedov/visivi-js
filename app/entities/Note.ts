export default class Note {
    private readonly created: number;
    private edited: number;
    private name: string;
    private content: string;

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
}
