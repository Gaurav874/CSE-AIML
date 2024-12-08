import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration({regData}) {
    const[name,setName] = useState("ayush");
    const[email,setEmail] = useState("");
    const[pwd,setPwd] = useState("");

    function getData(e){
        e.preventDefault();   //dobara reload na ho handle
        const data = {
            name,email,pwd
        };
        regData(data);     
    }
  return (
    <div>
      <h2>welcome to Registration page</h2> 

      <form>
      <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter name"/>
  </div>

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
  <button onClick={getData} type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Registration
