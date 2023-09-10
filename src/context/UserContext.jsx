
import { createContext, useEffect, useState} from "react";
import { users as data} from "../components/users"

export const UserContext = createContext()


export function UserContextProvider(props) {
    const [users, setUsers] = useState([])

useEffect (() =>{
  setUsers(data)
  
}, []);


function createUser(newUser){
  setUsers([...users, {
    id: users.length,
    name: newUser,
    
  
}])
 
}
function deleteUser(usersid) {
  setUsers(users.filter(user => user.id !== usersid ))
  
}
return (
    <UserContext.Provider value={{
       users,
        deleteUser,
        createUser
        
    }}>
        {props.children}
    </UserContext.Provider>
   
)
}

