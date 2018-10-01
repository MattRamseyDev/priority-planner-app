import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addTodo } from './actions/todos';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { setListFilter } from './actions/filters';
import getVisibleTodos from './selectors/todos';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleTodos = getVisibleTodos(state.todos, state.filters);
    console.log(state);
    console.log(visibleTodos);
});

store.dispatch(addTodo({ description: 'read', list:'day' }))
store.dispatch(addTodo({ description: 'walk dog', list: 'day'}));
store.dispatch(addTodo({ description: 'pay taxes', list: 'week'}));
store.dispatch(addTodo({ description: 'clean apt', list: 'week'}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));