import { useEffect, useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css' 
import { BrowserRouter} from "react-router-dom";
import MyContext from "./context.js"
import AnimatedRoutes from './pages/AnimatedRoutes'
import axios from 'axios';
export function App() {
  const [Departement,setDepartment] = useState([])
  const [ selectedDepartment,setselectedDepartment ] = useState([])
  const [ OtherDepartments,setOtherDepartments ] = useState([])
  const [mode,setmode] = useState(false)
  const [loading,setloading] = useState(true)
  useEffect(()=>{
    axios.get("http://localhost:5000/department")
    .then(res => {
      setDepartment(res.data)
      setloading(false)
    })
  },[])
  return (
    <>
    <MyContext.Provider value={{mode,setmode,loading,setloading,Departement,setDepartment,selectedDepartment,setselectedDepartment,OtherDepartments,setOtherDepartments}}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </MyContext.Provider>
     
    </>
  )
}
