import React from "react";

const UsersList = (props) =>{
    return (
        <>
        {props.users.map((user, id) => (
        <div key={id} className="card text-center mg-3">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p> 
            <p> {user.address.street}</p>
            <p> {user.address.geo.lat}</p>
        </div>
    ))}
        </>
    );
};

export default UsersList;