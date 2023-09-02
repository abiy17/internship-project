import { useContext,useEffect } from "preact/hooks";
import MyContext from "../context";
import sad from "../assets/sad.svg"
import img from "../assets/21744760_2104.q702.014.S.m005.c10.mass media.jpg"
import { NavLink, useNavigate } from "react-router-dom";
function DashboardMin() {
    const Navigate = useNavigate()
    const { ministerData,setministerData } = useContext(MyContext)
    let LastIndex = ministerData.length - 1;
    const recentlyCreated = ministerData[LastIndex]
    console.log(recentlyCreated)
    return (
        <div className="DashboardMin">
            <div className="w-11/12 bg-white min-h-[4em] text-xl font-bold flex justify-around items-center m-auto">
                <h1>Welcome Admin</h1>
                <ul className="flex gap-8 items-center">
                    <NavLink className="hover:opacity-10 active:opacity-70 duration-700" to="minister">Create</NavLink>
                    <NavLink className="hover:opacity-10 active:opacity-70 duration-700" to="edit"><li>Edit</li></NavLink>
                    <NavLink className="hover:opacity-10 active:opacity-70 duration-700" onClick={()=>Navigate(-1)}>Home</NavLink>
                </ul>
            </div>
            <div className="flex gap-12 justify-center items-center w-11/12 bg-white rounded-xl m-auto min-h-[37em] mt-5">
            <div className="w-3/5 flex hover:p-1 duration-200 flex-col gap-5 min-h-[33em] bg-stone-50 rounded-lg">
                <p className="ml-10 font-serif font-semibold text-2xl pt-5">Ministers Dashboard</p>
                <div className="w-4/5 flex flex-col gap-2 ml-14">
                <img src={img} alt="" className="w-[33em] mb-5 h-[18em]"/>
                    <li>Explore and manage all Ministers in Mint,</li>
                    <li>Here you can view all Ministers,create new Ministers,update what you want,and remove it from database</li>
                </div>
                </div>
                <div className="w-2/6  min-h-[37em] flex flex-col gap-4 pt-10">
                <div className="min-h-[12em] rounded-lg hover:p-8 text-black p-7 duration-300 bg-stone-50">
                        <p className="font-bold font-serif mb-5">Recently Created Ministers</p>
                        <div className="flex items-center gap-3">   
                            <div>
                                <div className="flex gap-2 items-center">
                                    <p className="font-semibold ml-2">image: </p><img src={recentlyCreated.MinImage} alt="" className="w-14"/>
                                </div>
                                <p className="font-semibold p-2">Full Name: {recentlyCreated.minister} </p>
                                <p className="font-semibold p-2">Detail: {recentlyCreated.detail}</p>
                                <p className="font-semibold p-2">Direction: {recentlyCreated.Mindirection}</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[19.5em] overflow-y-scroll pl-8 pt-5 rounded-lg duration-300 bg-slate-700 text-white">
                        <p className="font-bold font-serif mb-12 text-xl">List of all Ministers</p>
                        <ul className="flex flex-col ml-5 gap-4">
                            {ministerData.length === 0 ? <p className="text-xl">No data!</p> : ministerData.map((item)=>{
                                return <li className="border-2 hover:p-4 duration-300 cursor-pointer w-11/12 p-3 border-white rounded-lg">{item.minister}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default DashboardMin;