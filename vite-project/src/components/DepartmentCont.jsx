import { FaDirections } from "react-icons/fa";
import Department from "../pages/Department";
import { useContext, useState } from "preact/hooks";
import MyContext from "../context";
import { NavLink } from "react-router-dom";
function DepartmentCont(props) {
    const { Departement,mode,RatingCpt,setRatingCpt,setmode,setDepartment,selectedDepartment,setselectedDepartment,OtherDepartments,setOtherDepartments } = useContext(MyContext)
    const HandleDirection =(Id)=>{
        const FilteredDepartment = Departement.find(item => item.id === Id)
        const OtherDepartments = Departement.filter(item => item.id !== Id)
        setselectedDepartment(FilteredDepartment)
        setOtherDepartments(OtherDepartments)
        setTimeout(() => {
            setRatingCpt(true)
        }, 30000);
    }
    return (
        <div className={mode ? "shadow-md text-stone-50 cursor-pointer departmentCont grid justify-center p-1  duration-300 w-5/6 m-auto rounded-xl text-center items-center min-h-[13em] max-h-[15em]" : "shadow-md bg-stone-50 hover:w-11/12 border-[1px] cursor-pointer grid justify-center p-1 text-slate-800 duration-300 w-5/6 m-auto rounded-xl text-center items-center min-h-[13em] max-h-[15em]"}>
            <h1 className={mode ? "text-white relative top-6" : "text-slate-700 relative top-6"}>{props.department}</h1>
            <div className="">
                <NavLink to="Directions"><button onClick={()=>HandleDirection(props.id)} className={mode ? "w-[8.5em] hover:opacity-70 active:opacity-30 hover:duration-300 m-auto items-center h-[2.6em] flex gap-2 bg-slate-800 text-white rounded-xl p-3" : "w-[8.5em] hover:opacity-70 active:opacity-30 hover:duration-300 top-10 m-auto items-center h-[2.6em] flex gap-2 bg-slate-800 text-white rounded-xl p-3"}><FaDirections className="text-xl"/>Directions</button></NavLink>
            </div>
            
        </div>
      );
}

export default DepartmentCont;