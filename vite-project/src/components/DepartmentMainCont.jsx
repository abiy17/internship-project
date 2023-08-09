import { useContext, useState } from "preact/hooks";
import MyContext from "../context";
import DepartmentCont from "./DepartmentCont";
import SkeletonMain from "./SkeletonMain";
import Rating from "./Rating";

function DepartmentMainCont() {
    const [value,setvalue] = useState("")
    const {Departement,setDepartment,mode,loading,setloading} = useContext(MyContext)
    console.log(value)
    return ( 
        <div className="flex flex-col">
            <div className="w-1/2 relative top-10 mb-8 m-auto h-14">
                <input type="text" placeholder="search here..." onChange={(e)=>{setvalue(e.target.value)}}  className={mode ? "w-11/12 p-3 pl-4 outline-none rounded-md bg-slate-950 text-white " : "w-11/12  p-3 pl-4 outline-none rounded-md"}/>
            </div>
            <div className={mode ? "departmentMainCont pb-12 mt-7 w-11/12 m-auto rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid gap-4 pt-10 md:grid-cols-3" : "departmentMainCont-light pb-12 mt-7 w-11/12 m-auto rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid gap-4 pt-10 md:grid-cols-3"}>
            {loading ? <SkeletonMain /> : Departement.filter(item =>{
                return value === "" ? item : item.department.includes(value)
            }).map((item)=>{
                return <DepartmentCont 
                    key={item.id}
                    {...item}
                />
            })}
        </div>
        </div>
     );
}

export default DepartmentMainCont;