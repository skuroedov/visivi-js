import {ChildProcess, exec} from "child_process";

export default class VisiviTTS {
    private static process?: ChildProcess;

    public static speak(text: string): void {
        this.process = exec(`espeak -v czech "${text}"`);
    }

    public static stop() {
        this.process?.kill("SIGINT");
    }
}
