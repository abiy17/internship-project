import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
    return ( 
        <div className="w-11/12 bg-white min-h-[4em] text-xl font-bold flex justify-around items-center m-auto">
            <h1>Welcome Admin</h1>
            <ul className="flex gap-8 items-center">
                <NavLink className="hover:opacity-10 active:opacity-70 duration-700" to="create">Create</NavLink>
                <NavLink className="hover:opacity-10 active:opacity-70 duration-700" to="edit"><li>Edit</li></NavLink>
                <NavLink className="hover:opacity-10 active:opacity-70 duration-700" to="ratings">Ratings</NavLink>
                <NavLink className="hover:opacity-10 active:opacity-70 duration-700" to="comments">Comments</NavLink>
            </ul>
        </div>
     );
}

export default Nav;