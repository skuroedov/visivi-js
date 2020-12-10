export default interface Theme {
    name: string;
    value: string;
}

function theme(name: string, value: string): Theme {
    return {name: name, value: value};
}

export const THEME_BLACK_WHITE: Theme = theme("Černobílé", "black_white");
export const THEME_WHITE_BLACK: Theme = theme("Bíločerné", "white_black");
export const THEME_YELL_BLACK: Theme = theme("Žlutočerné", "yellow_black");

export const THEMES: Theme[] = [
    THEME_BLACK_WHITE,
    THEME_WHITE_BLACK,
    THEME_YELL_BLACK];

