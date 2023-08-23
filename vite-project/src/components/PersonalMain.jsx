import { useState,useContext } from "preact/hooks";
import MyContext from "../context";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../assets/mint.png"
import SkeletonMain from "./SkeletonMain";
import { FaSearch } from "react-icons/fa";
function PersonalMain() {
    const Navigate = useNavigate();
    const [value,setvalue] = useState("")
    const {mode,selected,loading,setloading,setselected,officialsData,setofficialsData} = useContext(MyContext)
    return (
        <motion.div className={mode ?"Directions" : "Directions-light"}>
                <div className={mode ? "DepartmentNavv scroll-smooth w-11/12 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 rounded-xl h-[36em]" : "DepartmentNavv-light scroll-smooth overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 rounded-xl w-11/12 m-auto mt-6 h-[36em]"}>
                <div  className="w-8/12 m-auto">
                    <p className="relative top-[-7em] text-lg font-semibold text-slate-600 text-center">Here are the list of all officials</p>
                    <FaSearch className="text-slate-300 relative top-[-4.8em] left-14 z-50"/>
                    <input placeholder="search here..."  onChange={(e)=>setvalue(e.target.value)} type="text" className="bg-stone-50 border-[1px] outline-slate-200 w-5/6 pl-10 rounded-lg p-3 relative top-[-7em] left-10"/>
                </div>
                <div className="flex flex-col relative top-[-3em] gap-7 sm:grid sm:grid-cols-2 md:grid-cols-3">
                    {loading ? <SkeletonMain /> : officialsData.filter(item =>{
                        return value === "" ? item : item.Officials.includes(value)
                    }).map(item =>{
                        return <div className="h-[15em] hover:w-11/12 duration-300 w-4/5 m-auto sm:w-full rounded-lg shadow-md">
                                    <div className="flex items-center">
                                        <img src={img} alt="" className="w-5/12 hover:scale-110 duration-300"/>
                                        <div className="flex flex-col p-2 rounded-md">
                                            <p className="text-slate-600">{item.Officials}</p>
                                            <p className="text-slate-600">Id:-{item._id.slice(0,20)}</p>
                                            <p className="font-bold text-slate-600">{item.OfficalsDir}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-700 pl-4 mt-3">{item.OfficalsDet}</p>
                                </div>
                    })}
                </div>
                </div>
        </motion.div>
      );
}

export default PersonalMain;