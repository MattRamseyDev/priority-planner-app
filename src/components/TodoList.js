import React from 'react';
import { connect } from "react-redux";
import TodoListItem from './TodoListItem';
import {removeTodo, editTodo, toggleCompleted} from '../actions/todos';
import {getVisibleTodos} from '../selectors/todos';

const TodoList = (props) => (
    <div>
        {
            props.todos.map((todo) => {
                return <TodoListItem 
                {...todo} 
                key={todo.id}  
                filter={props.filters}
                onComplete={() => props.dispatch(toggleCompleted(todo.id, todo.completed))}
                onChange={(update) => props.dispatch(editTodo(todo.id, update))}
                onChangeList={(update) => {
                    if (!!update.lists.length) {
                        // if the todo still has list items, update array
                        props.dispatch(editTodo(todo.id, update))
                    } else {
                        // else remove todo altogether
                        props.dispatch(removeTodo({id: todo.id}))
                    }
                    }}
                />
            })
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(TodoList)