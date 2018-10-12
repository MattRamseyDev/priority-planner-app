import React from 'react';
import {Link} from 'react-router-dom';

const GoalListItem = (props) => (
    <div>
        <p>
            <span>{props.description}</span>
            <Link to={`/goals/${props.id}`}><button onClick={(e) => props.onPickGoal()}>Edit</button></Link>
        </p>
    </div>
)

export default GoalListItem;