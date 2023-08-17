import { useState,useContext } from "preact/hooks";
import MyContext from "../context";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function PersonalMain() {
    const Navigate = useNavigate();
    const {mode,selected,setselected,officialsData,setofficialsData} = useContext(MyContext)
    const HandleClick=(Id)=>{
        let SelectedOfficials = officialsData.find(item => item._id === Id)
        setselected(SelectedOfficials)
        console.log(selected)
    }
    return (
        <motion.div className={mode ?"Directions" : "Directions-light"}>
            <div className="flex gap-4 w-11/12 m-auto mt-7">
                <div className={mode ? "DepartmentNavv scroll-smooth overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 rounded-xl w-[35%] h-[36em]" : "DepartmentNavv-light scroll-smooth overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 rounded-xl w-[35%] h-[36em]"}>
                    <h1 className={mode ? "text-white relative top-[-3em] text-[2em]" : "text-slate-800 relative top-[-3em] text-[2em]"}>Officials</h1>
                    <ul className="flex flex-col gap-10">
                        {officialsData.map(item =>{
                            return <li onClick={()=>HandleClick(item._id)} className="text-sm pl-10 flex gap-3 bg-slate-700 li hover:opacity-2 hover:p-5 duration-300 active:opacity-30 text-white">{item.Officials}</li>
                        })}
                    </ul>
                </div>
                <div className={mode ? "w-[65%] DepartmentNav  rounded-xl h-[24em]" : "w-[65%]  DepartmentNav-light rounded-xl h-[24em]"}>
                       <div className="w-11/12 relative top-10 flex flex-col gap-4 h-24 m-auto">
                            <div className="flex gap-2">
                                <p className={mode ? "text-white" : "text-slate-800"}></p>
                                <h1 className={mode ? "text-white text-3xl" : "text-slate-800 text-3xl"}>{selected.Officials}</h1>
                            </div>
                            <p className="text-2xl text-gray-600">{selected.OfficalsDet}</p>
                            <div className="w-11/12 m-auto">
                                <h1 className={mode ? "text-[2.4em] text-white" : "text-[2.4em] text-slate-800"}>{selected.OfficalsDir}</h1>
                            </div>
                       </div>
                </div>
            </div>
        </motion.div>
      );
}

export default PersonalMain;