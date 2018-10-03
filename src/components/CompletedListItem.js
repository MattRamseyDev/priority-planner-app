import React from 'react';

const CompletedListItem = (props) => (
    <div>
        <p>{props.description}<button
            onClick={(e) => props.undoHandler()}
        >Undo</button></p>
        
    </div>
)

export default CompletedListItem;