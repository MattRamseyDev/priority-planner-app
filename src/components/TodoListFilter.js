import React from 'react';
import { connect } from 'react-redux';
import { setListFilter } from '../actions/filters';
import {getTodosInList} from '../selectors/todos';

const TodoListFilter = (props) => (
    <div>
        <button 
            value='day' 
            onClick={(e) => props.dispatch(setListFilter(e.target.value))}
        >
        Today ({props.dailyTodos.length})</button>
        <button
            value='week'
            onClick={(e) => props.dispatch(setListFilter(e.target.value))}
        >
        This Week ({props.weeklyTodos.length})</button>
    </div>
);

const mapStateToProps = (state) => {
    return {
        dailyTodos: getTodosInList(state.todos, 'day'),
        weeklyTodos: getTodosInList(state.todos, 'week'),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(TodoListFilter)