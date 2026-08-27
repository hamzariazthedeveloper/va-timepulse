import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";



export default function Login(){


const {login}=useAuth();

const navigate=useNavigate();



const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");





const submit=(e)=>{

e.preventDefault();


const success = login(

email,

password

);



if(success){

navigate("/");

}

else{


setError(
"Invalid email or password"
);


}


};







return (


<div className="
min-h-screen

flex

items-center

justify-center

bg-gray-100

dark:bg-[#050812]

p-5

">





<div className="
w-full

max-w-md

bg-white

dark:bg-[#10121C]

rounded-2xl

p-8

border

border-gray-200

dark:border-white/10

">






<h1 className="
text-3xl

font-bold

text-gray-900

dark:text-white

mb-6

">

Login

</h1>








<form

onSubmit={submit}

className="space-y-5"

>





<input


type="email"


placeholder="Email"


value={email}


onChange={(e)=>

setEmail(e.target.value)

}


className="

w-full

p-4

rounded-xl

bg-gray-50

dark:bg-[#050812]

border

border-gray-200

dark:border-white/10

text-gray-900

dark:text-white

outline-none

"

/>








<input


type="password"


placeholder="Password"


value={password}


onChange={(e)=>

setPassword(e.target.value)

}


className="

w-full

p-4

rounded-xl

bg-gray-50

dark:bg-[#050812]

border

border-gray-200

dark:border-white/10

text-gray-900

dark:text-white

outline-none

"

/>









{
error &&

<p className="
text-red-500

text-sm

">

{error}

</p>

}









<button


type="submit"


className="

w-full

bg-[#F0884E]

text-black

p-4

rounded-xl

font-bold

hover:opacity-90

transition

"

>

Login

</button>







</form>









<div className="

mt-6

text-center

">


<p className="
text-sm

text-gray-500

dark:text-gray-400

">

Only VA Matters employees can access this portal.

</p>





<Link


to="/signup"


className="

inline-block

mt-3

text-[#F0884E]

font-medium

"

>

Create Account

</Link>



</div>







</div>





</div>


)

}