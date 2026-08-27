import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";



export default function Signup(){


const navigate = useNavigate();

const { signup } = useAuth();





const [form,setForm] = useState({

name:"",
email:"",
password:""

});



const [errors,setErrors] = useState({});







const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});



setErrors({

...errors,

[e.target.name]:""

});


};









const submit=(e)=>{


e.preventDefault();



let newErrors={};






// NAME VALIDATION


if(!form.name.trim()){


newErrors.name="Full name is required";


}

else if(form.name.trim().length < 3){


newErrors.name="Name must be at least 3 characters";


}








// EMAIL VALIDATION


const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;



if(!form.email.trim()){


newErrors.email="Email is required";


}

else if(!emailRegex.test(form.email)){


newErrors.email="Please enter a valid email address";


}

else if(

!form.email

.toLowerCase()

.endsWith(".vamatters@gmail.com")

){


newErrors.email =
"Only VA Matters employee emails are allowed";


}








// PASSWORD VALIDATION


const strongPasswordRegex =

/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;






if(!form.password){


newErrors.password="Password is required";


}

else if(!strongPasswordRegex.test(form.password)){


newErrors.password =

"Password must be exactly 8 characters with uppercase, lowercase, number and special character";


}









if(Object.keys(newErrors).length > 0){


setErrors(newErrors);


return;


}









const result = signup(

form.name,

form.email,

form.password

);





if(!result.success){


setErrors({

email:result.message

});


return;


}







navigate("/");


};










return (

<div className="

min-h-screen

flex

items-center

justify-center

bg-[#050812]

p-5

">






<div className="

bg-[#10121C]

border

border-white/10

rounded-2xl

p-8

w-full

max-w-md

">







<h1 className="

text-3xl

font-bold

text-white

mb-6

">

Create Account

</h1>










<form

onSubmit={submit}

className="space-y-5"

>







{/* NAME */}


<div>


<input


name="name"

placeholder="Full Name"


value={form.name}


onChange={handleChange}


className="

w-full

p-4

rounded-xl

bg-[#050812]

border

border-white/10

text-white

outline-none

"


/>



{

errors.name &&

<p className="

text-red-500

text-sm

mt-2

">

{errors.name}

</p>

}



</div>









{/* EMAIL */}


<div>


<input


name="email"

type="email"

placeholder="Email"


value={form.email}


onChange={handleChange}


className="

w-full

p-4

rounded-xl

bg-[#050812]

border

border-white/10

text-white

outline-none

"


/>



{

errors.email &&

<p className="

text-red-500

text-sm

mt-2

">

{errors.email}

</p>

}



</div>









{/* PASSWORD */}


<div>


<input


name="password"

type="password"

placeholder="Password (exactly 8 characters)"


value={form.password}


onChange={handleChange}


maxLength={8}


className="

w-full

p-4

rounded-xl

bg-[#050812]

border

border-white/10

text-white

outline-none

"


/>





{

errors.password &&

<p className="

text-red-500

text-sm

mt-2

">

{errors.password}

</p>

}







<p className="

text-gray-400

text-xs

mt-2

">

Password requirements:

<br/>

• Exactly 8 characters

<br/>

• One uppercase letter

<br/>

• One lowercase letter

<br/>

• One number

<br/>

• One special character (@$!%*?&)

</p>






</div>









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

Create Account

</button>







</form>









<p className="

text-gray-400

mt-5

text-center

">


Already have account?


<Link

to="/login"

className="

text-[#F0884E]

ml-2

"

>

Login

</Link>


</p>







</div>






</div>


)

}