

const prioritiesReducerDefaultState = [];

export default (state = prioritiesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_PRIORITY':
            action.priority.rank = state.length;
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
        case 'CHANGE_PRIORITY_ORDER':
            return action.newPrioritiesArray.map((priority, index) => {
                priority.rank = index;
                return priority
            })
            return action.newPrioritiesArray;
        default:
            return state;
    }
}

// current priority state = 
// [
//     {
//         id: 'dskalskfjf-a920293',
//         text: 'priority text',
//         rank: 0
//     },
//     {
//         id: 'sdaf-jds',
//         text: 'other priority text',
//         rank: 1
//     }
// ]