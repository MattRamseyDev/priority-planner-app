import React from 'react';
import { connect } from 'react-redux';
import { setListFilter } from '../actions/filters';

const TodoListFilter = (props) => (
    <div>
        <button 
            value='day' 
            onClick={(e) => props.dispatch(setListFilter(e.target.value))}
        >
        Today</button>
        <button
            value='week'
            onClick={(e) => props.dispatch(setListFilter(e.target.value))}
        >
        This Week</button>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(TodoListFilter)