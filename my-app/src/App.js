import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Components/card";

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .get("https://api.github.com/users/maxjamb/followers")
      .then(res => {
        console.log(res);
        setUsers(res.data);
      })
      .catch(error => {
        console.log("data not returned", error);
      });
  }, []);
  return (
    <div className="App">
      {users
        ? users.map(user => {
            return <Card user={user} />;
          })
        : []}
    </div>
  );
}

export default App;
