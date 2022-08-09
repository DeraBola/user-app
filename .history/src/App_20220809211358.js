 
 import React, { useState, useEffect } from "react";
 import "bootstrap/dist/css/bootstrap.min.css"
 import './App.css'
 import UsersList from "../src/components/UsersList";

const App = () => {
  
const [users, setusers] = useState([]);
const getUsersRequest = async () =>{
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = await fetch(url);
    const responseJson = await response.json();
setusers(responseJson)
    console.log(responseJson);
};

useEffect(() => {
    getUsersRequest();
}, []);


  return (
    <div className="container">
      
      <div className="grid">
      <UsersList users={users} />
    </div>
    </div>
  )
};

export default App;
