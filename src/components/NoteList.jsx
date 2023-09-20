import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchived }) {
  const activeNotes = notes.filter((note) => !note.archived);

  if (activeNotes.length < 1) {
    return(
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    )
  } else {
    return (
      <div className="notes-list">
        {activeNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchived={onArchived}
            {...note}
          />
        ))}
      </div>
    );
  }
}

export default NoteList;
