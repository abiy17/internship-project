import { useContext,useEffect } from "preact/hooks";
import {NavLink,useNavigate} from "react-router-dom"
import MyContext from "../context";
import ListOff from "../components/ListOff";
function OffEdit() {
    const Navigate = useNavigate()
    const {OfficalsData,setOfficalsData} = useContext(MyContext)
    return (
        <div className="edit">
            <div className="w-11/12 bg-white min-h-[4em] rounded text-xl font-bold flex justify-around items-center m-auto">
                <h1>Edit page</h1>
                <ul className="flex gap-8 items-center">
                    <NavLink onClick={()=>Navigate(-1)}><li className="hover:opacity-60 duration-300">DashBoard</li></NavLink>
                </ul>
            </div>
            <div className="w-11/12 bg-white pt-10 flex flex-col gap-5 min-h-[37em] m-auto mt-5">
                {OfficalsData.map((item)=>{
                    return <ListOff 
                        key={item._id}
                        {...item}
                    />
                })}
            </div>
        </div>
      );
}

export default OffEdit;