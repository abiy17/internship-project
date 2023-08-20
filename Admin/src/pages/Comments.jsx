import { NavLink, useNavigate } from "react-router-dom";
import { useContext,useEffect } from "preact/hooks";
import MyContext from "../context";
function Comments() {
    const Navigate = useNavigate();
    const {CommentsData,SetCommentsData} = useContext(MyContext)
    return (
        <div className="comments flex flex-col gap-5">
            <div className="w-11/12 bg-white min-h-[4em] text-xl font-bold flex justify-around items-center m-auto">
                <h1>Welcome Admin</h1>
                <ul className="flex gap-8 items-center">
                    <NavLink onClick={()=>Navigate(-1)}><li>Home</li></NavLink>
                </ul>
            </div>
            <div className="w-11/12 bg-white pt-10 flex flex-col gap-5 min-h-[37em] m-auto">
                {CommentsData.length === 0 ? <div className="">
                    <p className="text-center text-2xl text-slate-800">There are no Comments!</p>
                    </div> : CommentsData.map((item)=>{
                        return <div className="w-[80%] flex flex-col rounded m-auto bg-zinc-100 min-h-[5.5em] p-5">
                            <p className="text-lg flex"><p className="font-bold text-slate-700">ስራ አስፈፃሚ</p>: {item.SelectedDep}</p>
                             <p className="text-lg flex"><p className="font-bold text-slate-700">ግልዕነት</p>: {item.optionOne}</p>
                             <p className="text-md flex  text-slate-800"><div className="font-bold text-slate-700">ቅንነት</div>: {item.optiontwo}</p>
                             <p className="text-lg flex"><p className="font-bold text-slate-700">አገልግሎት</p>: {item.optionThree}</p>
                             <p className="text-lg flex"><p className="font-bold text-slate-700">ቅልጥፍና</p>: {item.optionFour}</p>
                             <p className="text-lg flex"><p className="font-bold text-slate-700">አስተያየት</p>: {item.FeedBack}</p>
                        </div>
                })}
            </div>
        </div>
      );
}

export default Comments;