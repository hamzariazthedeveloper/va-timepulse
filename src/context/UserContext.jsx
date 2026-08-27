import {
createContext,
useContext
} from "react";


const UserContext=createContext();



export function UserProvider({children}){


const user={

id:1,

name:"Hamza Ahmed",

role:"Developer"

};


return (

<UserContext.Provider value={{user}}>

{children}

</UserContext.Provider>

)

}



export function useUser(){

return useContext(UserContext);

}