import React from 'react';
import { connect } from 'react-redux';
import GoalForm from './GoalForm';
import {addGoal, editGoal, removeGoal} from '../actions/goals';
import { addTodo } from '../actions/todos';

const EditGoalPage = (props) => {
    return (
        <div>
            <GoalForm 
                goal={props.goal}
                onTodoSubmit={(todo) => {
                  props.dispatch(addTodo({ ...todo, lists: [props.filters.list], goal: props.goal}))
                }}
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

const mapStateToProps = (state, props) => {
    const goal = state.goals.find((goal) => goal.id === props.match.params.id); // undefined after refresh
    const filters = {...state.filters, goal: goal.id}
    return {
        goal,
        filters
    }
}

export default connect(mapStateToProps)(EditGoalPage);