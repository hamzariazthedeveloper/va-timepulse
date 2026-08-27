import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "./context/AuthContext";
import { useTheme } from "./context/ThemeContext";


import Login from "./pages/Login";

import Sidebar from "./components/Sidebar";


import ProjectDetails from "./pages/ProjectDetails";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AddTimeEntry from "./pages/AddTimeEntry";
import Timesheet from "./pages/Timesheet";
import Projects from "./pages/Projects";
import Reports from "./pages/Reports";
import Team from "./pages/Team";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";




export default function App(){



const { user } = useAuth();

const { darkMode } = useTheme();



const [collapsed,setCollapsed] = useState(false);





if(!user){

return <Login />

}






return (


<div


className={`

min-h-screen

flex


${

darkMode

?

"bg-[#050812] text-white"

:

"bg-[#F8F8FB] text-gray-900"

}

`}


>



<Sidebar

collapsed={collapsed}

setCollapsed={setCollapsed}

/>







<main


className={`

flex-1

p-8

transition-all

duration-300


${

collapsed

?

"ml-20"

:

"ml-72"

}


`}


>


<Routes>



<Route

path="/"

element={<EmployeeDashboard />}

/>



<Route

path="/add-time-entry"

element={<AddTimeEntry />}

/>



<Route

path="/timesheet"

element={<Timesheet />}

/>



<Route

path="/projects"

element={<Projects />}

/>



<Route

path="/projects/:id"

element={<ProjectDetails />}

/>



<Route

path="/reports"

element={<Reports />}

/>



<Route

path="/team"

element={<Team />}

/>



<Route

path="/billing"

element={<Billing />}

/>



<Route

path="/settings"

element={<Settings />}

/>



</Routes>



</main>



</div>


)


}