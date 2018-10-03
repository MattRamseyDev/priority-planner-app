

const todoReducerDefaultState = [];


export default (state = todoReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.todo];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'TOGGLE_COMPLETED':
            return state.map((todo) => {
                if (todo.id === action.id){
                    return {...todo, completed: !action.completed};
                } else {
                    return todo;
                }
            });
        case 'EDIT_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, ...action.updates };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
}

