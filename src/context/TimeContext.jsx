import { createContext, useContext, useState } from "react";


const TimeContext = createContext();


export function TimeProvider({children}){


const [timeEntries,setTimeEntries] = useState([

{
date:"Aug 26",
client:"Practice Hub",
project:"AI Automation",
task:"Updated chatbot workflow",
hours:5,
employee:"Hamza"
}

]);


const addTimeEntry=(entry)=>{

setTimeEntries([
...timeEntries,
entry
]);

};


return(

<TimeContext.Provider
value={{
timeEntries,
addTimeEntry
}}
>

{children}

</TimeContext.Provider>

)

}



export function useTime(){

return useContext(TimeContext);

}