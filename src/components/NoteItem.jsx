import React from "react";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemDate from "./NoteItemDate";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";

function NoteItem({id, title, createdAt, body, archived, onDelete, onArchived}) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <NoteItemTitle title={title} />
                <NoteItemDate createdAt={createdAt} />
                <NoteItemBody body={body} />
            </div>
            <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchived={onArchived} />
        </div>
    );
}

export default NoteItem;