import _ from 'underscore';

const todoReducerDefaultState = [];


export default (state = todoReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            // checks if the todo already exists in another list
                // if it does, add update lists of existing todo instead of creating a new one
            let match = state.find(todo => todo.description === action.todo.description);
            if (match) {
                match.lists = _.uniq(match.lists.concat(action.todo.lists));
                state.map((todo) => {
                    if (todo.id === match.id){
                        return {...match};
                    }
                });
                return [...state]
            }
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

