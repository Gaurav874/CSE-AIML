import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login( {regDataLogin}) {
  const[email,setEmail] = useState("");
  const[pwd,setPwd] = useState("");
  const navigate = useNavigate();
  function verification(e){
    e.preventDefault();
    if(regDataLogin.email == email && regDataLogin.pwd == pwd){
      alert("Login Successful");
      navigate("/Dashboard");
    }
    else{
      alert("Login failed")
    }
  }
  return (
    <div>

      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>{setPwd(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={verification} type="submit" class="btn btn-primary">Login</button>
</form>
    </div>
  )
}

export default Login
