import uuid from 'uuid';

// ADD_PRIORITY
export const addPriority = (priorityText, rank = 0) => ({
    type: 'ADD_PRIORITY',
    priority : {
        id: uuid(),
        text: priorityText,
        rank
    }
})

// EDIT_PRIORITY
export const editPriority = (id, updates) => ({
    type: 'EDIT_PRIORITY',
    id,
    updates
})

// REMOVE_PRIORITY
export const removePriority = (id) => ({
    type: 'REMOVE_PRIORITY',
    id
})

// CHANGE_PRIORITY_ORDER
export const changePriorityOrder = (newPrioritiesArray) => ({
    type: 'CHANGE_PRIORITY_ORDER',
    newPrioritiesArray
})