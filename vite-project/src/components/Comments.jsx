import { useContext, useEffect, useState } from "preact/hooks";
import MyContext from "../context";
import axios from "axios";

function Comments() {
    const {ComMode,mode,setComMode,selectedDepartment,setselectedDepartment} = useContext(MyContext)
    const [optionOne,setoptionOne] = useState(1)
    const [optiontwo,setoptiontwo] = useState(1)
    const [optionThree,setoptionThree] = useState(1)
    const [optionFour,setoptionFour] = useState(1)
    const [FeedBack,setFeedBack] = useState("")
    let SelectedDep = selectedDepartment.department
    const HandleSubmit=(e)=>{
        alert("thanks for the comment")
        e.preventDefault();
            axios.post(`https://mint-backend-c59t.onrender.com/comments`,{ SelectedDep,optionOne,optiontwo,optionThree,optionFour,FeedBack }).catch(err => console.log(err))
    }
    return ( 
        <form onSubmit={HandleSubmit}>
        <div id="comments" className={ComMode ? mode ? " md:w-5/6 min-h-[20em] pt-10 pb-12 departmentCont rounded-lg shadow-lg" : " md:w-5/6 min-h-[20em] pt-10 pb-12 bg-stone-50 rounded-lg shadow-lg" : "hidden"}>
            <p className={mode ? "text-center text-[.7em] sm:text-xl m-auto text-white pt-4" : "text-center text-[.7em] sm:text-xl m-auto text-slate-900 pt-4"}>{selectedDepartment.department}</p>
            <div className="">
                <p className="text-center text-stone-400 mt-6 m-auto sm:ml-0 sm:max-w-[90em] text-sm">All feedback is appreciated to help us improve our offering!</p>
                <ul className="grid grid-cols-2 gap-x-28 relative gap-5 left-[-2em] sm:left-0 m-auto rounded-lg p-7 w-3/5">
                    <li className={mode ? "flex text-sm items-center gap-3 w-32 justify-center rounded-lg h-10" : "border-2 flex text-sm items-center gap-3 w-32 justify-center rounded-lg h-10"}>
                        <p className={mode ? "text-white" : "text-slate-900"}>ግልዕነት</p>
                        <select className={mode ? "w-10 h-7 bg-gray-950 text-white border-[.4px] rounded outline-none" : "w-10 h-7 bg-stone-100 border-[.4px] rounded outline-none"} onChange={(e)=>setoptionOne(e.target.value)} name="" id="">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </li>
                    <li className={mode ? "flex text-sm items-center gap-3 w-32 justify-center rounded-lg h-10" : "border-2 flex text-sm items-center gap-3 w-32 justify-center rounded-lg h-10"}>
                        <p className={mode ? "text-white" : "text-slate-900"}>ቅንነት</p>
                        <select className={mode ? "w-10 h-7 bg-gray-950 text-white border-[.4px] rounded outline-none" : "w-10 h-7 bg-stone-100 border-[.4px] rounded outline-none"} onChange={(e)=>setoptiontwo(e.target.value)} name="" id="">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </li>
                    <li className={mode ? "flex text-sm items-center gap-3 w-32 justify-center rounded-lg h-10" : "border-2 flex text-sm items-center gap-3 w-32 justify-center rounded-lg h-10"}>
                        <p className={mode ? "text-white" : "text-slate-900"}>አገልግሎት</p>
                        <select className={mode ? "w-10 h-7 bg-gray-950 text-white border-[.4px] rounded outline-none" : "w-10 h-7 bg-stone-100 border-[.4px] rounded outline-none"} onChange={(e)=>setoptionThree(e.target.value)} name="" id="">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </li>
                    <li className={mode ? "flex text-sm items-center gap-3 w-32 justify-center rounded-lg h-10" : "border-2 flex text-sm items-center gap-3 w-32 justify-center rounded-lg h-10"}>
                        <p className={mode ? "text-white" : "text-slate-900"}>ቅልጥፍና</p>
                        <select className={mode ? "w-10 h-7 bg-gray-950 text-white border-[.4px] rounded outline-none" : "w-10 h-7 bg-stone-100 border-[.4px] rounded outline-none"} onChange={(e)=>setoptionFour(e.target.value)} name="" id="">
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="w-3/4 m-auto relative left-12">
                <input type="text" placeholder="Type here..." onChange={(e)=>setFeedBack(e.target.value)}  className={mode ? "w-5/6 pb-10 outline-1 bg-gray-950 text-white rounded-lg p-5 text-[.7em]" : "w-5/6 pb-10 outline-1 border-2 border-slate-300 outline-slate-400 rounded-lg p-5 text-[.7em]"} required/>
                <button type="submit" className="w-2/4 relative left-14 text-md mt-10 p-2 hover:opacity-80 duration-200 active:opacity-70 bg-slate-800 text-white rounded-md">submit</button>
            </div>
        </div>
        </form>
     );
}

export default Comments;