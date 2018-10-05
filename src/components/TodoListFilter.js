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
        dailyTodos: getVisibleTodos(state.todos, {list: 'day', completed: false}),
        weeklyTodos: getVisibleTodos(state.todos, {list: 'week', completed: false}),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(TodoListFilter)