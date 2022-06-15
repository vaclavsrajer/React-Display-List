import React from "react";
import "./user.css"

const User = ({name, email, website}) => {
  return (
    <div className="user">
        <h2>{name}</h2>
        <h3>{email}</h3>
        <h4>{website}</h4>
    </div>
  );
}

export default User;
