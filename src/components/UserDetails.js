import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const userId = useParams().userId;
  return <div>This is user detail {userId}</div>;
}

export default UserDetails;
