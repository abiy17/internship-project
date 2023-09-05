import { useContext } from "preact/hooks";
import MyContext from "../context";
import { NavLink } from "react-router-dom";
import axios from "axios";

function ListMin(props) {
    const { Minid,setMinid } = useContext(MyContext)
    console.log(Minid)
    const HandleClick =(Id)=>{
        setMinid(Id)
    }
    const HandleDelete =(deletedId) =>{
        axios.delete(`http://localhost:5000/ministers/${deletedId}`).catch(err => console.log(err))
        alert("Deleted Sucessesfully!")
    }
    return (
        <div className="mt-16">
            <li className="w-[80%] flex rounded m-auto bg-zinc-100 list-none min-h-[2.5em] p-5">{props.minister.slice(0,50)}
                    <div className="absolute left-[57em] flex gap-10">
                            <NavLink to="updatemin"><button onClick={()=>HandleClick(props._id)} className="w-[6.5em] h-[2em] bg-slate-700 text-white font-semibold rounded-md hover:opacity-60 duration-300 active:opacity-40">update</button></NavLink>
                            <button onClick={()=>HandleDelete(props._id)} className="w-[6.5em] h-[2em] bg-red-700 text-white font-semibold rounded-md hover:opacity-60 duration-300 active:opacity-40">delete</button>
                    </div>
                </li>
        </div>
      );
}

export default ListMin;