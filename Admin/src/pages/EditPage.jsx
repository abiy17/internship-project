import { NavLink,useNavigate } from "react-router-dom";
import { useContext, useState } from "preact/hooks";
import MyContext from "../context";
import axios from "axios";
import List from "../components/List";
function EditPage() {
    const Navigate = useNavigate();
    const { uniqueId,setuniqueid,departments,setdepartments,id,setid,validForm,setValidForm,disableBtn,setdisableBtn,department,setdepartment,description,setdescription,direction,setdirection,validId,setvalidId } = useContext(MyContext)
    const [ Search,setSearch ] = useState("")
    return (
        <div className="edit flex flex-col gap-5">
            <div className="w-11/12 bg-white min-h-[4em] rounded text-xl font-bold flex justify-around items-center m-auto">
                <h1>Welcome Admin</h1>
                <ul className="flex gap-8 items-center">
                    <NavLink onClick={()=>Navigate(-1)}><li>Home</li></NavLink>
                </ul>
            </div>
            <div className="w-4/6 m-auto">
                <input value={Search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search here..." className="w-5/6 p-3 relative left-14 rounded-lg border-2 border-slate-200 outline-1 pl-10 outline-slate-300"/>
            </div>
            <div className="w-11/12 bg-white pt-10 flex flex-col gap-5 min-h-[37em] m-auto">
                <h1 className="font-semibold text-xl text-center pb-12">here are the lists of departments</h1>
                {departments.filter((item)=>{
                    return Search === "" ? item : item.department.includes(Search)
                }).map((item)=>{
                    return <List 
                        key={item._id}
                        {...item}
                    />
                })}
            </div>
        </div>
      );
}

export default EditPage;