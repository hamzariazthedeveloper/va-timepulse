import { useState } from "react";
import { useTime } from "../context/TimeContext";


export default function TimeEntryForm(){

const [entry,setEntry] = useState({

client:"",
project:"",
task:"",
date:"",
hours:"",
notes:""

});


const handleChange=(e)=>{

setEntry({

...entry,

[e.target.name]:e.target.value

});

};



const handleSubmit=(e)=>{

e.preventDefault();


addTimeEntry({

...entry,

hours:Number(entry.hours),

employee:"Hamza"

});


alert("Time entry added");


setEntry({

client:"",
project:"",
task:"",
date:"",
hours:"",
notes:""

});

};



return (

<form
onSubmit={handleSubmit}
className="space-y-4"
>


<input
name="client"
value={entry.client}
onChange={handleChange}
placeholder="Client"
className="
w-full
bg-[#050812]
p-3
rounded-lg
"
/>


<input
name="project"
value={entry.project}
onChange={handleChange}
placeholder="Project"
className="
w-full
bg-[#050812]
p-3
rounded-lg
"
/>


<input
name="task"
value={entry.task}
onChange={handleChange}
placeholder="Task Description"
className="
w-full
bg-[#050812]
p-3
rounded-lg
"
/>


<input
type="date"
name="date"
value={entry.date}
onChange={handleChange}
className="
w-full
bg-[#050812]
p-3
rounded-lg
"
/>


<input
type="number"
name="hours"
value={entry.hours}
onChange={handleChange}
placeholder="Hours Worked"
className="
w-full
bg-[#050812]
p-3
rounded-lg
"
/>


<textarea
name="notes"
value={entry.notes}
onChange={handleChange}
placeholder="Additional Notes"
className="
w-full
bg-[#050812]
p-3
rounded-lg
h-28
"
/>


<button
className="
w-full
bg-[#F0884E]
text-black
p-3
rounded-lg
font-bold
"
>

Submit Entry

</button>


</form>

)

}