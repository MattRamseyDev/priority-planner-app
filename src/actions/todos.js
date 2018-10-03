import uuid from 'uuid';

// Action Generators

// ADD_TODO
export const addTodo = ({ description, lists, completed = false }) => ({
    type: 'ADD_TODO',
    todo: {
        id: uuid(),
        description,
        lists,
        completed
    }
})

// REMOVE_TODO
export const removeTodo = ({ id } = {}) => ({
    type: 'REMOVE_TODO',
    id
})

// TOGGLE_COMPLETED
export const toggleCompleted = (id, completed) => ({
    type: 'TOGGLE_COMPLETED',
    id,
    completed
})

// EDIT_TODO
export const editTodo = (id, updates) => ({
    type: 'EDIT_TODO',
    id,
    updates
})
