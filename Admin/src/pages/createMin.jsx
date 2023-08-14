import { useContext } from "preact/hooks";
import { NavLink, resolvePath } from "react-router-dom"
import MyContext from "../context";
import axios from "axios";
function CreateMin() {
    const { minister,setminister,detail,setdetail,Mindirection,setMindirection,MinImage,setMinImage } = useContext(MyContext)
    const Handlesubmit=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:5000/minister`,{ MinImage,minister,detail,Mindirection }).catch((err)=>{
            console.log(err)
        })
        setminister("")
        setMinImage("")
        setdetail("")
        setMindirection("")
    }
    const HandleFileUpload = async(e)=>{
        const file = e.target.files[0]
        const base64 = await covertToBase64(file)
        setMinImage(base64)
    }
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
                <form onSubmit={Handlesubmit} className="bg-stone-50 rounded-md w-2/3 grid justify-center items-center m-auto h-[30em] mt-10">
                    <label className="flex gap-10">
                        <p className="text-slate-700 text-xl">upload the image</p>
                        <input onChange={(e)=>HandleFileUpload(e)} required type="file" />
                        <img src={MinImage} className="w-20 relative left-[-10em]" alt="" />
                        
                    </label>
                    <label className="flex gap-10">
                        <p className="text-slate-700 text-xl">Name</p>
                        <input onChange={(e)=>{setminister(e.target.value)}} className="w-2/3 h-[4em]" type="text" required/>
                    </label>
                    <label className="flex gap-10">
                        <p className="text-slate-700 text-xl">Detail</p>
                        <input onChange={(e)=>{setdetail(e.target.value)}} className="w-2/3 h-[4em]" type="text" required/>
                    </label>
                    <label className="flex gap-5">
                        <p className="text-slate-700 text-xl">Direction</p>
                        <input onChange={(e)=>{setMindirection(e.target.value)}} className="w-2/3 h-[4em]" type="text" required/>
                    </label>
                    <button type="submit" className="w-[7.5em] m-auto h-[2.3em] bg-slate-800 text-white rounded-lg hover:opacity-70 duration-300 active:opacity-50">Submit</button>
                </form>
            </div>
        </div>
     );
}

export default CreateMin;

function covertToBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}