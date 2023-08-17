import { useContext } from "preact/hooks";
import {NavLink,useNavigate} from "react-router-dom"
import MyContext from "../context";
function OffEdit() {
    const Navigate = useNavigate()
    const {OfficalsData,setOfficalsData} = useContext(MyContext)
    return (
        <div className="edit">
            <div className="w-11/12 bg-white min-h-[4em] rounded text-xl font-bold flex justify-around items-center m-auto">
                <h1>Edit page</h1>
                <ul className="flex gap-8 items-center">
                    <NavLink onClick={()=>Navigate(-1)}><li>Home</li></NavLink>
                </ul>
            </div>
            <div className="w-11/12 bg-white pt-10 flex flex-col gap-5 min-h-[37em] m-auto mt-5">
                {OfficalsData.map((item)=>{
                    return <div className="">
                    <li className="w-[80%] flex rounded m-auto bg-zinc-100 list-none min-h-[2.5em] p-5">
                        <div className="absolute left-[57em] flex gap-10">
                                <NavLink><button  className="w-[6.5em] h-[2em] bg-slate-700 text-white font-semibold rounded-md hover:opacity-60 duration-300 active:opacity-40">update</button></NavLink>
                                 <button  className="w-[6.5em] h-[2em] bg-red-700 text-white font-semibold rounded-md hover:opacity-60 duration-300 active:opacity-40">delete</button>
                        </div>
                    </li>
            </div>
                })}
            </div>
        </div>
      );
}

export default OffEdit;