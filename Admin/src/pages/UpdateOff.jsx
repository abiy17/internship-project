import { useContext } from "preact/hooks";
import { NavLink,useNavigate } from "react-router-dom";
import MyContext from "../context";
import axios from "axios";
function UpdatedOff() {
    const Navigate = useNavigate()
    const { OffId,setOffId,Officials,setOfficials,OfficalsDet,setOfficalsDet,OfficalsDir,setOfficalsDir } = useContext(MyContext)
    console.log(OffId)
    const HandleSubmit=(e)=>{
        axios.put(`https://mint-backend-c59t.onrender.com/officials/${OffId}`,{ Officials,OfficalsDet,OfficalsDir })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        e.preventDefault();
        alert("Operation was sucessefull!")
        setOfficials("")
        setOfficalsDet("")
        setOfficalsDir("")
        Navigate(`/dashboardOff/edit`)
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
                <form onSubmit={HandleSubmit} className="h-[30em] bg-gray-100 flex flex-col gap-8 p-5 mt-5 w-[60%] m-auto" >
                    <div className="flex gap-4 items-center">
                        <p className="text-xl ">full name:</p>
                        <textarea  className="rounded outline-none p-3" name="" id="" cols="80" rows="3" value={Officials} onChange={(e)=>{setOfficials(e.target.value)}} required></textarea>
                    </div>
                    <div className="flex gap-12 items-center">
                        <p className="text-xl">detail:</p>
                        <textarea  className="rounded outline-none p-3" name="" id="" cols="80" rows="3" required onChange={(e)=>{setOfficalsDet(e.target.value)}}></textarea>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="text-xl">direction:</p>
                        <textarea  className="rounded outline-none p-3" name="" id="" cols="80" rows="3" required onChange={(e)=>{setOfficalsDir(e.target.value)}}></textarea>
                    </div>
                    <button className="w-[7.5em] m-auto h-[2.3em] bg-slate-800 text-white rounded-lg hover:opacity-70 duration-300 active:opacity-50" type="submit">Submit</button>
                </form>
            </div>
        </div>
      );
}

export default UpdatedOff;