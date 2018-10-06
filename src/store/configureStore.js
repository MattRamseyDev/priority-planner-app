import { createStore, combineReducers } from 'redux';
import todosReducer from '../reducers/todos';
import filtersReducer from '../reducers/filters';
import prioritiesReducer from '../reducers/priorities';

export default () => {
    // ONE REDUCER FOR EACH ROOT PROPERTY OF STORE
    const store = createStore(
        combineReducers({
            todos: todosReducer,
            filters: filtersReducer,
            priorities: prioritiesReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}


// storeExample = {
//     todo: [
//         {
//             description: 'walk dog',
//             completed: false,
//             list: 'day'
//         },
//         {
//             description: 'call mom',
//             completed: false,
//             list: 'week'
//         }
//     ]
// }
