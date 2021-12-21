import React from "react";
import { useState } from "react";
import Users from "./Users";

let users = JSON.parse(localStorage.getItem("users")) || [];

function User(props) {
  console.log(props);
  let [user, setUser] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    let userInfo = {
      name: e.target[0].value,
      username: e.target[1].value,
    };

    setUser(() => {
      user = userInfo;
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    });
  }

  return user !== null ? (
    <Users
      users={users}
      handleClick={props.handleClick}
      handleClickList={props.handleClickList}
    />
  ) : (
    <div>
      <h5> Fill your Details</h5>
      <div className="close">
        {" "}
        <button onClick={props.handleClick}>Close</button>
      </div>
      <div className="form-control">
        <form className="flex colom" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter your name"></input>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default User;
