import React from "react";

const UsersList = () =>{
    return (
        <>
        {props.users.map((user, index) => <div>
            <h2>{user} </h2>
        </div>)
        </>
    )
}