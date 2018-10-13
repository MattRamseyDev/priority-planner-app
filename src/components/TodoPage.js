import React from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';
import CompletedList from './CompletedList';
import AddTodo from './AddTodo';
import { addTodo } from '../actions/todos';
import TodoListFilter from './TodoListFilter';

const TodoPage = (props) => (
    <div>
        <TodoListFilter currentList={props.filters.list}/>
        {props.filters.list === 'day' ? <h3>Daily Todos</h3> : <h3>Weekly Todos</h3>}
        <TodoList />
        <AddTodo
            onSubmit={(todo) => {
                const goal = props.goal.id;
                if(!!Object.values(props.goal).length) {
                    props.dispatch(addTodo({ ...todo, lists: [props.filters.list], goal }))
                } else {
                    props.dispatch(addTodo({ ...todo, lists: [props.filters.list] }))
                }
            }}
        />
        <CompletedList />
    </div>
)

const mapStateToProps = (state, props) => {
    return {
        todos: state.todos,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(TodoPage);