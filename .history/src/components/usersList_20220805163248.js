import React from "react";

const UsersList = (props) =>{
    return (
        <>
        {props.users.map((user, index) => (
        <div className="card text-center mg-3">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.body}</p>
        </div>
    ))}
        </>
    );
};

export default UsersList;