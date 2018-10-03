

const filtersReducerDefualtState = {
    list: 'day',
    completed: false
}

export default (state = filtersReducerDefualtState, action) => {
    switch (action.type) {
        case 'SET_LIST_FILTER':
            return {...state, list: action.list}
        default:
            return state;
    }
}