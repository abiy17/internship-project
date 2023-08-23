import { useContext, useState } from "preact/hooks";
import { FaHome,FaBuilding, FaSun, FaMoon, FaMedium, FaPeopleArrows, FaPeopleCarry } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MyContext from "../context";

function PersonalNav() {
    const Navigate = useNavigate();
    const {mode,setmode} = useContext(MyContext)
    return (
        <>
        <div  className={mode ? "DepartmentNav sticky flex h-[3em] rounded justify-around gap-24 w-11/12 m-auto" : "DepartmentNav-light p-9 shadow-md text-slate-800  text-2xl bg-white sticky flex h-[3em] rounded justify-around gap-24 w-11/12 m-auto"}>
            <h1 className={mode ? "text-white flex gap-2 items-center" : "flex gap-2 items-center"}><FaPeopleArrows className="mr-3"/> <p className="hidden sm:block md:block">የስራ ሐላፊዎች</p></h1>
            <div className="flex gap-14 items-center">
                <button onClick={()=>Navigate(-1)} className={mode ? "text-white hover:opacity-40 duration-300 flex items-center" : "hover:opacity-40 duration-300 flex items-center"}><FaHome className="mr-3"/></button>
                <div className="">
                    <FaSun onClick={()=>setmode(!mode)} className={mode ? "text-white cursor-pointer hover:opacity-30 duration-300" : "hidden"}/>
                    <FaMoon onClick={()=>setmode(!mode)}  className={mode ? "hidden" : "relative left-4 hover:opacity-30 duration-300 cursor-pointer"}/>
                </div>
            </div>
        </div>
        </>
      );
}

export default PersonalNav;