import { NavLink,useNavigate } from "react-router-dom";
import Create from "../components/create";
import { useContext } from "preact/hooks";
import MyContext from "../context";
import axios from "axios";
function UpdatePage() {
    const Navigate = useNavigate()
    const { uniqueId,setuniqueid,departments,setdepartments,id,setid,validForm,setValidForm,disableBtn,setdisableBtn,department,setdepartment,description,setdescription,direction,setdirection,validId,setvalidId } = useContext(MyContext)
    console.log(uniqueId)
    const HandleSubmit=(e)=>{
        axios.put(`http://localhost:5000/department/${uniqueId}`,{department,description,direction})
        e.preventDefault();
        setValidForm(true)
        setTimeout(() => {
            setValidForm(false)
            Navigate(`/dashboardDep/edit`)
        }, 3000);
        setdepartment("")
        setdescription("")
        setdirection("")
        setuniqueid("")
    }
    return ( 
        <div className="update flex flex-col gap-5">
            <div className="w-11/12 bg-white min-h-[4em] text-xl font-bold flex justify-around mt-3 items-center m-auto">
                <h1>Update page</h1>
                <ul className="flex gap-8 items-center">
                    <NavLink onClick={()=>{Navigate(-1)}} to="edit"><li>Main Menu</li></NavLink>
                </ul>
            </div>
            <div className="w-11/12 min-h-[35em] bg-white rounded-lg m-auto">
                <p className="text-center font-semibold pt-2 text-xl">please fill out this form</p>
                <h1 className={validForm ? "text-green-600 font-semibold pt-5 text-lg text-center" : "hidden"}>Operation was successfull !</h1>
                <form onSubmit={HandleSubmit} className="h-[30em] bg-gray-100 flex flex-col gap-8 p-5 mt-5 w-[60%] m-auto" >
                    <div className="flex gap-5 items-center">
                        <p className="text-xl ">Department</p>
                        <textarea onChange={(e)=>{setdepartment(e.target.value)}} className="rounded outline-none p-3" name="" id="" cols="80" rows="3" required></textarea>
                    </div>
                    <div className="flex gap-6 items-center">
                        <p className="text-xl">Description</p>
                        <textarea onChange={(e)=>{setdescription(e.target.value)}} className="rounded outline-none p-3" name="" id="" cols="80" rows="3" required></textarea>
                    </div>
                    <div className="flex gap-10 items-center">
                        <p className="text-xl">Direction</p>
                        <textarea onChange={(e)=>{setdirection(e.target.value)}} className="rounded outline-none p-3" name="" id="" cols="80" rows="3" required></textarea>
                    </div>
                    <button className="w-[7.5em] m-auto h-[2.3em] bg-slate-800 text-white rounded-lg hover:opacity-70 duration-300 active:opacity-50" type="submit">Submit</button>
                </form>
            </div>
        </div>
        
     );
}

export default UpdatePage;