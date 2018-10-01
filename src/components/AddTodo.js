import React from 'react';

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    };
    onSubmit = (e) => {
        e.preventDefault();
        const newTodo = e.target.elements.todo.value.trim();
        if (!newTodo) {
            this.setState(() => ({error: 'Please enter a new Todo list item'}))
        } else {
            this.props.onSubmit({description: newTodo});
            this.setState(() => ({error: ''}));
            e.target.elements.todo.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='todo' />
                    <button>Add Todo</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}
