import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Priority Planner</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard   </NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <NavLink to='/goals' activeClassName='is-active'>Goals</NavLink>
    </header>
);

export default Header;