import { useEffect, useState } from 'preact/hooks'
import './app.css'
import MyContext from './context'
import { BrowserRouter, Route , Routes} from "react-router-dom";
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
export function App() {
  const [departments,setdepartments] = useState([])
  const [id,setid] = useState(0)
  const [disableBtn,setdisableBtn] = useState(false)
  const [department,setdepartment] = useState("")
  const [description,setdescription] = useState("")
  const [direction,setdirection] = useState("")
  const [validId,setvalidId] = useState(false)
  useEffect(()=>{
    fetch(`http://localhost:5000/department`)
    .then(res => res.json())
    .then(data =>{
      setdepartments(data)
    })
  },[])
  return (
    <>
     <MyContext.Provider value={{departments,setdepartments,id,setid,disableBtn,setdisableBtn,department,setdepartment,description,setdescription,direction,setdirection,validId,setvalidId}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CreatePage />}/>
            <Route path='/edit' element={<EditPage />}/>
          </Routes>
        </BrowserRouter>
     </MyContext.Provider>
    </>
  )
}
