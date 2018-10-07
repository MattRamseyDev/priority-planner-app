import uuid from 'uuid';

// ADD_PRIORITY
export const addPriority = (priorityText) => ({
    type: 'ADD_PRIORITY',
    priority : {
        id: uuid(),
        text: priorityText
    }
})

// EDIT PRIORITY
export const editPriority = (id, updates) => ({
    type: 'EDIT_PRIORITY',
    id,
    updates
})