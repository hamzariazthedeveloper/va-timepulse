export default function Table(){

const logs=[
{
date:"Aug 26",
client:"Practice Hub",
task:"Updated chatbot workflow",
hours:"5h"
},
{
date:"Aug 25",
client:"MITS",
task:"Data migration",
hours:"3h"
}
];


return(

<table className="w-full text-sm">


<thead>

<tr className="text-gray-400">

<th className="text-left">
Date
</th>

<th>
Client
</th>

<th>
Task
</th>

<th>
Hours
</th>

</tr>

</thead>


<tbody>

{
logs.map((log,index)=>(

<tr
key={index}
className="
border-t
border-white/10
"
>

<td className="py-4">
{log.date}
</td>

<td>
{log.client}
</td>

<td>
{log.task}
</td>

<td className="
text-[#F0884E]
font-bold
">

{log.hours}

</td>


</tr>

))

}


</tbody>


</table>

)

}