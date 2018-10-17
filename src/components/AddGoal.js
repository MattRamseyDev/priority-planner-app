import React from 'react';

export default class AddGoal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: ''
        };
    }
    onSubmit = (e) => {
        e.preventDefault();
        const newGoal = e.target.elements.goal.value.trim();
        if (!newGoal) {
            this.setState(() => ({ error: 'Please enter a goal description' }))
        } else {
            this.props.onSubmit(newGoal);
            this.setState(() => ({ error: '' }));
            e.target.elements.goal.value = '';
        }
    }
    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}>
                <input type='text' name='goal'></input>
                <button>Add Goal</button>
            </form>
            {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}