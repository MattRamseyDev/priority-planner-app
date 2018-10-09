import React from 'react';

const GoalListItem = (props) => (
    <div>
        <p>{props.description}
            <button onClick={e => props.onRemove()}>X</button>
        </p>
    </div>
)

export default GoalListItem;