import React from 'react';
import { connect } from 'react-redux';
import GoalListItem from './GoalListItem';
import { removeGoal } from '../actions/goals';


const GoalList = (props) => (
    <div>
        {props.goals.map((goal) => {
            return <GoalListItem 
                key={goal.id}
                {...goal}
                onRemove={() => props.dispatch(removeGoal(goal.id))}
            />
        })}
    </div>
);

const mapStateToProps = (state) => ({
    goals: state.goals
})

export default connect(mapStateToProps)(GoalList);