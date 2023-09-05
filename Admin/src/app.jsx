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
import CreateOfficials from './pages/createOfficals';
import OffEdit from './pages/OffEdit';
import Comments from './pages/Comments';
import Dashboard from './pages/DashboardDep';
import DashboardOff from './pages/DashboardOff';
import UpdatedOff from './pages/updateOff';
import DashboardMin from './pages/DashboardMin';
import MinEdit from './pages/MinEdit';
import UpdateMin from './pages/UpdateMin';

export function App() {
  const [selectedDep,setselectedDep] = useState()
  const [departments,setdepartments] = useState([])
  const [id,setid] = useState(0)
  const [disableBtn,setdisableBtn] = useState(false)
  const [department,setdepartment] = useState("")
  const [description,setdescription] = useState("")
  const [direction,setdirection] = useState("")
  const [validId,setvalidId] = useState(false)
  const [validForm,setValidForm] = useState(false)
  const [uniqueId,setuniqueid] = useState("")
  const [OffId,setOffId] = useState("")
  const [ratingData,setratingData] = useState([])
  const [minister,setminister] = useState("")
  const [detail,setdetail] = useState("")
  const [Mindirection,setMindirection] = useState()
  const [MinImage,setMinImage] = useState("")
  const [OfficialImg,setOfficialImg] = useState("")
  const [Officials,setOfficials] = useState("")
  const [OfficalsDet,setOfficalsDet]= useState("")
  const [OfficalsDir,setOfficalsDir] = useState("")
  const [Minid,setMinid] = useState("")
  const [OfficalsData,setOfficalsData] = useState([])
  const [CommentsData,SetCommentsData] = useState([])
  const [ministerData,setministerData] = useState([])
  console.log(ministerData)
  useEffect(()=>{
    fetch(`https://mint-backend-c59t.onrender.com/department`)
    .then(res => res.json())
    .then(data =>{
      setdepartments(data)
    }),
    fetch("https://mint-backend-c59t.onrender.com/comments")
    .then(res => res.json())
    .then(data => {
      SetCommentsData(data)
    })
    fetch(`https://mint-backend-c59t.onrender.com/ratings`)
        .then(res => res.json())
        .then(data => {
          setratingData(data)
        })
    fetch(`https://mint-backend-c59t.onrender.com/minister`)
        .then(res => res.json())
        .then(data => {
            setministerData(data)
        })
      
  },[])
  useEffect(()=>{
    fetch(`http://localhost:5000/officials`)
        .then(res => res.json())
        .then(data => {
          setOfficalsData(data)
      })
  },[])
  return (
    <>
     <MyContext.Provider value={
      {Officials,setOfficials,OffId,ministerData,
        Minid,setMinid,OfficialImg,setOfficialImg,setministerData,setOffId,
        selectedDep,setselectedDep,CommentsData,SetCommentsData
        ,OfficalsDet,OfficalsData,setOfficalsData
        ,setOfficalsDet,OfficalsDir,setOfficalsDir
        ,uniqueId,setuniqueid,minister,setminister,detail
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
            <Route path='/dashboardDep' element={<Dashboard />}/>
            <Route path='/dashboardDep/create' element={<CreatePage />}/>
            <Route path='/dashboardDep/edit' element={<EditPage />}/>
            <Route path='/ratings' element={<Ratings />}/>
            <Route path='/dashboardDep/edit/update' element={<UpdatePage />}/>
            <Route path='/dashboardOff/Officals' element={<CreateOfficials />}/>
            <Route path='/dashboardOff/edit' element={<OffEdit />}/>
            <Route path='/dashboardOff/edit/updateOff' element={<UpdatedOff />}/>
            <Route path='/dashboardOff' element={<DashboardOff />}/>
            <Route path='/DashboardMin' element={<DashboardMin />}/>
            <Route path='/DashboardMin/edit/updatemin' element={<UpdateMin />}/>
            <Route path='/DashboardMin/minister' element={<CreateMin />}/>
            <Route path='/DashboardMin/edit' element={<MinEdit />}/>
            <Route path='/dashboardDep/comments' element={<Comments />}/>
          </Routes>
        </BrowserRouter>
     </MyContext.Provider>
    </>
  )
}
