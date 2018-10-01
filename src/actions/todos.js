import uuid from 'uuid';

// Action Generators

// ADD_TODO
export const addTodo = ({ description, list, completed = false }) => ({
    type: 'ADD_TODO',
    todo: {
        id: uuid(),
        description,
        list,
        completed
    }
})

// REMOVE_TODO
export const removeTodo = ({ id } = {}) => ({
    type: 'REMOVE_TODO',
    id
})

// EDIT_TODO
export const editTodo = (id, updates) => ({
    type: 'EDIT_TODO',
    id,
    updates
})
