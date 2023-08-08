import { useContext } from "preact/hooks";
import MyContext from "../context";
import axios from "axios"
function Create() {
    const { departments,setdepartments,id,setid,validForm,setValidForm,disableBtn,setdisableBtn,department,setdepartment,description,setdescription,direction,setdirection,validId,setvalidId } = useContext(MyContext)
    const HandleSubmit=(e)=>{
        if( id > departments.length ){
          setvalidId(true)
        }
        if( id > departments.length && department !== "" && description !== "" && direction !== ""){
            setValidForm(true)
        }
        setTimeout(() => {
            setValidForm(false)
        }, 3000);
        e.preventDefault();
        axios.post(`http://localhost:5000/department`,{id,department,description,direction})
        .then(res => console.log(res))
        .catch(err =>console.log(err))
        setdepartment("")
        setdescription("")
        setdirection("")
        
      }
    return (
        <div className="w-[50%] m-auto bg-gray-50 text-xl pl-10">
            <form onSubmit={HandleSubmit} className="flex flex-col gap-10" >
                <h1 className="text-center text-2xl">Create department</h1>
                <div className="flex flex-col gap-3">
                    <h1 className={validForm ? "text-green-600 font-semibold text-lg text-center" : "hidden"}>Operation was successfull !</h1>
                    <div className="flex gap-[5em]">
                        <span>Id</span>
                        <input type="number" className="text-sm w-[10%] h-5 p-3 outline-none rounded border-solid border-gray-300 border-[1px]" required onChange={(e)=>setid(e.target.value)}  />
                    </div>
                    { id > departments.length ? null : <p className="text-red-600 text-sm">warning:- Id must be greater than {departments.length}!</p>}
                </div>
                <div className="flex gap-4">
                    <span>Department</span>
                    <textarea cols="50" type="text" className="text-sm p-3 outline-none rounded-lg border-solid border-gray-300 border-[1px]" onChange={(e)=>setdepartment(e.target.value)} value={department} required/>
                </div>
                <div className="flex gap-5">
                    <span>Description</span>
                    <textarea cols="50" type="text" className="text-sm p-3 outline-none rounded-lg border-solid border-gray-300 border-[1px]" onChange={(e)=>setdescription(e.target.value)}  value={description} required/>
                </div>
                <div className="flex gap-10">
                    <span>Direction</span>
                    <textarea cols="50" type="text" className="text-sm p-3 outline-none rounded-lg border-solid border-gray-300 border-[1px]" onChange={(e)=>setdirection(e.target.value)} value={direction} required/>
                </div>
                <button className="w-[7.5em] m-auto h-[2.3em] bg-slate-800 text-white rounded-lg hover:opacity-70 duration-300 active:opacity-50" disabled={id > departments.length ? false : true} type='submit'>Submit</button>
            </form>
        </div>
      );
}

export default Create;