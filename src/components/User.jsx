import { UserContext } from "../context/UserContext";
import { useContext } from "react";


function User() {

  const {users, deleteUser} = useContext(UserContext)
 

  if (users.length === 0) {
    return <h1>Not Users</h1>
  }
  return (

<div className="grid grid-cols-4 gap-2">
  
  {users.map(users => (

    <div key={users.id} className="bg-blue-800 text-white p-5 rounded-md">User 
      <h1 className="text-xl font-extrabold capitalize">{users.name}</h1>
      <button onClick={()=> deleteUser(users.id)} className="bg-red-500 rounded-md px-2 py-1 mt-4">Delete User</button>
    </div>

  ))
  }
  </div>


  );
}

export default User