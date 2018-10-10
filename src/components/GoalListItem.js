import React from 'react';
import {Link} from 'react-router-dom';

const GoalListItem = (props) => (
    <div>
        <p>
            <Link to={`/goals/${props.id}`}>
                <span>{props.description}</span>
            </Link>
            <button onClick={e => props.onRemove()}>X</button>
        </p>
    </div>
)

export default GoalListItem;