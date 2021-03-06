import React from 'react';
import { connect } from "react-redux";
import TodoListItem from './TodoListItem';
import {removeTodo, editTodo, toggleCompleted} from '../actions/todos';
import {getVisibleTodosForGoal, getVisibleTodos} from '../selectors/todos';
import _ from 'underscore';
import { removeGoalTodo } from '../actions/goals';


// export default class TodoList extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       error: ''
//     }
//   }
//   render(){
//     return (
//       <div>
//         {!props.todos.length && <p>Please add a todo</p>}
//         {console.log('todolist component props', props)}
//         {
//           props.todos.map((todo) => {
//             return <TodoListItem
//               {...todo}
//               key={todo.id}
//               filter={props.filters}
//               onComplete={() => props.dispatch(toggleCompleted(todo.id, todo.completed))}
//               onChange={(update) => props.dispatch(editTodo(todo.id, update))}
//               onChangeList={(update) => {
//                 if (!!update.lists.length) {
//                   // if the todo still has list items, update array
//                   props.dispatch(editTodo(todo.id, update))
//                 } else {
//                   // else remove todo altogether
//                   if (props.filters.goal) { props.dispatch(removeGoalTodo(props.filters.goal, todo.id)) };
//                   props.dispatch(removeTodo({ id: todo.id }))
//                 }
//               }}
//             />
//           })
//         }
//       </div>
//     )
//   }
// }



const TodoList = (props) => (
    <div>
        {!props.todos.length && <p>Add a task</p>}
        {console.log('todolist component props',props)}
        {
            props.todos.map((todo) => {
                return <TodoListItem 
                {...todo} 
                key={todo.id}
                filter={props.filters}
                onComplete={() => props.dispatch(toggleCompleted(todo.id, todo.completed))}
                onChange={(update) => props.dispatch(editTodo(todo.id, update))}
                onChangeList={(update) => {
                    if (!!update.lists.length) {
                        // if the todo still has list items, update array
                        props.dispatch(editTodo(todo.id, update))
                    } else {
                        // else remove todo altogether
                      if (props.filters.goal) { props.dispatch(removeGoalTodo(props.filters.goal, todo.id)) };
                        props.dispatch(removeTodo({id: todo.id}))
                    }
                    }}
                />
            })
        }
    </div>
)

const mapStateToProps = (state, props) => {
    let filters = state.filters;
    if(props.list) {
      filters = {...filters, list: props.list};
    }
    if (props.goal){
      filters = { ...filters, goal: props.goal };      
      return {
        todos: getVisibleTodosForGoal(state.todos, filters),
        filters
      }
    } else {
      return {
        todos: getVisibleTodos(state.todos, filters),
        filters
      }
    }
}

export default connect(mapStateToProps)(TodoList)