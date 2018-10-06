import React from 'react';
import { connect } from 'react-redux';
import PrioritiesListItem from './PrioritiesListItem';

const PrioritiesList = (props) => (
    <div>
        {
            props.priorities.map((priority) =>{
                return <PrioritiesListItem 
                    key={priority.id} 
                    {...priority}
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