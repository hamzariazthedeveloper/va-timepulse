import {
createContext,
useContext,
useState,
useEffect
} from "react";


const ProjectContext=createContext();



export function ProjectProvider({children}){


const [projects,setProjects]=useState(()=>{


const saved=localStorage.getItem("projects");


return saved
?
JSON.parse(saved)
:
[
{
id:1,
name:"MITS Migration",
client:"Made In The Shade",
team:"5 Members",
status:"In Progress"
},

{
id:2,
name:"DMBA Automation",
client:"DMBA Consult",
team:"3 Members",
status:"Active"
},

{
id:3,
name:"Practice Hub CRM",
client:"Practice Hub",
team:"6 Members",
status:"Active"
}

];


});




useEffect(()=>{

localStorage.setItem(
"projects",
JSON.stringify(projects)
);


},[projects]);






const addProject=(project)=>{


setProjects([

...projects,

{
...project,
id:Date.now()
}

]);


};





return (

<ProjectContext.Provider

value={{

projects,
addProject

}}

>

{children}

</ProjectContext.Provider>

)


}



export function useProjects(){

return useContext(ProjectContext);

}