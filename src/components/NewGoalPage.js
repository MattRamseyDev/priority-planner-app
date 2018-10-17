import React from 'react';
import {connect} from 'react-redux';
import GoalForm from './GoalForm';
import { addGoal } from '../actions/goals';
import AddGoal from './AddGoal';

const NewGoalPage = (props) => (
    <div>
      <AddGoal 
        onSubmit={(description) => {
          const newGoal = props.dispatch(addGoal(description));
          props.history.push(`/goals/${newGoal.goal.id}`)
        }}
      />
        {/* <GoalForm 
            onSubmit={({description}) => {
                const newGoal = props.dispatch(addGoal(description));
                props.history.push(`/goals/${newGoal.goal.id}`)
            }}
        /> */}
    </div>
);

export default connect()(NewGoalPage);