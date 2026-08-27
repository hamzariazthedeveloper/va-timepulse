import {
createContext,
useContext,
useState
} from "react";


const AuthContext = createContext();





export function AuthProvider({children}){





const [users,setUsers] = useState(()=>{


const savedUsers = localStorage.getItem("users");


return savedUsers

?

JSON.parse(savedUsers)

:

[];

});








const [user,setUser] = useState(()=>{


const savedUser = localStorage.getItem("user");


return savedUser

?

JSON.parse(savedUser)

:

null;


});











// LOGIN

const login=(email,password)=>{


const cleanEmail = email

.toLowerCase()

.trim();





const foundUser = users.find(


(u)=>

u.email.toLowerCase().trim() === cleanEmail

&&

u.password === password


);






if(!foundUser){


return false;


}







// remove old session

localStorage.removeItem("user");





setUser(foundUser);





localStorage.setItem(

"user",

JSON.stringify(foundUser)

);






return true;


};











// SIGNUP


const signup=(name,email,password)=>{



const cleanEmail = email

.toLowerCase()

.trim();





// ONLY VA MATTERS EMAILS


const allowedDomain = ".vamatters@gmail.com";






if(!cleanEmail.endsWith(allowedDomain)){


return {

success:false,

message:
"Only VA Matters employees can create an account."

};


}







// Check existing account


const existingUser = users.find(


(u)=>

u.email.toLowerCase() === cleanEmail


);






if(existingUser){


return {


success:false,


message:
"Account already exists."


};


}









const newUser={


id:Date.now(),


name:name.trim(),


email:cleanEmail,


password,


role:"Employee"


};








const updatedUsers=[

...users,

newUser

];







setUsers(updatedUsers);





localStorage.setItem(

"users",

JSON.stringify(updatedUsers)

);






// auto login after signup


setUser(newUser);





localStorage.setItem(

"user",

JSON.stringify(newUser)

);







return {


success:true


};



};











// LOGOUT


const logout=()=>{


setUser(null);


localStorage.removeItem("user");


};












return (

<AuthContext.Provider


value={{


user,

users,

login,

signup,

logout


}}


>


{children}


</AuthContext.Provider>


);


}









export function useAuth(){


return useContext(AuthContext);


}