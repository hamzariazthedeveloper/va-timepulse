import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useProjects } from "../context/ProjectContext";



export default function Projects(){


const navigate = useNavigate();


const {
projects,
addProject
}=useProjects();




const [showModal,setShowModal]=useState(false);



const [form,setForm]=useState({

name:"",
client:"",
status:"Active"

});



const [errors,setErrors]=useState({});







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








const createProject=(e)=>{


e.preventDefault();


let newErrors={};



if(!form.name.trim()){

newErrors.name="Project name is required";

}


if(!form.client.trim()){

newErrors.client="Client name is required";

}




if(Object.keys(newErrors).length){

setErrors(newErrors);

return;

}





addProject({

name:form.name,

client:form.client,

status:form.status,

team:"0 Members"

});





setForm({

name:"",
client:"",
status:"Active"

});


setShowModal(false);

setErrors({});


};









return (

<div>






{/* Header */}



<div className="
flex

flex-col

sm:flex-row

justify-between

items-start

gap-4

mb-8

">


<div>


<h1 className="
text-3xl

font-bold

text-gray-900

dark:text-white

">

Projects

</h1>



<p className="
text-gray-500

dark:text-gray-400

mt-2

">

Manage projects and view logged hours.

</p>



</div>







<button

onClick={()=>setShowModal(true)}

className="
bg-[#F0884E]

text-black

px-4

sm:px-5

py-3

rounded-xl

font-semibold

text-sm

sm:text-base

"

>

+ Create Project

</button>




</div>









{/* Project Cards */}



<div className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-3

gap-6

">





{


projects.map((project)=>(


<div

key={project.id}

className="

bg-white

dark:bg-[#10121C]

border

border-gray-200

dark:border-white/10

rounded-2xl

p-5

sm:p-6

min-h-[300px]

flex

flex-col

hover:border-[#F0884E]

transition

"

>







<h2 className="
text-xl

font-bold

text-gray-900

dark:text-white

break-words

">

{project.name}

</h2>







<p className="
text-gray-500

dark:text-gray-400

mt-2

">

{project.client}

</p>









<div className="
mt-6

space-y-4

flex-1

">





<div className="
flex

justify-between

gap-4

">

<span className="
text-gray-500

dark:text-gray-400
">

Hours

</span>



<span className="
text-gray-900

dark:text-white
">

{project.hours || "0 hrs"}

</span>


</div>







<div className="
flex

justify-between

gap-4

">


<span className="
text-gray-500

dark:text-gray-400
">

Team

</span>



<span className="
text-gray-900

dark:text-white
">

{project.team}

</span>


</div>








<div className="
flex

justify-between

gap-4

">


<span className="
text-gray-500

dark:text-gray-400
">

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


onClick={()=>navigate(`/projects/${project.id}`)}


className="
mt-auto

w-full

bg-[#F0884E]

text-black

p-3

rounded-xl

font-semibold

"

>

Open Project

</button>







</div>



))


}




</div>













{/* Create Project Modal */}




{


showModal &&



<div className="
fixed

inset-0

bg-black/50

flex

items-center

justify-center

z-50

p-4

">






<div className="
w-full

max-w-lg

bg-white

dark:bg-[#10121C]

rounded-2xl

p-6

sm:p-8

border

border-gray-200

dark:border-white/10

">






<div className="
flex

justify-between

items-center

mb-6

">



<h2 className="
text-2xl

font-bold

text-gray-900

dark:text-white

">

Create Project

</h2>





<button

onClick={()=>setShowModal(false)}

className="
text-gray-500

text-xl

"

>

×

</button>



</div>








<form

onSubmit={createProject}

className="space-y-5"

>






<div>


<label className="
text-sm

text-gray-700

dark:text-gray-300

">

Project Name

</label>



<input


name="name"


value={form.name}


onChange={handleChange}


placeholder="Enter project name"


className="
mt-2

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









<div>


<label className="
text-sm

text-gray-700

dark:text-gray-300

">

Client Name

</label>



<input


name="client"


value={form.client}


onChange={handleChange}


placeholder="Enter client name"


className="
mt-2

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

errors.client &&

<p className="
text-red-500

text-sm

mt-2

">

{errors.client}

</p>

}


</div>









<div>


<label className="
text-sm

text-gray-700

dark:text-gray-300

">

Status

</label>



<select


name="status"


value={form.status}


onChange={handleChange}


className="
mt-2

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

>


<option>
Active
</option>


<option>
In Progress
</option>


<option>
Completed
</option>



</select>


</div>







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

Create Project

</button>






</form>






</div>





</div>



}






</div>

)

}