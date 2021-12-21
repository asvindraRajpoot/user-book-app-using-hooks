import React from "react";

function Users(props) {
  console.log(props);

  function handleClckUsers() {
    props.handleClick();
    props.handleClickList();
  }

  return (
    <section className="container">
      <div className="back">
        <button onClick={handleClckUsers}>Go back</button>
      </div>
      {props.users.map((user, i) => {
        return (
          <li className="user" key={i}>
            <strong>{user.name}</strong>
            <strong>{user.username}</strong>
          </li>
        );
      })}
    </section>
  );
}

export default Users;
