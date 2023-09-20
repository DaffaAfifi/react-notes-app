import React from "react";
import { showFormattedDate } from "../utils";

function NoteItemDate({createdAt}){
    const date = showFormattedDate(createdAt);

    return(
        <p className="note-item__date">{date}</p>
    );
}

export default NoteItemDate;