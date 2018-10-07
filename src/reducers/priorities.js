

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
        default:
            return state;
    }
}