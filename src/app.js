import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addTodo, toggleCompleted } from './actions/todos';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {getVisibleTodos} from './selectors/todos';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleTodos = getVisibleTodos(state.todos, state.filters);
    console.log(state);
    // console.log(visibleTodos);
});

store.dispatch(addTodo({ description: 'read', lists:['day', 'week']}))
store.dispatch(addTodo({ description: 'walk dog', lists: ['day']}));
store.dispatch(addTodo({ description: 'pay taxes', lists: ['week']}));
store.dispatch(addTodo({ description: 'clean apt', lists: ['week']}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));