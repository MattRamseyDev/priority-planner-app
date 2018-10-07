import React from 'react';
import moment from 'moment';

const CompletedListItem = (props) => (
    <div>
        <p>{props.description} - Completed on {moment(props.completedAt).format("ddd, MMMM Do")}<button
            onClick={(e) => props.undoHandler()}
        >Undo</button></p>
        
    </div>
)

export default CompletedListItem;