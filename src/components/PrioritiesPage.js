import React from 'react';
import { connect } from 'react-redux';
import PrioritiesList from './PrioritiesList';
import AddPriority from './AddPriority'
import {addPriority} from '../actions/priorities';

// should be a page where you can list what's important to you and change the order depending on importance

const PrioritiesPage = (props) => (
    <div>
        <h4>What's most important to you?</h4>
        <PrioritiesList />
        <AddPriority 
            onSubmit={(priority) => {
                props.dispatch(addPriority(priority))
            }}
        />
    </div>
);

export default connect()(PrioritiesPage);