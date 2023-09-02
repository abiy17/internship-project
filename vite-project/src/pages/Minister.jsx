import { useContext, useState } from "preact/hooks";
import MyContext from "../context";
import { useNavigate } from "react-router-dom";
import { FaHome, FaSun, FaMoon} from "react-icons/fa";
import MinisterCont from "../components/MinisterCont";
import SkeletonMain from "../components/SkeletonMain";
function Minister() {
    const Navigate = useNavigate();
    const {mode,setmode,MinisterData,loadingMin,setloadingMin,setMinisterData,loading,setloading} = useContext(MyContext)
    return (
        <div className={mode ? "minister absolute top-0 left-0 w-full bg-gray-950" : "minister absolute top-0 left-0 w-full"}>
            <div  className={mode ? "DepartmentNav sticky top-3 flex mt-3 bg-gray-900 h-[3em] rounded justify-around gap-24 w-11/12 m-auto" : "DepartmentNav-light mt-3 p-9 shadow-md text-slate-800  text-2xl bg-white sticky top-3 flex h-[3em] rounded justify-around gap-24 w-11/12 m-auto"}>
                <h1 className={mode ? "text-white flex gap-2 items-center" : "flex gap-2 items-center"}> <p className="hidden sm:block md:block">ዴኤታ/ሚኒስተር</p></h1>
                <div className="flex gap-14 items-center">
                    <button onClick={()=>Navigate(-1)} className={mode ? "text-white hover:opacity-40 duration-300 flex items-center" : "hover:opacity-40 duration-300 flex items-center"}><FaHome className="mr-3"/></button>
                    <div className="">
                        <FaSun onClick={()=>setmode(!mode)} className={mode ? "text-white cursor-pointer hover:opacity-30 duration-300" : "hidden"}/>
                        <FaMoon onClick={()=>setmode(!mode)}  className={mode ? "hidden" : "relative left-4 hover:opacity-30 duration-300 cursor-pointer"}/>
                    </div>
            </div>
            </div>
            <p className={mode ? "text-center text-white text-xl font-semibold relative top-[4em]" : "text-center text-slate-700 text-xl font-semibold relative top-[4em]"}>Here are are the list of Ministers</p>
            <div className={mode ? "w-11/12 pt-24 mt-4 m-auto md:grid grid-cols-2 gap-5 bg-gray-900 min-h-[38em]" : "w-11/12 pt-24 mt-4 m-auto md:grid grid-cols-2 gap-5 bg-white min-h-[38em]"}>
                {loadingMin ? <SkeletonMain /> : MinisterData.map((item)=>{
                    return <MinisterCont 
                        {...item}
                    />
                })}
            </div>
        </div>
      );
}

export default Minister;