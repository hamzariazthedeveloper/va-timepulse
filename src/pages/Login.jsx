import {useState} from "react";
import {useAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";


export default function Login(){


const {login}=useAuth();

const navigate=useNavigate();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");



const submit=(e)=>{

e.preventDefault();


const success=login(
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

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
w-full
p-4
rounded-xl

bg-gray-50
dark:bg-[#050812]

border
border-gray-200
dark:border-white/10

"

/>



<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
p-4
rounded-xl

bg-gray-50
dark:bg-[#050812]

border
border-gray-200
dark:border-white/10

"

/>



{
error &&

<p className="text-red-500">

{error}

</p>

}



<button

className="
w-full

bg-[#F0884E]

text-black

p-4

rounded-xl

font-bold
"

>

Login

</button>



</form>



<p className="
text-sm
text-gray-500
mt-5
">

Demo:
<br/>

Email:
hamza@test.com

<br/>

Password:
123456

</p>



</div>


</div>

)

}