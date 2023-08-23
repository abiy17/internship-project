import { useContext } from "preact/hooks";
import { NavLink } from "react-router-dom";
function MinEdit() {
    return (
        <div className="edit">
            <div className="w-11/12 bg-white min-h-[4em] rounded text-xl font-bold flex justify-around items-center m-auto">
                <h1>Edit page</h1>
                <ul className="flex gap-8 items-center">
                    <NavLink ><li className="hover:opacity-60 duration-300">DashBoard</li></NavLink>
                </ul>
            </div>
            <div className="w-11/12 bg-white pt-10 flex flex-col gap-5 min-h-[37em] m-auto mt-5">

            </div>
        </div>
      );
}

export default MinEdit;