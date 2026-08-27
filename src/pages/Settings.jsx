import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";


export default function Settings(){


const {
darkMode,
setDarkMode
} = useTheme();



return (

<div>


<h1 className="
text-3xl
font-bold

text-gray-900
dark:text-white

mb-8
">

Settings

</h1>



<div
className="
bg-white
dark:bg-[#10121C]

border
border-gray-200
dark:border-white/10

rounded-2xl
p-6

max-w-xl
"
>


<h2 className="
text-xl
font-semibold

text-gray-900
dark:text-white

mb-5
">

Appearance

</h2>



<div className="
flex
items-center
justify-between
">


<div>

<p className="
font-medium
text-gray-900
dark:text-white
">

Theme Mode

</p>


<p className="
text-sm
text-gray-500
dark:text-gray-400
">

Switch between light and dark mode

</p>


</div>




<button

onClick={() => {
console.log("clicked");
setDarkMode(!darkMode);
}}


className="
flex
items-center
gap-2

bg-[#F0884E]

text-black

px-5
py-3

rounded-xl

font-semibold
"

>


{
darkMode

?

<>

<Sun size={18}/>

Light Mode

</>

:

<>

<Moon size={18}/>

Dark Mode

</>

}


</button>



</div>



</div>



</div>

)

}