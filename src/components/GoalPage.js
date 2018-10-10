import React from 'react';
import { connect } from 'react-redux';
import GoalList from './GoalList';
import AddGoal from './AddGoal';
import { addGoal } from '../actions/goals';

const GoalPage = (props) => (
    <div>
        <h2>What do you want to do?</h2>
        <GoalList />
        <AddGoal onSubmit={(newGoal) => props.dispatch(addGoal(newGoal))}/>
    </div>
)

const mapStateToProps = (state) => ({
    goals: state.goals
})

export default connect(mapStateToProps)(GoalPage);