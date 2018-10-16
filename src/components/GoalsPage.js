import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GoalList from './GoalList';
import AddGoal from './AddGoal';
import { addGoal } from '../actions/goals';

const GoalsPage = (props) => (
    <div>
        <h2>What do you want to do?</h2>
        <GoalList />
        <Link to='/goals/new'>Create New Goal</Link>
    </div>
)

const mapStateToProps = (state) => ({
    goals: state.goals
})

export default connect(mapStateToProps)(GoalsPage);