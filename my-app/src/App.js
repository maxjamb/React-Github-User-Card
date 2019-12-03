import React, { Component } from "react";
import axios from "axios";
import { render } from "react-dom";
import Card from "./Components/card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/maxjamb/followers")
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.log("data not returned", error);
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.users
          ? this.state.users.map(user => {
              return <Card users={user} />;
            })
          : null}
      </div>
    );
  }
}
export default App;
