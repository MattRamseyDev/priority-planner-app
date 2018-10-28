

const filtersReducerDefualtState = {
    list: '',
    completed: false,
    goal: ''
}

export default (state = filtersReducerDefualtState, action) => {
    switch (action.type) {
        case 'SET_LIST_FILTER':
            return {...state, list: action.list};
        case 'SET_GOAL_FILTER':
            return {...state, goal: action.goal};
        default:
            return state;
    }
}