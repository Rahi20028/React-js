import React, {useState, useContext} from "react";
import Usercontext from "../context/Usecontext";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    const {setuser} = useContext(Usercontext)

    const handlesubmit = (e)=>{
        e.preventDefault()
        setuser({username, password})
    }
    return(
       <div>
        <h2>Login</h2>
        <input type="text" placeholder="username" 
        value={username}  
        onChange={(e)=> setUsername(e.target.value)}
        />
        {"  "}
        <input type="text" placeholder="password"
        value={password}  
        onChange={(e)=> setpassword(e.target.value)}
        />
        <button onClick={handlesubmit}>submit</button>
       </div> 
    )
}

export default Login