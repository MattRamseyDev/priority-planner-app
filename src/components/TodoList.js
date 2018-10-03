import React from 'react';
import { connect } from "react-redux";
import TodoListItem from './TodoListItem';
import {removeTodo, editTodo} from '../actions/todos';
import selectTodos from '../selectors/todos';
import { setListFilter } from '../actions/filters';

const TodoList = (props) => (
    <div>
        {
            props.todos.map((todo) => {
                return <TodoListItem 
                {...todo} 
                key={todo.id}  
                filter={props.filters}
                onRemove={(id) => props.dispatch(removeTodo(id))}
                onChange={(update) => props.dispatch(editTodo(todo.id, update))}
                onChangeList={(update) => props.dispatch(editTodo(todo.id, update))}
                />
            })
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        todos: selectTodos(state.todos, state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(TodoList)