import * as Original from "child_process";
import EventEmitter from "events";
import {EOL} from "os";


export default class VisiviProcess extends EventEmitter {
    readonly childProcess: Original.ChildProcess;
    private _killed: boolean = false;

    constructor(childProcess: Original.ChildProcess) {
        super();

        this.childProcess = childProcess;
    }

    kill(signal?: NodeJS.Signals | number, force: boolean = false): boolean {
        let res: boolean = false;

        if(this._killed) return res;

        const pid = this.childProcess.pid;
        this.childProcess.kill(signal);

        exec(`ps -o pid= --ppid ${pid}`, err => {
            if(!err) {
                if(force) {
                    this.killEverything(pid);
                    res = true;
                } else {
                    res = false;
                }
            }
        });

        this._killed = res;
        return res;
    }

    private killEverything(pid: number) {
        console.log(pid);
        exec(`ps -o pid= --ppid ${pid}`, (err, stdout) => {
            console.log(err);

            stdout.split(EOL).forEach((line: string) => {
                const num = Number(line);
                if (num > 0) {
                    this.killEverything(num);

                    console.log(`Killing process ${num}`);
                    exec(`kill -9 ${num}`)
                }
            });
        });
    }

    get killed(): boolean {
        return this._killed;
    }
}

export function exec(command: string, callback?: ((error: Original.ExecException | null, stdout: string, stdin: string) => void) | undefined) {
    return new VisiviProcess(Original.exec(command, callback));
}
