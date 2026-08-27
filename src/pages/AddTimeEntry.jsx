import { useState } from "react";

import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useTimeEntries } from "../context/TimeEntryContext";
import { useAuth } from "../context/AuthContext";
import { useProjects } from "../context/ProjectContext";



export default function AddTimeEntry(){


const { addEntry } = useTimeEntries();

const { user } = useAuth();

const { projects } = useProjects();



const [submitted,setSubmitted] = useState(false);

const [errors,setErrors] = useState({});



const [form,setForm] = useState({

project:"",
task:"",
date:new Date(),
hours:"",
minutes:""

});






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







const handleTaskChange=(value)=>{


setForm({

...form,

task:value

});


setErrors({

...errors,

task:""

});


};









const submitEntry=(e)=>{


e.preventDefault();


let newErrors={};



// Remove HTML only for validation

const plainText = form.task
.replace(/<(.|\n)*?>/g,"")
.trim();





if(!form.project){

newErrors.project="Please select a project";

}



if(!plainText){

newErrors.task="Please enter work description";

}



if(
!form.hours &&
!form.minutes
){

newErrors.time="Please enter time spent";

}



if(Number(form.hours)>24){

newErrors.hours="Hours cannot exceed 24";

}



if(Number(form.minutes)>59){

newErrors.minutes="Minutes must be between 0-59";

}



if(
Number(form.hours)===0 &&
Number(form.minutes)===0
){

newErrors.time="Please enter valid time";

}





if(Object.keys(newErrors).length){

setErrors(newErrors);

return;

}







const newEntry={


id:Date.now(),


employeeId:user.id,


employee:user.name,



project:form.project,



// Save Quill HTML

task:form.task,



date:

form.date
.toISOString()
.split("T")[0],



hours:Number(form.hours || 0),


minutes:Number(form.minutes || 0),



createdAt:new Date().toISOString()

};






addEntry(newEntry);





setSubmitted(true);



setErrors({});




setForm({

project:"",
task:"",
date:new Date(),
hours:"",
minutes:""

});



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

Add Time Entry

</h1>






<div className="
max-w-3xl

bg-white

dark:bg-[#10121C]

border

border-gray-200

dark:border-white/10

rounded-2xl

p-8

shadow-sm

">



<form

onSubmit={submitEntry}

className="space-y-6"

>





{/* Logged User */}


<div className="
bg-gray-100

dark:bg-[#050812]

rounded-xl

p-4

flex

justify-between

">


<span className="
text-gray-500

dark:text-gray-400
">

Logged By

</span>



<strong className="
text-gray-900

dark:text-white
">

{user?.name}

</strong>


</div>








{/* Project */}


<div>


<label className="
block

text-sm

font-medium

text-gray-700

dark:text-gray-300

mb-2
">

Project

</label>



<select


name="project"


value={form.project}


onChange={handleChange}



className={`

w-full

p-4

rounded-xl

bg-gray-50

dark:bg-[#050812]

text-gray-900

dark:text-white

border


${
errors.project

?

"border-red-500"

:

"border-gray-200 dark:border-white/10"

}

`}

>
<option value="">
Select Project
</option>


{
projects.map((project)=>(

<option

key={project.id}

value={project.name}

>

{project.name}

</option>

))

}


</select>





{
errors.project &&

<p className="
text-red-500

text-sm

mt-2
">

{errors.project}

</p>

}


</div>








{/* Task Editor */}


<div>


<label className="
block

text-sm

font-medium

text-gray-700

dark:text-gray-300

mb-2
">

Task / Work Summary

</label>





<ReactQuill


theme="snow"


value={form.task}


onChange={handleTaskChange}


placeholder="Describe the work completed..."



/>





{
errors.task &&

<p className="
text-red-500

text-sm

mt-2
">

{errors.task}

</p>

}



</div>








{/* Date */}


<div>


<label className="
block

text-sm

font-medium

text-gray-700

dark:text-gray-300

mb-2
">

Date

</label>



<DatePicker


selected={form.date}



onChange={(date)=>

setForm({

...form,

date

})

}



dateFormat="MMMM d, yyyy"



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

"

/>



</div>








{/* Time */}


<div>


<label className="
block

text-sm

font-medium

text-gray-700

dark:text-gray-300

mb-3
">

Time Spent

</label>





<div className="
grid

grid-cols-2

gap-5

">



<div>


<input


type="number"


name="hours"


min="0"


max="24"


value={form.hours}


onChange={handleChange}


placeholder="Hours"



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

"

/>



{
errors.hours &&

<p className="
text-red-500

text-sm

mt-2
">

{errors.hours}

</p>

}



</div>







<div>


<input


type="number"


name="minutes"


min="0"


max="59"


value={form.minutes}


onChange={handleChange}


placeholder="Minutes"



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

"

/>



{
errors.minutes &&

<p className="
text-red-500

text-sm

mt-2
">

{errors.minutes}

</p>

}



</div>



</div>





{
errors.time &&

<p className="
text-red-500

text-sm

mt-3
">

{errors.time}

</p>

}


</div>








{/* Preview */}


<div className="
bg-gray-100

dark:bg-[#050812]

rounded-xl

p-4

flex

justify-between
">


<span className="
text-gray-500

dark:text-gray-400
">

Total Time

</span>



<strong className="
text-gray-900

dark:text-white
">

{form.hours || 0}h {form.minutes || 0}m

</strong>


</div>







<button


type="submit"


className="

w-full

bg-[#F0884E]

text-black

font-bold

p-4

rounded-xl

hover:opacity-90

transition

"

>

Save Time Entry

</button>







{
submitted &&

<div className="
mt-4

bg-green-500/10

border

border-green-500/20

text-green-600

rounded-xl

p-4

text-center
">

Time entry saved successfully ✅

</div>

}



</form>



</div>



</div>

)

}