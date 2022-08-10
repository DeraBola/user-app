 
 import React, { useState, useEffect } from "react";
 import "bootstrap/dist/css/bootstrap.min.css"
 import './App.css'
 import UsersList from "../src/components/UsersList";
 import Search from "../src/components/Search";

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

const [searchText, setSearchText] = useState('');
  return (
    <div className="container">
      <Search handleSearchUser={setSearchText} />
      <div className="grid">
      <UsersList 
      users={users.filter((user) =>
        user||[].text.includes(searchText)
        )} 
      />
    </div>
    </div>
  )
};

export default App;
