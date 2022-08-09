import React from "react";

const UsersList = (props) =>{
    return (
        <>
        {props.users.map((user, id) => (
        <div key={id} className="card text-center mg-3">
            <h2 className="name">{user.name}</h2>
            <h3>Email:{user.email}</h3>
            <h3>Phone Number: {user.phone}</h3> 
            <h3>Website: {user.website}</h3>  
            <h3>Address: {user.address.street}</h3>
            <h3> Latitude: {user.address.geo.lat}</h3>
        </div>
    ))}
        </>
    );
};

export default UsersList;