import React, { useState } from "react";
import { UserData } from "./UserData";
import "./User.css";

function UserProfile() {
  const [query, setQuery] = useState("");

  const user = UserData.filter((data) => {
    if (
      typeof data.firstName === "string" &&
      typeof data.lastName === "string" &&
      typeof data.title === "string"
    ) {
      return (
        data.firstName.toLowerCase().includes(query) ||
        data.lastName.toLowerCase().includes(query) ||
        data.title.toLowerCase().includes(query)
      );
    }
    return false;
  }).map((data) => (
    <div key={data.id} className="details">
      <img src={data.picture} alt="users" />
      <div className="subDetails">
        <p>{data.id}</p>
        <div className={`${data.title} ${data.firstName} ${data.lastName}`}>
          <h3>{`${data.title} ${data.firstName} ${data.lastName}`}</h3>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="user">
      <>
        <form className="form">
          <input
            className="field"
            placeholder="Search by name..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </>
      <div className="usergroup">{user}</div>
    </div>
  );
}

export default UserProfile;
