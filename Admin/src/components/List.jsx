import { useContext } from "preact/hooks";
import MyContext from "../context";
import { NavLink } from "react-router-dom";
function List(props) {
    const { uniqueId,setuniqueid } = useContext(MyContext)
    console.log(uniqueId)
    const HandleClick =(Id)=>{
        setuniqueid(Id)
    }
    return (
        <div className="">
                <li className="w-[80%] flex rounded m-auto bg-zinc-100 list-none min-h-[2.5em] p-5">{props.department.slice(0,50)}
                    <div className="absolute left-[57em] flex gap-10">
                            <NavLink to={`update`}><button onClick={()=>HandleClick(props._id)} className="w-[6.5em] h-[2em] bg-slate-700 text-white font-semibold rounded-md hover:opacity-60 duration-300 active:opacity-40">update</button></NavLink>
                             <button className="w-[6.5em] h-[2em] bg-red-700 text-white font-semibold rounded-md hover:opacity-60 duration-300 active:opacity-40">delete</button>
                    </div>
                </li>
        </div>
      );
}

export default List;