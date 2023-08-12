import { NavLink } from "react-router-dom"
function CreateMin() {
    return ( 
        <div className="minister flex flex-col">
            <div className="w-11/12 bg-white min-h-[4em] text-xl font-bold flex justify-around items-center m-auto">
            <h1>Welcome Admin</h1>
            <ul className="flex gap-8 items-center">
                <NavLink ><li>Edit</li></NavLink>
                <NavLink >Home</NavLink>
            </ul>
        </div>
            <div className="w-11/12 m-auto mt-5 rounded-lg h-[35em] bg-white">
                <form className="bg-stone-50 rounded-md w-2/3 grid justify-center items-center m-auto h-[30em] mt-10">
                    <label className="flex gap-10">
                        <p className="text-slate-700 text-xl">upload the image</p>
                        <input type="file" />
                    </label>
                    <label className="flex gap-10">
                        <p className="text-slate-700 text-xl">Name</p>
                        <input className="w-2/3 h-[4em]" type="text" />
                    </label>
                    <label className="flex gap-10">
                        <p className="text-slate-700 text-xl">Detail</p>
                        <input className="w-2/3 h-[4em]" type="text" />
                    </label>
                    <label className="flex gap-5">
                        <p className="text-slate-700 text-xl">Direction</p>
                        <input className="w-2/3 h-[4em]" type="text" />
                    </label>
                    <button className="w-[7.5em] m-auto h-[2.3em] bg-slate-800 text-white rounded-lg hover:opacity-70 duration-300 active:opacity-50">Submit</button>
                </form>
            </div>
        </div>
     );
}

export default CreateMin;