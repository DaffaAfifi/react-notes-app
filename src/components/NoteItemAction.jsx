import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import PindahkanButton from "./PindahkanButton";

function NoteItemAction({id, archived, onDelete, onArchived}){
    if(!archived){
        return(
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchiveButton id={id} onArchived={onArchived} />
            </div>
        )
    } else {
        return(
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <PindahkanButton id={id} onArchived={onArchived} />
            </div>
        )
    }
}

export default NoteItemAction;