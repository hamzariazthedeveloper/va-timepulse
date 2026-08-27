import {
createContext,
useContext,
useEffect,
useState
} from "react";


import { supabase } from "../lib/supabase";



const AuthContext = createContext();



export function AuthProvider({children}){


const [user,setUser] = useState(null);

const [loading,setLoading] = useState(true);





// Check existing login session

useEffect(()=>{


const getSession = async()=>{


const {
data
}= await supabase.auth.getSession();


setUser(
data.session?.user || null
);


setLoading(false);


};



getSession();





const {
data:listener
}=supabase.auth.onAuthStateChange(

(event,session)=>{


setUser(
session?.user || null
);


}

);



return ()=>{


listener.subscription.unsubscribe();


};


},[]);








// SIGNUP

const signup = async(
name,
email,
password
)=>{


const emailLower = email.toLowerCase().trim();


const allowedDomains = [
    ".vamatters@gmail.com",
    "@vamatters.com"
];


const isAllowed = allowedDomains.some(
    (domain)=> emailLower.endsWith(domain)
);



if(!isAllowed){

return {

success:false,

message:"Only VA Matters employees can signup."

};

}




const {
data,
error
}= await supabase.auth.signUp({


email,

password,


options:{


data:{


name


}


}


});




if(error){


return {


success:false,

message:error.message


};


}



return {


success:true,


user:data.user


};



};








// LOGIN

const login = async(
email,
password
)=>{


const {
data,
error
}= await supabase.auth.signInWithPassword({


email,

password


});



if(error){


return false;


}



setUser(data.user);


return true;


};









// LOGOUT

const logout = async()=>{


await supabase.auth.signOut();


setUser(null);


};








return (

<AuthContext.Provider


value={{

user,

loading,

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