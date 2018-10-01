import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Action Generators

// ADD_TODO
const addTodo = ({ description, isDone = false }) => ({
    type: 'ADD_TODO',
    todo: {
        id: uuid(),
        description,
        isDone
    }
})

// REMOVE_TODO
const removeTodo = ({id} = {}) => ({
    type: 'REMOVE_TODO',
    id
})

// EDIT_TODO
const editTodo = (id, updates) => ({
    type: 'EDIT_TODO',
    id,
    updates
})

const todoReducerDefaultState = [];


const todosReducer = (state = todoReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'EDIT_TODO':
            return state.map((todo) => {
                if(todo.id === action.id){
                    return {...todo, ...action.updates};
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
}



const store = createStore(
    combineReducers({
        todos: todosReducer
    })
)

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
})

const todo1 = store.dispatch(addTodo({description: 'walk dog'}));
const todo2 = store.dispatch(addTodo({description: 'read'}))
store.dispatch(editTodo(todo1.todo.id, {description: 'pet dog'}))
store.dispatch(removeTodo({id: todo2.todo.id}))