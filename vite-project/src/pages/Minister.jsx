import { useContext, useState } from "preact/hooks";
import MyContext from "../context";
import { useNavigate } from "react-router-dom";
import { FaHome, FaSun, FaMoon} from "react-icons/fa";
import MinisterCont from "../components/MinisterCont";
import SkeletonMain from "../components/SkeletonMain";
import { FaPersonBooth,FaUser } from "react-icons/fa";
function Minister() {
    const Navigate = useNavigate();
    const {mode,setmode,MinisterData,loadingMin,setloadingMin,setMinisterData,loading,setloading} = useContext(MyContext)
    return (
        <div className={mode ? "h-[1280px] left-0 w-full bg-gray-950" : "h-[1280px]  left-0 w-full"}>
            <div  className={mode ? "text-2xl sticky flex shadow-2xl h-[3em] rounded justify-around gap-24 w-11/12 m-auto" : " p-9 shadow-md text-slate-800  text-2xl bg-white sticky flex h-[3em] rounded justify-around gap-24 w-11/12 m-auto"}>
                <h1 className={mode ? "text-white text-[25px] flex gap-4 items-center" : "flex text-[25px] gap-2 items-center"}><FaUser /> <p className="hidden sm:block md:block">ዴኤታ/ሚኒስተር</p></h1>
                <div className="flex gap-14 items-center">
                    <button onClick={()=>Navigate(-1)} className={mode ? "text-white hover:opacity-40 duration-300 flex items-center" : "hover:opacity-40 duration-300 flex items-center"}><FaHome className="mr-3"/></button>
                    <div className="">
                        <FaSun onClick={()=>setmode(!mode)} className={mode ? "text-white cursor-pointer hover:opacity-30 duration-300" : "hidden"}/>
                        <FaMoon onClick={()=>setmode(!mode)}  className={mode ? "hidden" : "relative left-4 hover:opacity-30 duration-300 cursor-pointer"}/>
                    </div>
            </div>
            </div>
            <p className={mode ? "text-center text-white text-xl shadow-4xl font-semibold relative top-[4em]" : "text-center text-slate-700 text-xl font-semibold relative top-[4em]"}>Here are the list of Ministers</p>
            <div className={mode ? "w-11/12 ministercont h-[1150px] rounded-md pt-24 m-auto overflow-y-scroll sm:grid sm:grid-cols-2 lg:grid lg:gird-col-3 min-h-[38em]" : "w-11/12 overflow-y-scroll h-[1150px] pt-24 m-auto sm:grid sm:grid-cols-2 lg:grid lg:gird-col-3 bg-white min-h-[38em]"}>
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