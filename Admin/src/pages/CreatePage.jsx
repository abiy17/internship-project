import { NavLink } from "react-router-dom";
import Create from "../components/create";
import Nav from "../components/Nav"
function CreatePage() {
    return (
        <div className="departments">
            <Nav />
            <div className="flex gap-3 w-11/12 bg-white rounded-xl m-auto min-h-[37em] mt-5">
                <Create />  
            </div>
        </div>
      );
}

export default CreatePage;