import React from 'react';

export default class GoalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.goal.description,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description) {
            this.setState(() => ({error: 'Please provide goal description'}))
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' 
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}