import React from 'react';
import { connect } from 'react-redux';

const EditGoalPage = (props) => {
    {console.log(props)}
    return (
        <div>
            <p>{props.goal.description}</p>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    goal: state.goals.find((goal) => goal.id === props.match.params.id) // undefined after refresh
})

export default connect(mapStateToProps)(EditGoalPage);