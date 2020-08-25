import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import userList from './user-list'


ReactDOM.render(
  <React.StrictMode>
    <App
      store={userList}
     />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



// DISPLAY A USER'S NAME, AVATAR, AND inSESSION STATUS
// 