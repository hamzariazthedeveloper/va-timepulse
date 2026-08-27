import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Clock,
  Users,
  FileText,
  Settings,
  Plus,
  Briefcase,
  DollarSign,
  ChevronRight,
  ChevronLeft
} from "lucide-react";




const menu = [

{
name:"Dashboard",
icon:LayoutDashboard,
path:"/"
},

{
name:"Add Time Entry",
icon:Plus,
path:"/add-time-entry"
},

{
name:"Timesheet",
icon:Clock,
path:"/timesheet"
},

{
name:"Projects",
icon:Briefcase,
path:"/projects"
},

{
name:"Reports",
icon:FileText,
path:"/reports"
},

{
name:"Team",
icon:Users,
path:"/team"
},

{
name:"Billing",
icon:DollarSign,
path:"/billing"
},

{
name:"Settings",
icon:Settings,
path:"/settings"
}

];





export default function Sidebar({

collapsed,

setCollapsed

}){



return (

<aside


className={`

fixed

left-0

top-0

h-screen

z-50


bg-gradient-to-b

from-[#3A1963]

to-[#120A24]


transition-all

duration-300


${

collapsed

?

"w-24"

:

"w-72"

}


`}


>





{/* Logo */}


<div

className={`

h-24

flex

items-center


${

collapsed

?

"justify-center"

:

"justify-center"

}


`}

>


<img

src="/timepulse-logo.png"

className={

collapsed

?

"w-12"

:

"w-56"

}


/>

</div>









{/* Menu */}


<nav

className="

px-3

space-y-3

overflow-y-auto

h-[calc(100vh-170px)]

"

>


{

menu.map((item,index)=>{


const Icon=item.icon;



return (


<NavLink

key={index}

to={item.path}



className={({isActive})=>`


flex

items-center

gap-4

p-3

rounded-xl


transition


${

collapsed

?

"justify-center"

:

""

}


${

isActive

?

"bg-[#F0884E] text-black"

:

"text-white hover:bg-white/10"

}



`}


>


<Icon size={22}/>


{

!collapsed &&

<span

className="whitespace-nowrap"

>

{item.name}

</span>

}


</NavLink>


)


})


}


</nav>








{/* Collapse Button */}



<div

className="

absolute

bottom-5

left-3

right-3

"


>


<button


onClick={()=>setCollapsed(!collapsed)}


className="

w-full

flex

items-center

justify-center


p-3


rounded-xl


bg-white/10


text-white


hover:bg-white/20


transition

"


>


{

collapsed

?

<ChevronRight size={20}/>

:

<ChevronLeft size={20}/>


}



</button>


</div>







</aside>


)


}