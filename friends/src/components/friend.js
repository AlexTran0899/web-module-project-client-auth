import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function FriendsPage() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Friends list page!</h1>
      {friends.map((friend) => (
        <h3 key={friend.id}>{friend.name}</h3>
      ))}
    </div>
  );
}

export default FriendsPage;
