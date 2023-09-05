import { useContext } from "preact/hooks";
import { NavLink,useNavigate } from "react-router-dom";
import MyContext from "../context";
import axios from "axios";
function UpdateMin() {
  const Navigate = useNavigate();
  const { MinImage,setMinImage,Minid,setMinid,minister,setminister,detail,setdetail,Mindirection,setMindirection } = useContext(MyContext);
  const FileChange = async (e)=>{
    const file = e.target.files[0];
    const base64 = await covertToBase64(file);
    setMinImage(base64);
}
const HandleSubmit=(e)=>{   
    e.preventDefault();
    axios.put(`http://localhost:5000/ministers/${Minid}`,{ MinImage,minister,detail,Mindirection })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    alert("Operation was sucessefull!")
    Navigate(`/DashboardMin/edit`)
}
    return (
        <div className="updatemin">
            <div className="w-11/12 bg-white min-h-[4em] text-xl font-bold flex justify-around items-center m-auto">
                <h1>Update page</h1>
                <ul className="flex gap-8 items-center">
                  <NavLink onClick={()=>{Navigate(-1)}} to="edit"><li>Main Menu</li></NavLink>
                </ul>
            </div>
            <div className="w-11/12 min-h-[35em] mt-5 bg-white rounded-lg m-auto">
                <p className="text-center font-semibold pt-2 text-xl">please fill out this form</p>
                <form onSubmit={HandleSubmit} className="h-[30em] bg-gray-100 flex flex-col gap-8 p-5 mt-5 w-[60%] m-auto" >
                    <label className="flex gap-10">
                                <p className="text-slate-700 text-xl">Image:</p>
                                <input className="w-2/3 h-[4em]" onChange={FileChange} type="file" required/>
                                <img src={MinImage} alt="" className="rounded w-14 relative left-[-15em] max-w-10"/>
                            </label>
                    <div className="flex gap-4 items-center">
                        <p className="text-xl ">full name:</p>
                        <textarea  className="rounded outline-none p-3" name="" id="" cols="80" rows="2" value={minister} onChange={(e)=>{setminister(e.target.value)}} required></textarea>
                    </div>
                    <div className="flex gap-12 items-center">
                        <p className="text-xl">detail:</p>
                        <textarea  className="rounded outline-none p-3" name="" id="" cols="80" rows="2" required onChange={(e)=>{setdetail(e.target.value)}}></textarea>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="text-xl">direction:</p>
                        <textarea  className="rounded outline-none p-3" name="" id="" cols="80" rows="2" required onChange={(e)=>{setMindirection(e.target.value)}}></textarea>
                    </div>
                    <button className="w-[7.5em] m-auto h-[2.3em] bg-slate-800 text-white rounded-lg hover:opacity-70 duration-300 active:opacity-50" type="submit">Submit</button>
                </form>
            </div>
        </div>
      );
}

export default UpdateMin;

function covertToBase64(file){
  return new Promise((resolve,reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload =()=>{
          resolve(fileReader.result)
      };
      fileReader.onerror = (error)=>{
          reject(error)
      }
  })
}