import VisiviProcess, {exec} from "../entities/VisiviProcess";

export default class VisiviTTS {
    private static process?: VisiviProcess;

    public static speak(text: string): void {
        this.process = exec(`espeak -v czech "${text}"`);
    }

    public static stop() {
        this.process?.kill("SIGINT");
    }
}
