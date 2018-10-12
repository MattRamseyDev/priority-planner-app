import React from 'react';
import { connect } from 'react-redux';
import GoalListItem from './GoalListItem';
import { removeGoal } from '../actions/goals';
import { setGoalFilter } from '../actions/filters';


const GoalList = (props) => (
    <div>
        {props.goals.map((goal) => {
            return <GoalListItem 
                key={goal.id}
                {...goal}
                onPickGoal={(e) => props.dispatch(setGoalFilter(goal))}
            />
        })}
    </div>
);

const mapStateToProps = (state) => ({
    goals: state.goals
})

export default connect(mapStateToProps)(GoalList);