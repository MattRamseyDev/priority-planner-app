import uuid from 'uuid';

// ADD_GOAL
export const addGoal = (description) => ({
    type: 'ADD_GOAL',
    goal: {
        id: uuid(),
        description
    }
})