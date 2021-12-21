import React from "react";
import { useState } from "react";
import User from "./User";
import Users from "./Users";

let users = JSON.parse(localStorage.getItem("users")) || [];

function Main() {
    let [isClicked, openForm] = useState(false);
    let [isClickedList, openList] = useState(false);

    function handleClick() {
        openForm((isClicked = !isClicked));
    }

    function handleClickList() {
        openList((isClickedList = !isClickedList));
    }

    return isClickedList ? (
        <Users
            users={users}
            handleClick={handleClick}
            handleClickList={handleClickList}
        />
    ) : (
        <main className="container">
            {isClicked ? (
                <User
                    isClicked={isClicked}
                    handleClick={handleClick}
                    handleClickList={handleClickList}
                />
            ) : (
                <div>
                    <h3>Welcome to Dashboard</h3>

                    <div className="flex end">
                        <button onClick={handleClickList}>Go to Users List</button>
                    </div>
                    <div className="flex center">
                        <button onClick={handleClick}>Add User</button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Main;
