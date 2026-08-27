import Card from "../components/Card";


export default function EmployeeDashboard(){


const projects = [

{
name:"MITS Migration",
client:"Made In The Shade",
hours:"240 hrs",
team:"5 Members",
status:"In Progress"
},

{
name:"DMBA Automation",
client:"DMBA Consult",
hours:"120 hrs",
team:"3 Members",
status:"Active"
},

{
name:"Practice Hub CRM",
client:"Practice Hub",
hours:"320 hrs",
team:"6 Members",
status:"Active"
}

];



const activity = [

{
text:"Hamza added 5 hours to MITS Migration",
time:"Today"
},

{
text:"Ali completed API integration task",
time:"Yesterday"
},

{
text:"Ahtesham updated CRM workflow",
time:"2 days ago"
}

];



return(

<div>



{/* Header */}

<div className="mb-8">


<h1 className="
text-3xl
font-bold
text-gray-900
dark:text-white
">

Good Morning, Hamza 👋

</h1>


<p className="
text-gray-500
dark:text-gray-400
">

Track projects, hours, and team progress.

</p>


</div>





{/* Summary Cards */}

<div className="
grid
grid-cols-4
gap-5
mb-10
">


<Card
title="Total Hours"
value="2,450 hrs"
/>


<Card
title="Active Projects"
value="12"
/>


<Card
title="Active Clients"
value="25"
/>


<Card
title="Estimated Billing"
value="$52,000"
/>


</div>






{/* Projects */}

<div className="mb-10">



<div className="
flex
justify-between
items-center
mb-5
">


<h2 className="
text-2xl
font-bold

text-gray-900
dark:text-white
">
Recent Projects
</h2>



<button
className="
bg-[#F0884E]
text-black
px-5
py-2
rounded-lg
font-semibold
"
>

View All Projects

</button>



</div>






<div className="
grid
grid-cols-3
gap-6
">



{
projects.map((project,index)=>(


<div

key={index}

className="
bg-white
dark:bg-[#10121C]

border
border-gray-200
dark:border-white/10

rounded-2xl
p-6

shadow-sm
dark:shadow-none

hover:border-[#F0884E]

transition
"

>


<h3 className="
text-xl
font-bold

text-gray-900
dark:text-white

">

{project.name}

</h3>



<p className="
text-gray-500
dark:text-gray-400

mt-1
">

{project.client}

</p>





<div className="
mt-5
space-y-3
">



<div className="
flex
justify-between
">

<span className="text-gray-500">

Hours

</span>


<span className="
text-gray-900
dark:text-white
">

{project.hours}

</span>


</div>





<div className="
flex
justify-between
">


<span className="text-gray-500">

Team

</span>


<span className="text-gray-900">

{project.team}

</span>


</div>






<div className="
flex
justify-between
">


<span className="text-gray-500">

Status

</span>



<span className="
text-[#F0884E]
font-medium
">

{project.status}

</span>


</div>




</div>





<button

className="
mt-6
w-full
border
border-[#F0884E]
text-[#F0884E]
p-3
rounded-lg
hover:bg-[#F0884E]
hover:text-black
transition
"

>

Open Project

</button>




</div>


))

}



</div>



</div>








{/* Bottom Section */}



<div className="
grid
grid-cols-2
gap-6
">





{/* Recent Activity */}


<div

className="
bg-white
dark:bg-[#10121C]

border
border-gray-200
dark:border-white/10

rounded-2xl
p-6

shadow-sm
dark:shadow-none
"

>


<h2 className="
text-xl
font-bold

text-gray-900
dark:text-white

mb-5
">

Recent Activity

</h2>




{
activity.map((item,index)=>(


<div

key={index}

className="
border-b
border-gray-200
py-4
"

>


<p className="
text-gray-900
dark:text-white
">

{item.text}

</p>



<span className="
text-gray-500
text-sm
">

{item.time}

</span>



</div>



))

}




</div>







{/* Quick Actions */}


<div
className="
bg-white
dark:bg-[#10121C]

border
border-gray-200
dark:border-white/10

rounded-2xl
p-6

shadow-sm
dark:shadow-none
"
>


<h2 className="
text-xl
font-bold

text-gray-900
dark:text-white

mb-5
">

Quick Actions

</h2>





<button

className="
w-full
bg-[#F0884E]
text-black
p-4
rounded-xl
font-bold
mb-4
"

>

+ Add Time Entry

</button>






<button

className="
w-full

border
border-gray-300
dark:border-white/20

text-gray-700
dark:text-white

p-4
rounded-xl

hover:bg-gray-100
dark:hover:bg-white/10

transition
"

>

Generate Report

</button>




</div>





</div>





</div>


)

}