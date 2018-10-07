import React from 'react';
import { connect } from 'react-redux';
import PrioritiesListItem from './PrioritiesListItem';
import {editPriority, removePriority} from '../actions/priorities';

const PrioritiesList = (props) => (
    <div>
        {
            props.priorities.map((priority) =>{
                return <PrioritiesListItem 
                    key={priority.id} 
                    {...priority}
                    onChange={(update) => {
                        props.dispatch(editPriority(priority.id, update))
                    }}
                    onRemove={() => props.dispatch(removePriority(priority.id))}
                />
            })
        }
    </div>
);

const mapStateToProps =(state) => {
    return {
        priorities: state.priorities
    }
}

export default connect(mapStateToProps)(PrioritiesList);