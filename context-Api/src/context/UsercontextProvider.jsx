import React from "react";
import Usercontext from "./Usecontext";

const UsercontextProvider = ({children})=>{
    const [user, setuser] = React.useState(null)
    return(
        <Usercontext.Provider value={{user,setuser}}>
        {children}
        </Usercontext.Provider>
    )

}

export default UsercontextProvider