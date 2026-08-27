import {
  createContext,
  useContext,
  useState
} from "react";


const TimeEntryContext = createContext();




export function TimeEntryProvider({children}){


const [entries,setEntries] = useState(()=>{


const saved = localStorage.getItem("timeEntries");


return saved
? JSON.parse(saved)
: [];


});






// Add new time entry

const addEntry = (entry)=>{


const updatedEntries = [

...entries,

entry

];



setEntries(updatedEntries);



localStorage.setItem(

"timeEntries",

JSON.stringify(updatedEntries)

);


};







// Delete time entry

const deleteEntry = (id)=>{


const updatedEntries = entries.filter(

(entry)=>

entry.id !== id

);



setEntries(updatedEntries);



localStorage.setItem(

"timeEntries",

JSON.stringify(updatedEntries)

);


};







// Update time entry (future use)

const updateEntry = (id, updatedData)=>{


const updatedEntries = entries.map(

(entry)=>

entry.id === id

?

{
...entry,
...updatedData
}

:

entry

);



setEntries(updatedEntries);



localStorage.setItem(

"timeEntries",

JSON.stringify(updatedEntries)

);


};







// Clear all entries

const clearEntries = ()=>{


setEntries([]);


localStorage.removeItem(
"timeEntries"
);


};







return (

<TimeEntryContext.Provider


value={{

entries,

addEntry,

deleteEntry,

updateEntry,

clearEntries

}}


>


{children}


</TimeEntryContext.Provider>

)


}






export function useTimeEntries(){


return useContext(TimeEntryContext);


}