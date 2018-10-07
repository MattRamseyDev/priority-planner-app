import React from 'react';
import {Link} from 'react-router-dom';

const DashboardPage = () => (
    <div>
        <Link to='/priorities'>Priorities</Link> <br/>
        <Link to='/todo'>Weekly/Daily Todos</Link>
    </div>
)

export default DashboardPage;