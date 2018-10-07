

const prioritiesReducerDefaultState = [];

export default (state = prioritiesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_PRIORITY':
            return [...state, action.priority];
        case 'EDIT_PRIORITY':
            return state.map(priority => {
                if (priority.id === action.id) {
                    return {...priority, ...action.updates};
                }
                else {
                    return priority;
                }
            });
        case 'REMOVE_PRIORITY':
            return state.filter(priority => priority.id !== action.id);
        default:
            return state;
    }
}