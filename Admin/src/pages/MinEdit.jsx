import { useContext,useState } from "preact/hooks";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import MyContext from "../context";
import ListMin from "../components/ListMin";
function MinEdit() {
    const [valueMin,setvalueMin] = useState("")
    const Navigate = useNavigate();
    const { ministerData,setministerData } = useContext(MyContext)
    return (
        <div className="edit">
            <div className="w-11/12 bg-white min-h-[4em] rounded text-xl font-bold flex justify-around items-center m-auto">
                <h1>Edit page</h1>
                <ul className="flex gap-8 items-center">
                    <NavLink onClick={()=>Navigate(-1)}><li className="hover:opacity-60 duration-300">DashBoard</li></NavLink>
                </ul>
            </div>
            <div className="absolute top-[6em] left-[11em] w-11/12 m-auto">
                    <input onChange={(e)=>setvalueMin(e.target.value)} type="text" placeholder="Search here..." className="bg-stone-50 absolute top-10 border-[1px] outline-slate-200 m-auto w-3/6 pl-10 rounded-lg p-3 left-[9em]"/>
               </div>
            <div className="w-11/12 bg-white pt-10 flex flex-col gap-5 min-h-[37em] m-auto mt-5">
                {ministerData.filter(item=>{
                    return valueMin === "" ? item : item.minister.includes(valueMin)
                }).map((item)=>{
                    return <ListMin 
                        {...item}
                        key = {item._id}
                    />
                })}
            </div>
        </div>
      );
}

export default MinEdit;