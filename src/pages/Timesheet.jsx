import { useState } from "react";
import { useTimeEntries } from "../context/TimeEntryContext";



function TaskCell({content}){


const [expanded,setExpanded] = useState(false);



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

w-64

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

content && content.length > 80 &&


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








export default function Timesheet(){



const {

entries,

deleteEntry

}=useTimeEntries();




const [deleteId,setDeleteId]=useState(null);





const totalMinutes = entries.reduce(

(total,entry)=>

total +

(entry.hours * 60) +

entry.minutes

,0);



const totalHours=Math.floor(totalMinutes/60);

const remainingMinutes=totalMinutes%60;






const handleDelete=()=>{


deleteEntry(deleteId);


setDeleteId(null);


};






return (

<div>



<h1 className="
text-3xl
font-bold

text-gray-900

dark:text-white

mb-8
">

My Timesheet

</h1>









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

Total Entries

</p>


<h2 className="
text-3xl

font-bold

text-gray-900

dark:text-white

mt-3
">

{entries.length}

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

Total Logged Time

</p>



<h2 className="
text-3xl

font-bold

text-gray-900

dark:text-white

mt-3
">

{totalHours}h {remainingMinutes}m

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

Month

</p>



<h2 className="
text-xl

font-bold

text-gray-900

dark:text-white

mt-3
">

{
new Date().toLocaleString(
"en-US",
{
month:"long"
}
)
}

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
">

Employee

</th>


<th className="
text-left
">

Date

</th>



<th className="
text-left
">

Project

</th>



<th className="
text-left
w-64
">
Task
</th>



<th className="
text-left
">

Time

</th>



<th className="
text-left
">

Action

</th>


</tr>


</thead>







<tbody>


{

entries.length===0

?

<tr>

<td

colSpan="6"

className="
p-8

text-center

text-gray-500
"

>

No time entries found

</td>

</tr>



:

entries.map((entry)=>(


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







<td className="
text-gray-700

dark:text-gray-300
">

{entry.project}

</td>







<td className="
w-64
max-w-64
align-top
">

<TaskCell content={entry.task}/>

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

hover:text-red-700

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

mb-4
">

Delete Entry?

</h2>



<p className="
text-gray-500

dark:text-gray-400

mb-6
">

Are you sure you want to delete this time entry?

</p>





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

onClick={handleDelete}

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