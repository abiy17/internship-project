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
  const [OffId,setOffId] = useState("")
  const [ratingData,setratingData] = useState([])
  const [minister,setminister] = useState("")
  const [detail,setdetail] = useState("")
  const [Mindirection,setMindirection] = useState()
  const [MinImage,setMinImage] = useState("")
  const [Officials,setOfficials] = useState("")
  const [OfficalsDet,setOfficalsDet]= useState("")
  const [OfficalsDir,setOfficalsDir] = useState("")
  const [OfficalsData,setOfficalsData] = useState([])
  const [CommentsData,SetCommentsData] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/department`)
    .then(res => res.json())
    .then(data =>{
      setdepartments(data)
    }),
    fetch(`http://localhost:5000/officials`)
        .then(res => res.json())
        .then(data => {
          setOfficalsData(data)
      })
    fetch("http://localhost:5000/comments")
    .then(res => res.json())
    .then(data => {
      SetCommentsData(data)
    })
    fetch(`http://localhost:5000/ratings`)
        .then(res => res.json())
        .then(data => {
          setratingData(data)
        })
  },[])
  return (
    <>
     <MyContext.Provider value={
      {Officials,setOfficials,OffId,setOffId,CommentsData,SetCommentsData
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
            <Route path='/dashboardDep/ratings' element={<Ratings />}/>
            <Route path='/dashboardDep/edit/update' element={<UpdatePage />}/>
            <Route path='/Officals' element={<CreateOfficials />}/>
            <Route path='/Officals/edit' element={<OffEdit />}/>
            <Route path='/minister' element={<CreateMin />}/>
            <Route path='/dashboardDep/comments' element={<Comments />}/>
          </Routes>
        </BrowserRouter>
     </MyContext.Provider>
    </>
  )
}
