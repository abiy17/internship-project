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
  const [selectedDepartment,setselectedDepartment ] = useState([])
  const [OtherDepartments,setOtherDepartments] = useState([])
  const [mode,setmode] = useState(false)
  const [loading,setloading] = useState(true)
  const [RatingCpt,setRatingCpt] = useState(false)
  const [MinisterData,setMinisterData] = useState([])
  const [officialsData,setofficialsData] = useState([])
  const [selected,setselected] = useState([officialsData[0]])
  const [ComMode,setComMode] = useState(false)
  const [loadingMin,setloadingMin] = useState(true)
  useEffect(()=>{
    axios.get("https://mint-server-omd5.onrender.com/department")
    .then(res => {
      setDepartment(res.data)
      setloading(false)
    })
    axios.get("https://mint-server-omd5.onrender.com/minister")
    .then(res => {
    setMinisterData(res.data)
    setloadingMin(false)
  })
  axios.get("https://mint-server-omd5.onrender.com/officials")
    .then(res => {
      setofficialsData(res.data)
      setloading(false)
    })
  },[])
  return (
    <>
    <MyContext.Provider value={
      {mode,setmode,selected,setselected,
        loadingMin,setloadingMin,
        ComMode,setComMode,officialsData,
        setofficialsData,MinisterData,setMinisterData
        ,RatingCpt,setRatingCpt,loading
        ,setloading,Departement,setDepartment
        ,selectedDepartment,setselectedDepartment
        ,OtherDepartments,setOtherDepartments}}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </MyContext.Provider>
     
    </>
  )
}
