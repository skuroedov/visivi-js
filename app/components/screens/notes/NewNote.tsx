import {NoteEditor} from "./NoteEditor";
import Visivi from "../../Visivi";
import VisiviHistory from "../../../providers/VisiviHistory";

export default class NewNote extends NoteEditor {
    onSubmit(name: string, content: string) {
        Visivi.notesManager.new(name, content);
        VisiviHistory.goBack();
    }
}
