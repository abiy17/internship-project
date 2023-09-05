import { useContext, useState } from "preact/hooks";
import { NavLink,useNavigate } from "react-router-dom";
import MyContext from "../context";
import axios from "axios";
function CreateOfficials() {
    const Navigate = useNavigate()
    const [VaildOffForm,setVaildOffForm] = useState(false)
    const {OfficialImg,setOfficialImg,Officials,setOfficials,OfficalsDet,setOfficalsDet,OfficalsDir,setOfficalsDir} = useContext(MyContext)
    const FileChange = async (e)=>{
        const file = e.target.files[0];
        const base64 = await covertToBase64(file);
        setOfficialImg(base64);
    }
    const HandleSubmit =(e)=>{
        e.preventDefault();
        if( Officials !== "" && OfficalsDet !== "" && OfficalsDir !== ""){
            setVaildOffForm(true)
        }
        alert("Caution! Don't Referesh the page")
        axios.post(`http://localhost:5000/officials`,{ OfficialImg,Officials,OfficalsDet,OfficalsDir })
        .then(res => console.log(res))
        .catch((err)=>console.log(err))
        setTimeout(() => {
            setVaildOffForm(false)
        }, 3000);
        setOfficialImg("")
        setOfficials("")
        setOfficalsDet("")
        setOfficalsDir("")
    }
    return (
        <div className="Officals">
            <div className="w-11/12 bg-white min-h-[4em] text-xl font-bold flex justify-around items-center m-auto">
                <h1>Officals</h1>
                <ul className="flex gap-8 items-center">
                    <NavLink onClick={()=>Navigate(-1)}>DashBoard</NavLink>
                </ul>
            </div>
            <div className="w-11/12 m-auto mt-5 rounded-lg h-[35em] bg-white">
                <form onSubmit={HandleSubmit} className="bg-stone-50 rounded-md w-2/3 grid justify-center items-center m-auto h-[30em] relative top-10">
                    <p className={VaildOffForm ? "text-green-700 text-xl text-center" : "hidden"}>Operation is succesfully completed!</p>
                    <div className="min-w-[30em]">
                        <label className="flex gap-10">
                            <p className="text-slate-700 text-xl">Image:</p>
                            <input className="w-2/3 h-[4em]" onChange={FileChange} type="file" required/>
                            <img src={OfficialImg} alt="" className="rounded w-10"/>
                        </label>
                    </div>
                    <div className="min-w-[30em]">
                        <label className="flex gap-10">
                            <p className="text-slate-700 text-xl">Name:</p>
                            <input className="w-2/3 outline-none h-[4em]" value={Officials} onChange={(e)=>setOfficials(e.target.value)} type="text" required/>
                        </label>
                    </div>
                    <div className="">
                        <label className="flex gap-10">
                            <p className="text-slate-700 text-xl">Detail:</p>
                            <input className="w-2/3 outline-none h-[4em]" type="text" value={OfficalsDet} onChange={(e)=>setOfficalsDet(e.target.value)} required/>
                        </label>
                    </div>
                    <div className="">
                        <label className="flex gap-5">
                            <p className="text-slate-700 text-xl">Direction:</p>
                            <input className="w-2/3 outline-none h-[4em]" type="text" value={OfficalsDir} onChange={(e)=>setOfficalsDir(e.target.value)} required/>
                        </label>
                    </div>
                    <button className="w-[7.5em] m-auto h-[2.3em] bg-slate-800 text-white rounded-lg hover:opacity-70 duration-300 active:opacity-50" type="submit">Submit</button>
                </form>
            </div>
        </div>
      );
}

export default CreateOfficials;

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