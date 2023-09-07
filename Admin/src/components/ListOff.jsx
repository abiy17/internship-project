import { useContext } from "preact/hooks";
import MyContext from "../context";
import { NavLink } from "react-router-dom";
import axios from "axios";
function ListOff(props) {
    const { OffId,setOffId } = useContext(MyContext)
    const HandleClick =(Id)=>{
        setOffId(Id)
    }
    const HandleDelete=(deletedId)=>{
        axios.delete(`https://mint-server-omd5.onrender.com/officials/${deletedId}`).catch(err => console.log(err))
        alert("successfully deleted!")
    }
    return (
        <div className="">
                <li className="w-[80%] flex rounded m-auto bg-zinc-100 list-none min-h-[2.5em] p-5">{props.Officials.slice(0,50)}
                    <div className="absolute left-[57em] flex gap-10">
                            <NavLink to="updateOff"><button onClick={()=>HandleClick(props._id)} className="w-[6.5em] h-[2em] bg-slate-700 text-white font-semibold rounded-md hover:opacity-60 duration-300 active:opacity-40">update</button></NavLink>
                            <button onClick={()=>HandleDelete(props._id)} className="w-[6.5em] h-[2em] bg-red-700 text-white font-semibold rounded-md hover:opacity-60 duration-300 active:opacity-40">delete</button>
                    </div>
                </li>
        </div>
      );
}

export default ListOff;