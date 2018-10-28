import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.goal ? props.goal : '',
      error: ''
    }
  }
  onTodoSubmit = (todo) => {
    this.props.onTodoSubmit(todo)
  }
  render() {
    return (
      <div>
        <TodoList goal={this.state.id} />
        <AddTodo onSubmit={(todo) => {this.onTodoSubmit(todo)}}/>
      </div>
    )
  }
}