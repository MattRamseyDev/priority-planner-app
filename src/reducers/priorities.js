

const prioritiesReducerDefaultState = [];

export default (state = prioritiesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_PRIORITY':
            return [...state, action.priority]
        default:
            return state;
    }
}