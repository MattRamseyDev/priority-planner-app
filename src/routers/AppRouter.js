import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import TodoPage from '../components/TodoPage';
import PrioritiesPage from '../components/PrioritiesPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={DashboardPage} exact={true} />
                <Route path='/todo' component={TodoPage} />
                <Route path='/priorities' component={PrioritiesPage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;