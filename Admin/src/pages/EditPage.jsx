import { NavLink,useNavigate } from "react-router-dom";
function EditPage() {
    const Navigate = useNavigate();
    return (
        <div className="edit">
            <div className="w-11/12 bg-white min-h-[4em] font-bold flex justify-around mt-3 items-center m-auto">
                <h1>Welcome Admin</h1>
                <ul className="flex gap-8 items-center">
                    <NavLink onClick={()=>Navigate(-1)}><li>Home</li></NavLink>
                </ul>
            </div>
            weiduwduywevdyuewd
        </div>
      );
}

export default EditPage;