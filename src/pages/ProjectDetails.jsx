import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import { useProjects } from "../context/ProjectContext";
import { useTimeEntries } from "../context/TimeEntryContext";



function TaskCell({content}){


const [expanded,setExpanded]=useState(false);



return (

<div>


<div

className={`
text-sm

text-gray-700

dark:text-gray-300

break-words

overflow-hidden

transition-all

duration-300


${
expanded
?
"max-h-96"
:
"max-h-12"
}

`}

dangerouslySetInnerHTML={{

__html:content

}}

/>



{

content?.length > 80 &&

<button

onClick={()=>setExpanded(!expanded)}

className="
text-[#F0884E]

text-xs

mt-2

font-medium

"

>

{

expanded

?
"Show Less"
:
"View More"

}

</button>

}



</div>

)

}








export default function ProjectDetails(){



const {id}=useParams();



const {

projects

}=useProjects();



const {

entries,

deleteEntry

}=useTimeEntries();






const [deleteId,setDeleteId]=useState(null);







// FIX ID MATCHING

const project = projects.find(

(item)=>

String(item.id) === String(id)

);








if(!project){


return (

<div className="
text-gray-900

dark:text-white

">

Project not found

</div>

)

}







const projectEntries = entries.filter(

(entry)=>

entry.project === project.name

);







const totalMinutes = projectEntries.reduce(

(total,entry)=>

total +

(entry.hours * 60)

+

entry.minutes

,0);



const totalHours=Math.floor(totalMinutes/60);

const minutes=totalMinutes%60;







return (

<div>






<Link

to="/projects"

className="
text-[#F0884E]

font-medium

inline-block

mb-6

"

>

← Back to Projects

</Link>







<div className="
mb-8
">


<h1 className="
text-3xl

font-bold

text-gray-900

dark:text-white
">

{project.name}

</h1>



<p className="
text-gray-500

dark:text-gray-400

mt-2
">

{project.client}

</p>


</div>









<div className="
grid

grid-cols-3

gap-5

mb-8

">





<div className="
bg-white

dark:bg-[#10121C]

border

border-gray-200

dark:border-white/10

rounded-2xl

p-6
">


<p className="
text-gray-500

dark:text-gray-400
">

Total Time

</p>



<h2 className="
text-3xl

font-bold

text-gray-900

dark:text-white

mt-3
">

{totalHours}h {minutes}m

</h2>


</div>








<div className="
bg-white

dark:bg-[#10121C]

border

border-gray-200

dark:border-white/10

rounded-2xl

p-6
">


<p className="
text-gray-500

dark:text-gray-400
">

Entries

</p>



<h2 className="
text-3xl

font-bold

text-gray-900

dark:text-white

mt-3
">

{projectEntries.length}

</h2>


</div>








<div className="
bg-white

dark:bg-[#10121C]

border

border-gray-200

dark:border-white/10

rounded-2xl

p-6
">


<p className="
text-gray-500

dark:text-gray-400
">

Status

</p>



<h2 className="
text-xl

font-bold

text-[#F0884E]

mt-3
">

{project.status}

</h2>


</div>





</div>









<div className="
bg-white

dark:bg-[#10121C]

border

border-gray-200

dark:border-white/10

rounded-2xl

overflow-hidden
">





<table className="
w-full

table-fixed
">



<thead>


<tr className="
border-b

border-gray-200

dark:border-white/10

text-gray-500

dark:text-gray-400
">



<th className="
p-5

text-left

w-40
">

Employee

</th>




<th className="
text-left

w-32
">

Date

</th>




<th className="
text-left

w-80
">

Task

</th>




<th className="
text-left

w-32
">

Time

</th>




<th className="
text-left

w-24
">

Action

</th>



</tr>


</thead>








<tbody>



{

projectEntries.length===0

?

<tr>

<td

colSpan="5"

className="
p-8

text-center

text-gray-500
"

>

No time entries yet

</td>

</tr>



:

projectEntries.map((entry)=>(



<tr

key={entry.id}

className="
border-b

border-gray-200

dark:border-white/10
"

>





<td className="
p-5

text-gray-900

dark:text-white

font-medium
">

{entry.employee}

</td>







<td className="
text-gray-700

dark:text-gray-300
">

{entry.date}

</td>







<td>


<TaskCell

content={entry.task}

/>


</td>








<td className="
text-[#F0884E]

font-semibold
">

{entry.hours}h {entry.minutes}m

</td>








<td>


<button

onClick={()=>setDeleteId(entry.id)}

className="
text-red-500

font-medium

"

>

Delete

</button>


</td>






</tr>



))


}



</tbody>



</table>



</div>









{

deleteId &&


<div className="
fixed

inset-0

bg-black/50

flex

items-center

justify-center

z-50
">



<div className="
bg-white

dark:bg-[#10121C]

rounded-2xl

p-6

w-96
">


<h2 className="
text-xl

font-bold

text-gray-900

dark:text-white

mb-5
">

Delete Entry?

</h2>



<div className="
flex

gap-3
">



<button

onClick={()=>setDeleteId(null)}

className="
flex-1

border

rounded-xl

p-3
"

>

Cancel

</button>






<button

onClick={()=>{

deleteEntry(deleteId);

setDeleteId(null);

}}

className="
flex-1

bg-red-500

text-white

rounded-xl

p-3
"

>

Delete

</button>




</div>


</div>


</div>


}




</div>

)

}