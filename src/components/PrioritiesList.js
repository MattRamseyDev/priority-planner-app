import React from 'react';
import { connect } from 'react-redux';
import PrioritiesListItem from './PrioritiesListItem';
import {editPriority, removePriority, changePriorityOrder} from '../actions/priorities';
import arrayMove from 'array-move';

const PrioritiesList = (props) => (
    <div>

        {
            props.priorities.map((priority) =>{
                return <PrioritiesListItem 
                    key={priority.id} 
                    {...priority}
                    onTextChange={(update) => {
                        props.dispatch(editPriority(priority.id, update))
                    }}
                    onRankChange={
                        (newRank) => {
                                newRank > priority.rank 
                                    ? props.dispatch(changePriorityOrder(arrayMove(props.priorities, priority.rank, priority.rank - 1)))
                                    : props.dispatch(changePriorityOrder(arrayMove(props.priorities, priority.rank, priority.rank + 1)));
                        }   
                    }
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