import React from "react";

const UsersList = (props) =>{
    return (
        <>
        {props.users.map((user, id) => (
        <div key={id} className="card text-center mg-3">
            <h2>Name: {user.name}</h2>
            <p>Email:{user.email}</p>
            <p>Phne Number{user.phone}</p> 
            <p>{user.website}</p>  
            <p> {user.address.street}</p>
            <p> {user.address.geo.lat}</p>
        </div>
    ))}
        </>
    );
};

export default UsersList;