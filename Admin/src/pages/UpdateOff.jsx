import { NavLink,useNavigate } from "react-router-dom";
function UpdatedOff() {
    const Navigate = useNavigate()
    const HandleSubmit=(e)=>{

    }
    return (
        <div className="updateOff">
            <div className="w-11/12 bg-white min-h-[4em] text-xl font-bold flex justify-around items-center m-auto">
                <h1>Update page</h1>
                <ul className="flex gap-8 items-center">
                    <NavLink onClick={()=>{Navigate(-1)}} to="edit"><li>Main Menu</li></NavLink>
                </ul>
            </div>  
            <div className="w-11/12 min-h-[35em] mt-5 bg-white rounded-lg m-auto">
                <p className="text-center font-semibold pt-2 text-xl">please fill out this form</p>
                <h1 className="text-green-600 font-semibold pt-5 text-lg text-center" >Operation was successfull !</h1>
                <form onSubmit={HandleSubmit} className="h-[30em] bg-gray-100 flex flex-col gap-8 p-5 mt-5 w-[60%] m-auto" >
                    <div className="flex gap-4 items-center">
                        <p className="text-xl ">full name:</p>
                        <textarea  className="rounded outline-none p-3" name="" id="" cols="80" rows="3" required></textarea>
                    </div>
                    <div className="flex gap-12 items-center">
                        <p className="text-xl">detail:</p>
                        <textarea  className="rounded outline-none p-3" name="" id="" cols="80" rows="3" required></textarea>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="text-xl">direction:</p>
                        <textarea  className="rounded outline-none p-3" name="" id="" cols="80" rows="3" required></textarea>
                    </div>
                    <button className="w-[7.5em] m-auto h-[2.3em] bg-slate-800 text-white rounded-lg hover:opacity-70 duration-300 active:opacity-50" type="submit">Submit</button>
                </form>
            </div>
        </div>
      );
}

export default UpdatedOff;