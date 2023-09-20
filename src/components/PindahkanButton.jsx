import React from "react";

function PindahkanButton({id, onArchived}){
    return <button className="note-item__archive-button" onClick={() => onArchived(id)}>Pindahkan</button>
}

export default PindahkanButton;