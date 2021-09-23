import React from "react";
import useAuth from "../hooks/useAuth";

function Profile(props) {
  const user = useAuth();

  if (!user) return null;

  return (
    <>
      <h1 className="">Profile</h1>
      <p>
        <strong>Name: </strong> {user.firstName + " " + user.lastName}
      </p>
      <p>
        <strong>Email: </strong> {user.email}
      </p>
      <p>
        <strong>Student ID: </strong> {user.studentId}
      </p>
    </>
  );
}

export default Profile;
