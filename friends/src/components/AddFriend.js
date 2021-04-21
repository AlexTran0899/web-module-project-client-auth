import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const initialData = {
    name:'',
    age:'',
    email:'',
    id:''
}
function FriendsPage() {
  const [data, setData] = useState(initialData);

  const handleChange =(e)=>{
      setData({...data, [e.target.name]:e.target.value})
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const addNewFriend={
        id: new Date().getTime(),
        name: data.name,
        age: data.age,
        email: data.email,
    }
    axiosWithAuth()
    .post('/api/friends', addNewFriend)
    .then((res)=>{console.log("added")

    },)
  }
  return (
    <div>
      <h1>ADD Friend page!</h1>
      <form onSubmit={onSubmit}>
         <input
            placeholder="name"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            placeholder="age"
            type="text"
            name="age"
            value={data.age}
            onChange={handleChange}
          />
          <input
            placeholder="email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <button>Add </button>
      </form>
     
    </div>
  );
}

export default FriendsPage;
