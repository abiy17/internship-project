import { useContext, useState } from "preact/hooks";
import DepartmentNav from "../components/DepartmentNav";
import MyContext from "../context";
import { FaHome,FaBuilding, FaMagento, FaSun } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Rating from "../components/Rating";
import Comments from "../components/Comments";
function DetailDepartment() {
    const Navigate = useNavigate();
    const {OtherDepartments,mode,ComMode,setComMode,setmode,setOtherDepartments,selectedDepartment,setselectedDepartment} = useContext(MyContext)
    const HandleClick=(Id)=>{
        const newSelectedDepartment = OtherDepartments.find(item => item.id === Id)
        setselectedDepartment(newSelectedDepartment)
    }
    return (
        <motion.div className={mode ?"Directions" : "Directions-light"}>
            <div className={mode ? "DepartmentNav sticky top-3 flex h-[3em] rounded justify-around gap-24 w-11/12 m-auto" : "DepartmentNav-light sticky top-3 flex h-[3em] rounded justify-around gap-24 w-11/12 m-auto"}>
                <h1 className={mode ? "text-white flex gap-2 items-center" : "text-slate-800 flex gap-2 items-center"}><FaBuilding />Department office</h1>
                <button onClick={()=>Navigate(-2)} className={mode ? "text-white hover:opacity-40 duration-300 flex items-center" : "text-slate-800 hover:opacity-40 duration-300 flex items-center"}><FaMagento  className="mr-3"/>Main Menu</button>
            </div>
            <Rating />
            <div className="flex gap-4 w-11/12 m-auto mt-7">
                <div className={mode ? "DepartmentNavv scroll-smooth overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 rounded-xl w-[35%] h-[36em]" : "DepartmentNavv-light overflow-y-scroll scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 rounded-xl w-[35%] h-[36em]"}>
                    <h1 className={mode ? "text-white relative top-[-3em] text-[2em]" : "text-slate-800 relative top-[-3em] text-[2em]"}>Other Departments</h1>
                    <ul className="flex flex-col gap-10 pb-8">
                        {OtherDepartments.map(item => {
                            return <NavLink><li onClick={()=>HandleClick(item.id)} className={mode ? "text-sm flex gap-3 li hover:opacity-40 hover:p-5 duration-300 active:opacity-80 text-white" : "text-sm flex gap-3 bg-slate-700 li hover:opacity-2 hover:p-5 duration-300 active:opacity-30 text-white"} ><p>{item.id}</p>{item.department}</li></NavLink>
                        })}
                    </ul>
                </div>
                
                <div className={mode ? "w-[65%] DepartmentNav rounded-xl  scroll-smooth overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 h-[24em]" : "w-[65%] DepartmentNav-light overflow-x-hidden scroll-smooth overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 rounded-xl h-[24em]"}>
                       <div className="w-11/12 relative top-10 flex flex-col gap-4 h-24 m-auto">
                            <div className="flex gap-2">
                                <p className={mode ? "text-white" : "text-slate-800"}>{selectedDepartment.id},</p>
                                <h1 className={mode ? "text-white text-2xl" : "text-slate-800 text-2xl"}>{selectedDepartment.department}</h1>
                            </div>
                            <p className="text-sm text-gray-600">{selectedDepartment.description}</p>
                            <div className="w-11/12 m-auto">
                                <h1 className={mode ? "text-[2.4em] text-white" : "text-[2.4em] text-slate-800"}>Directions</h1>
                                <span>{selectedDepartment.direction}</span>
                            </div>
                            
                       </div>
                       <div className="relative top-[15em] left-14">
                            <a href="#comments"><button onClick={()=>setComMode(!ComMode)} className="w-28 p-3 min-h-[2.64em] mb-8 text-sm bg-slate-900 text-white rounded-lg hover:opacity-50 active:opacity-30 duration-300">Add comment</button></a>
                            <Comments />
                       </div>
                </div>
            </div>
        </motion.div>
      );
}

export default DetailDepartment;