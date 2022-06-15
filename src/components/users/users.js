import React, { useEffect, useState } from "react";
import User from "../user/user";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return <div className="users">{users.map((user) => {
   return <User key={user.id} name={user.name} email={user.email} website={user.website}/>
  })}</div>;
};

export default Users;
