import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { addTodo } from '../actions/todos';


const GoalListItem = (props) => (
    <div>
        <p>{props.description}</p>
        <TodoForm goal={props.id}
          onTodoSubmit={(todo) => {
            props.dispatch(addTodo({ ...todo, goal: props.goal }));
            // props.dispatch(addGoalTodo(props.id, newTodo.todo.id));
          }}
        />
        <Link to={`/goals/${props.id}`}><button>Edit Goal</button></Link>
    </div>
)

const mapStateToProps = (state, props) => {
  return {
    filters: state.filters,
  }
}

export default connect(mapStateToProps)(GoalListItem);