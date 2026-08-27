import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "./context/AuthContext";
import { useTheme } from "./context/ThemeContext";
import { useState } from "react";


// Public Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";


// Private Pages
import EmployeeDashboard from "./pages/EmployeeDashboard";
import AddTimeEntry from "./pages/AddTimeEntry";
import Timesheet from "./pages/Timesheet";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Reports from "./pages/Reports";
import Team from "./pages/Team";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";


// Components
import Sidebar from "./components/Sidebar";





export default function App(){


const { user, loading } = useAuth();

const { darkMode } = useTheme();

const [collapsed,setCollapsed] = useState(false);

if(loading){

return null;

}






// =========================
// NOT LOGGED IN
// =========================


if(!user){


return (

<Routes>


<Route

path="/login"

element={<Login />}

/>



<Route

path="/signup"

element={<Signup />}

/>



<Route

path="*"

element={<Navigate to="/login" replace />}

/>



</Routes>

);


}







// =========================
// LOGGED IN
// =========================


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

p-6

lg:p-8

transition-all

duration-300


${

collapsed

?

"ml-24"

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





<Route

path="*"

element={<Navigate to="/" replace />}

/>




</Routes>





</main>





</div>


)


}