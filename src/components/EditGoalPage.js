import React from 'react';
import { connect } from 'react-redux';
import GoalForm from './GoalForm';
import {addGoal, editGoal, removeGoal} from '../actions/goals';

const EditGoalPage = (props) => {
    return (
        <div>
            <p>{props.goal.description}</p>
            <GoalForm 
                goal={props.goal}
                onSubmit={(newGoal) => {
                    props.dispatch(editGoal(props.goal.id, newGoal))
                    props.history.push('/goals');
                    }}
            />
            <button onClick={() => {
                props.dispatch(removeGoal(props.goal.id));
                props.history.push('/goals');
            }}>Remove Goal</button>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    goal: state.goals.find((goal) => goal.id === props.match.params.id) // undefined after refresh
})

export default connect(mapStateToProps)(EditGoalPage);