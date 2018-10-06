import React from 'react';

export default class AddPriority extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    };
    onSubmit = (e) => {
        e.preventDefault();
        const newPriority = e.target.elements.priority.value.trim();
        if (!newPriority) {
            this.setState(() => ({ error: 'Please enter a new priority item' }))
        } else {
            this.props.onSubmit(newPriority);
            this.setState(() => ({ error: '' }));
            e.target.elements.priority.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='priority' />
                    <button>Add Priority</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}