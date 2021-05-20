import {NoteEditor} from "./NoteEditor";
import Visivi from "../../Visivi";
import {RouteComponentProps, match} from "react-router";
import {PVisiviContainer} from "../../VisiviContainer";
import Note from "../../../entities/Note";
import VisiviHistory from "../../../providers/VisiviHistory";

interface PEditNote extends PVisiviContainer, RouteComponentProps {
    match: match<{ file: string }>;
}

export default class EditNote extends NoteEditor<PEditNote> {
    note: Note;

    constructor(props: PEditNote) {
        super(props);

        this.note = Visivi.notesManager.getNote(this.props.match.params.file);
    }

    componentDidMount() {
        super.componentDidMount();
        this.setValues(this.note.getName, this.note.getContent);
    }

    onSubmit(name: string, content: string) {
        this.note.setName = name;
        this.note.setContent = content;
        Visivi.notesManager.save(this.props.match.params.file, this.note);
        VisiviHistory.goBack();
    }
}
