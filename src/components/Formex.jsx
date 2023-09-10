
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Formex({}) {

    const [name, setName] = useState("")
  const {createUser} = useContext(UserContext)
    const  handlesub = (e) => { e.preventDefault();

createUser(name);
setName("")
}

        useEffect(function(){
            console.log("Change Detected")
        })
    
  return (
    <div className="max-w-md p-10 mx-auto">
    <form onSubmit={handlesub} className="bg-white p-10 rounded-md" >
      <input type="text" placeholder="Your User" value={name} onChange={(e) => setName(e.target.value)}/>
      <button className="bg-green-500 text-white rounded-md px-1 py-1 mx-4">Save</button>
    </form>
    </div>
  );
}

export default Formex;
