import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";

const App = () => {
  const [Error,setError] = useState('')
  const [users, setUsers] = useState([]);
  const [username, setName] = useState();
  const [password ,setPass ] = useState();
  useEffect(async () => {
    const users = await axios.get("http://localhost:8000/");
    //console.log(users);
    setUsers(users.data);
  }, []);
  const _onSubmit = async(e) => {

     // console.log(e)
     var response = []
    await axios.post("http://localhost:8000/", {
          username,
          password
      })
      .then(res => {
          response = res.data
          console.log(res.data)
      })
      .catch(err =>{
          console.log(err.response.data.msg)
          setError(err.response.data.msg)
      })
    //   console.log(response)
      
}

  return (
    <div>
      {/* users */}
      {users.map((u, i) => (
        <h1 key={i}>{u.username}</h1>
      ))}
      {/* <input /> */}

        <h1>Login</h1>
        <div className="msg"></div>
        <div>
          <label htmlFor="name">Username:</label>
          <input type="text" id="name" placeholder="Username" onChange={(e)=> setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Pasword:</label>
          <input type="password" id="password" placeholder="password" onChange={(e) => setPass(e.target.value)} />
        </div>
        <button className="btn" onClick={_onSubmit}>Submit</button>
        <h1>{Error}</h1>
    </div>
  );
};

export default App;
