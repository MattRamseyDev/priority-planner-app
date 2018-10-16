import React from 'react';
import {connect} from 'react-redux';
import GoalForm from './GoalForm';
import { addGoal } from '../actions/goals';

const NewGoalPage = (props) => (
    <div>
        <GoalForm 
            onSubmit={({description}) => {
                const newGoal = props.dispatch(addGoal(description));
                props.history.push(`/goals/${newGoal.goal.id}`)
            }}
        />
    </div>
);

export default connect()(NewGoalPage);