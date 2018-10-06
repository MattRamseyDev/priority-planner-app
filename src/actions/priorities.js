import uuid from 'uuid';

// ADD_PRIORITY
export const addPriority = (priorityText) => ({
    type: 'ADD_PRIORITY',
    priority : {
        id: uuid(),
        text: priorityText
    }
})