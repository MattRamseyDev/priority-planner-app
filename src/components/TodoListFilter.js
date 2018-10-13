import React from 'react';
import { connect } from 'react-redux';
import { setListFilter } from '../actions/filters';
import {getVisibleTodos} from '../selectors/todos';

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
        dailyTodos: getVisibleTodos(state.todos, {...state.filters, list: 'day'}),
        weeklyTodos: getVisibleTodos(state.todos, {...state.filters, list: 'week'}),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(TodoListFilter)