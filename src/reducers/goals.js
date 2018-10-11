
const goalsReducerDefaultState = [];

export default (state= goalsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_GOAL':
            return [...state, action.goal];
        case 'EDIT_GOAL':
            return state.map((goal) => {
                if (goal.id === action.id) {
                    return {...goal, ...action.updates};
                } else {
                    return goal;
                }
            })
        case 'REMOVE_GOAL':
            return state.filter(goal => goal.id !== action.id);
        default:
            return state;
    }
}