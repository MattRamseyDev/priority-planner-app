import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default class GoalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.goal ? props.goal.description : '',
            id: props.goal ? props.goal.id : '',
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }
    onTodoSubmit = (todo) => {
      this.props.onTodoSubmit(todo)
    }
    render() {
        return (
            <div>
                <input type='text' name='description' value={this.state.description} onChange={this.onDescriptionChange}/>
                <TodoList goal={this.state.id} />
                <AddTodo onSubmit={(todo) => {this.onTodoSubmit(todo)}}/>
            </div>
        )
    }
}

// export default class GoalForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             description: props.goal ? props.goal.description : '',
//             error: ''
//         }
//     }
//     onDescriptionChange = (e) => {
//         const description = e.target.value;
//         this.setState(() => ({description}))
//     }
//     onSubmit = (e) => {
//         e.preventDefault();
//         const goalDescription = e.target.elements.description.value.trim();
//         if(!goalDescription) {
//             this.setState(() => ({error: 'Please provide goal description'}))
//         } else {
//             this.setState(() => ({error: ''}));
//             this.props.onSubmit({
//                 description: goalDescription
//             })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.onSubmit}>
//                     <label htmlFor='description'>Description:  </label>
//                     <input type='text' 
//                     name='description'
//                     value={this.state.description}
//                     onChange={this.onDescriptionChange}
//                     size='50'
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }