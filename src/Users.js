import React from 'react';
// import userList from "./user-list";

//store = userList
//store.name
//store.status
//
function Users(props) {

    return (
            <div className="user">
                <img src="" alt="" />
                <h3>{ props.name }</h3>
                <p className="onStage">on stage</p>
            </div>
    )
}

export default Users;