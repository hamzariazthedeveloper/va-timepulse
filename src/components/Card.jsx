export default function Card({title,value}){

return (

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

<p
className="
text-gray-500
dark:text-gray-400
"
>
{title}
</p>


<h3
className="
text-3xl
font-bold
mt-3

text-gray-900
dark:text-white
"
>
{value}
</h3>


</div>

)

}