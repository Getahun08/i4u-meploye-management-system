import { useState } from 'react'

import './App.css'
import All from './Componets/MainComponets/All'
import Login from './Componets/Login'
import Register from './Componets/Register'
import Logout from './Componets/MainComponets/Logout'
import { Route, Routes ,useLocation} from 'react-router-dom'
import Navbar from './Componets/Navbar'
import ProtectedRoute from './Componets/ProtectedRouter'
import PasswordResetRequeast from './Componets/PasswordResetRequeast'
import PasswordResetconfirm from './Componets/PasswordResetConfirm'
import EmpDetails from './Componets/MainComponets/EmployeDetails'
import Employe_add from'./Componets/MainComponets/Emp_add'
import EmpEdit from'./Componets/MainComponets/Emp_update'
import Employe_delete from './Componets/MainComponets/Emp_delete'
import Visibility from './Componets/form/Mydisplay'
import Departement_add from './Componets/MainComponets/Depi_add'
import DeptDetails from './Componets/MainComponets/DepartementDetails'
import Dept_delete from './Componets/MainComponets/Dept_delete'
import DeptEdit from './Componets/MainComponets/Dept_update'
function App() {
const location= useLocation()
const Nonavbar = 
    location.pathname === "/Register" || 
    location.pathname === "/" || 
    location.pathname === "/request/Password_reset" || 
    location.pathname.startsWith("/password-reset/");
    const mywidth=200
  return (
    <>
    {   
     Nonavbar?
     <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/Register" element={<Register/>}/>
       <Route path="/request/Password_reset" element={<PasswordResetRequeast/>}/>
       <Route path="/Password-reset/:token/" element={<PasswordResetconfirm/>}/>
    </Routes>
    :
    <Navbar drawerWidth={mywidth} content={
      <Routes>
        <Route element={<ProtectedRoute/>}>
            <Route path='/all' element={<All/>}/>
            <Route path="/user/:id" element={<Visibility />} />

            <Route path='/Departement' element={<DeptDetails/>}/>
            <Route path='/Dept_add' element={<Departement_add/>}/>
            <Route path='/Departement/edit/:id' element={<DeptEdit/>}/>
            <Route path='/Departement/delete/:id' element={<Dept_delete/>}/>

            <Route path='/EmployeDetails' element={<EmpDetails/>}/>
            <Route path='/Emp_add' element={<Employe_add/>}/>
            <Route path='/EmployeDetails/edit/:id' element={<EmpEdit/>}/>
            <Route path='/EmployeDetails/delete/:id' element={<Employe_delete/>}/>

            <Route path='/logout' element={<Logout/>}/>
       </Route>
        </Routes>
  
          }/>
  }

    
   
  </>
  )
}

export default App
