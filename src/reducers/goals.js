
const goalsReducerDefaultState = [];

export default (state= goalsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_GOAL':
            return [...state, action.goal];
        case 'REMOVE_GOAL':
            return state.filter(goal => goal.id !== action.id);
        default:
            return state;
    }
}