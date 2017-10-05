import React from 'react';
import ReactDOM from 'react-dom';
import { UserList } from './components/UserList';


ReactDOM.hydrate(
    <UserList />,
    document.getElementById('root'),
);
