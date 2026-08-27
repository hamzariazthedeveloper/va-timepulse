import {
createContext,
useContext,
useState
} from "react";


const AuthContext=createContext();



const users=[

{
id:1,
name:"Hamza Riaz",
email:"hamza@test.com",
password:"123456",
role:"Employee"
},

{
id:2,
name:"Ali Khan",
email:"ali@test.com",
password:"123456",
role:"Employee"
}

];



export function AuthProvider({children}){


const [user,setUser]=useState(()=>{


const saved=localStorage.getItem("user");


return saved ? JSON.parse(saved) : null;


});




const login=(email,password)=>{


const foundUser=users.find(

(u)=>

u.email===email &&
u.password===password

);



if(foundUser){


setUser(foundUser);


localStorage.setItem(
"user",
JSON.stringify(foundUser)
);


return true;


}


return false;


};






const logout=()=>{


setUser(null);


localStorage.removeItem("user");


};





return (

<AuthContext.Provider

value={{
user,
login,
logout
}}

>

{children}

</AuthContext.Provider>


)

}



export function useAuth(){

return useContext(AuthContext);

}