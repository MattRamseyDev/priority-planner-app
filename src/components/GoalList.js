import React from 'react';
import { connect } from 'react-redux';
import GoalListItem from './GoalListItem';


const GoalList = (props) => (
    <div>
        {props.goals.map((goal) => {
            return <GoalListItem 
                key={goal.id}
                {...goal}
            />
        })}
    </div>
);

const mapStateToProps = (state) => ({
    goals: state.goals
})

export default connect(mapStateToProps)(GoalList);