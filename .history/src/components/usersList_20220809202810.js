import React from "react";

const UsersList = (props) =>{
    return (
        <>
        {props.users.map((user, id) => (
        <div key={id} className="card text-center mg-3">
            <h2 className="name">{user.name}</h2>
            <h3>Email:{user.email}</h3>
            <p>Phone Number: {user.phone}</p> 
            <p>Website: {user.website}</p>  
            <p>Address: {user.address.street}</p>
            <p> Latitude: {user.address.geo.lat}</p>
        </div>
    ))}
        </>
    );
};

export default UsersList;