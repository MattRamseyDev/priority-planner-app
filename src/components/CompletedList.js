import React from 'react';
import { connect } from 'react-redux';
import selectTodos from '../selectors/todos';
import CompletedListItem from './CompletedListItem';
import { toggleCompleted } from '../actions/todos';


const CompletedList = (props) => (
    <div>
        <h2>Completed</h2>
        {
            props.todos.map((todo) => {
                return <CompletedListItem 
                    {...todo}
                    key={todo.id}
                    undoHandler={() => props.dispatch(toggleCompleted(todo.id, todo.completed))}
                />
            })
        }
    </div>
)

const mapStateToProps = (state) => ({
    todos: selectTodos(state.todos, {...state.filters, completed: true })
})

export default connect(mapStateToProps)(CompletedList);