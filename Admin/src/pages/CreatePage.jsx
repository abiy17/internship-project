import { NavLink, useNavigate } from "react-router-dom";
import Create from "../components/create";
import Nav from "../components/Nav"
function CreatePage() {
    const Navigate = useNavigate()
    return (
        <div className="departments">
            <div className="w-11/12 bg-white min-h-[4em] text-xl font-bold flex justify-around items-center m-auto">
            <h1>Welcome Admin</h1>
            <ul className="flex gap-8 items-center">
                <NavLink onClick={()=>Navigate(-1)}>Dashboard</NavLink>
            </ul>
        </div>
            <div className="flex gap-3 w-11/12 bg-white rounded-xl m-auto min-h-[37em] mt-5">
                <Create />  
            </div>
        </div>
      );
}

export default CreatePage;