import { useEffect, useState } from 'preact/hooks'
import './app.css'
import MyContext from './context'
import { BrowserRouter, Route , Routes} from "react-router-dom";
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import UpdatePage from './pages/UpdatePage';
import Ratings from './pages/Ratings';
import Home from './pages/Home';
import CreateMin from './pages/createMin';
export function App() {
  const [departments,setdepartments] = useState([])
  const [id,setid] = useState(0)
  const [disableBtn,setdisableBtn] = useState(false)
  const [department,setdepartment] = useState("")
  const [description,setdescription] = useState("")
  const [direction,setdirection] = useState("")
  const [validId,setvalidId] = useState(false)
  const [ validForm,setValidForm ] = useState(false)
  const [uniqueId,setuniqueid] = useState("")
  const [ratingData,setratingData] = useState([])
  const [minister,setminister] = useState("")
  const [detail,setdetail] = useState("")
  const [Mindirection,setMindirection] = useState("")
  const [MinImage,setMinImage] = useState("")
  useEffect(()=>{
    fetch(`http://localhost:5000/department`)
    .then(res => res.json())
    .then(data =>{
      setdepartments(data)
    },
    fetch(`http://localhost:5000/ratings`)
    .then(res => res.json())
    .then(data => {
      setratingData(data)
    })
    )
  },[])
  return (
    <>
     <MyContext.Provider value={
      {uniqueId,setuniqueid,minister,setminister,detail
        ,setdetail,Mindirection,setMindirection
        ,MinImage,setMinImage,ratingData,setratingData,
        departments,setdepartments,id,setid,
        disableBtn,setdisableBtn,department,
        setdepartment,description,setdescription,
        direction,setdirection,validId,setvalidId
      ,validForm,setValidForm}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/departments' element={<CreatePage />}/>
            <Route path='/departments/edit' element={<EditPage />}/>
            <Route path='/ratings' element={<Ratings />}/>
            <Route path='/departments/edit/update' element={<UpdatePage />}/>
            <Route path='/minister' element={<CreateMin />}/>
          </Routes>
        </BrowserRouter>
     </MyContext.Provider>
    </>
  )
}
