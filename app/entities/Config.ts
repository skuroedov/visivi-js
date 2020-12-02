export default abstract class Config {
    private _theme = 'black_white';

    public set theme(value: string) {
        this._theme = value;
    }

    public get theme(): string {
        return this._theme;
    }
}
