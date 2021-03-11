import VisiviProcess, {exec} from "../entities/VisiviProcess";

export default class VisiviTTS {
    private static process?: VisiviProcess;
    private static _usable: boolean = true;
    private static buffer: string;

    public static speak(text: string, force: boolean = false): void {
        if (this.usable) {
            this.stop();
            this.execEspeak(text);
        } else {
            if(force) {
                this.buffer = "";
                this.execEspeak(text);
            }
            this.buffer = text;
        }
    }

    public static stop() {
        this.process?.kill("SIGINT", true);
        this.buffer = "";
    }

    public static wait(time: number) {
        this.usable = false;
        setTimeout(() => this.usable = true, time);
    }

    public static get isSpeaking() {
        return !this.process?.killed;
    }

    private static set usable(value: boolean) {
        console.log("set usable from " + String(this._usable) + " to " + String(value));
        if (!this._usable && value) {
            if (this.buffer.length > 0) {
                this.execEspeak(this.buffer);
                this.buffer = "";
            }
        }
        this._usable = value;
    }

    private static get usable() {
        return this._usable;
    }

    private static execEspeak(text: string) {
        this.process = exec(`espeak -v czech "${text}"`);
    }
}
