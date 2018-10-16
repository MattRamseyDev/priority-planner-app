import uuid from 'uuid';

// ADD_GOAL
export const addGoal = (description, todos = []) => ({
    type: 'ADD_GOAL',
    goal: {
        id: uuid(),
        description,
        todos
    }
});

//EDIT_GOAL
export const editGoal = (id, updates) => ({
    type: 'EDIT_GOAL',
    id,
    updates
})

// REMOVE_GOAL 
export const removeGoal = (id) => ({
    type: 'REMOVE_GOAL',
    id
})