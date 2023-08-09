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
        }, 10000);
    }
    return (
        <div className={mode ? "departmentCont p-1 duration-300 w-5/6 m-auto rounded-xl text-center items-center min-h-[10em] max-h-[15em]" : "departmentCont-light p-1 duration-300 w-5/6 m-auto rounded-xl text-center items-center min-h-[10em] max-h-[15em]"}>
            <h1 className="text-white relative top-6">{props.department}</h1>
            <div className="">
                <NavLink to="Directions"><button onClick={()=>HandleDirection(props.id)} className="w-[8.5em] relative hover:opacity-70 active:opacity-30 hover:duration-300 top-10 m-auto items-center h-[2.6em] flex gap-2 bg-gray-950 text-white rounded-xl p-3"><FaDirections className="text-xl"/>Directions</button></NavLink>
            </div>
        </div>
      );
}

export default DepartmentCont;