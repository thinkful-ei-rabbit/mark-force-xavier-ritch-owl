import React from 'react';
import Users from './Users'
import './App.css';

function App(props) {

  console.log(props.store)
  return (
    <div className="App">
      {props.store.map((user) => {
        if(user.inSession) {
          {console.log(user)}
          return (<div class="userWrapper"> 
          <Users 
            name = {user.name}
            status = {user.inSession}
          />
          </div> )
        }
        return ''
      })
    }
    </div>
  );
}

export default App;
