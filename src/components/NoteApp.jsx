import React from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteListArchived from "./NoteListArchived";

class NoteApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(),
            resetNotes: getInitialData(),
            keyword: '',
        }

        this.handleKeyword = this.handleKeyword.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        const resetNotes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes, resetNotes });
    }

    handleKeyword(keyword){
        if (keyword === "") {
            this.setState({ notes: this.state.resetNotes, keyword });
        } else {
            const notes = this.state.notes.filter((note) =>
                note.title.toLowerCase().includes(keyword.toLowerCase())
            );
            this.setState({ notes, keyword });
        }
    }

    onAddNoteHandler({title, body}){this.setState((prevState) => {
            return {
                notes: [
                ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: Date.now(),
                        archived: false
                    }
                ],
                resetNotes: [
                ...prevState.resetNotes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: Date.now(),
                        archived: false
                    }
                ],
            }
        })
    }

    onArchivedHandler(id){
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) =>
              note.id === id ? { ...note, archived: !note.archived } : note
            ),
            resetNotes: prevState.resetNotes.map((note) =>
              note.id === id ? { ...note, archived: !note.archived } : note
            ),
        }));
    }

    render(){
        return (
            <div>
                <NoteHeader sendKeyword={this.handleKeyword} />
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan aktif</h2>
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} />
                    <h2>Arsip</h2>
                    <NoteListArchived notes={this.state.notes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} />
                </div>
            </div>
        )
    }
}

export default NoteApp;