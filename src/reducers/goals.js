
const goalsReducerDefaultState = [];

export default (state= goalsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_GOAL':
            return [...state, action.goal]
        default:
            return state;
    }
}