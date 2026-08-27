import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { ChevronRight, LogOut } from "lucide-react";



export default function ProfileMenu(){


const { user, logout } = useAuth();


const [open,setOpen] = useState(false);


const menuRef = useRef();




// Close dropdown when clicking outside

useEffect(()=>{


const handleClick = (e)=>{


if(
menuRef.current &&
!menuRef.current.contains(e.target)
){

setOpen(false);

}


};



document.addEventListener(
"mousedown",
handleClick
);



return ()=>{

document.removeEventListener(
"mousedown",
handleClick
);

};


},[]);






const initials = user?.name

?

user.name
.split(" ")
.map(word=>word[0])
.join("")
.substring(0,2)
.toUpperCase()

:

"HR";






return (


<div

className="relative"

ref={menuRef}

>





{/* Profile Button */}



<button


onClick={()=>setOpen(!open)}


className="

w-10

h-10

rounded-full

bg-[#C6A47C]

text-white

font-semibold

flex

items-center

justify-center

"

>


{initials}


</button>









{/* Dropdown */}



{

open &&



<div


className="

absolute

right-0

mt-3

w-80

bg-white

dark:bg-[#10121C]

rounded-xl

shadow-xl

border

border-gray-200

dark:border-white/10

overflow-hidden

z-50

"

>






{/* User Details */}



<div

className="

flex

items-center

gap-4

p-4

border-b

border-gray-200

dark:border-white/10

"

>



<div


className="

w-12

h-12

rounded-full

bg-[#C6A47C]

text-white

font-bold

flex

items-center

justify-center

"

>

{initials}


</div>







<div>


<h3

className="

font-semibold

text-gray-900

dark:text-white

"

>

{user?.name}


</h3>




<p

className="

text-sm

text-gray-500

"

>

{user?.email}


</p>



</div>



</div>









{/* Logout */}



<button


onClick={()=>{

logout();

setOpen(false);

}}



className="

w-full

flex

items-center

gap-3

px-5

py-4

border-t

border-gray-200

dark:border-white/10

text-gray-600

dark:text-gray-300

hover:text-red-500

hover:bg-red-50

dark:hover:bg-red-500/10

transition

"

>


<LogOut size={18}/>


<span>

Signout

</span>


</button>






</div>


}





</div>


)

}