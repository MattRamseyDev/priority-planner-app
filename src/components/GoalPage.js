import React from 'react';
import { connect } from 'react-redux';
import GoalList from './GoalList';

const GoalPage = (props) => (
    <div>
        <h2>What are you trying to do?</h2>
        <GoalList />
    </div>
)

const mapStateToProps = (state) => ({
    goals: state.goals
})

export default connect(mapStateToProps)(GoalPage);