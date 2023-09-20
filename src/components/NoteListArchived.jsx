import React from "react";
import NoteItem from "./NoteItem";

function NoteListArchived({ notes, onDelete, onArchived }) {
  const archivedNotes = notes.filter((note) => note.archived);

  if (archivedNotes.length < 1) {
    return(
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    )
  } else {
    return (
      <div className="notes-list">
        {archivedNotes.map((note) => (
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

export default NoteListArchived;
