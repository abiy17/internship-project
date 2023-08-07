import { useContext, useState } from "preact/hooks";
import MyContext from "../context";
import { FaBuilding, FaMagento } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function PersonalMain() {
    const Navigate = useNavigate();
    const {OtherDepartments,mode,setmode,setOtherDepartments,selectedDepartment,setselectedDepartment} = useContext(MyContext)
    const HandleClick=(Id)=>{
        const newSelectedDepartment = OtherDepartments.find(item => item.id === Id)
        setselectedDepartment(newSelectedDepartment)
    }
    return (
        <motion.div className={mode ?"Directions" : "Directions-light"}>
            <div className="flex gap-4 w-11/12 m-auto mt-7">
                <div className={mode ? "DepartmentNavv scroll-smooth overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 rounded-xl w-[35%] h-[36em]" : "DepartmentNavv-light scroll-smooth overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 rounded-xl w-[35%] h-[36em]"}>
                    <h1 className={mode ? "text-white relative top-[-3em] text-[2em]" : "text-slate-800 relative top-[-3em] text-[2em]"}></h1>
                    <ul className="flex flex-col gap-10 pb-8">
                        
                    </ul>
                </div>
                <div className={mode ? "w-[65%] DepartmentNav  rounded-xl h-[24em]" : "w-[65%]  DepartmentNav-light rounded-xl h-[24em]"}>
                       <div className="w-11/12 relative top-10 flex flex-col gap-4 h-24 m-auto">
                            <div className="flex gap-2">
                                <p className={mode ? "text-white" : "text-slate-800"}></p>
                                <h1 className={mode ? "text-white text-2xl" : "text-slate-800 text-2xl"}></h1>
                            </div>
                            <p className="text-sm text-gray-600"></p>
                            <div className="w-11/12 m-auto">
                                <h1 className={mode ? "text-[2.4em] text-white" : "text-[2.4em] text-slate-800"}></h1>
                            </div>
                       </div>
                </div>
            </div>
        </motion.div>
      );
}

export default PersonalMain;