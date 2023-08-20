import { FaStar,FaWindowClose } from "react-icons/fa"
import { useContext, useState } from "preact/hooks";
import axios from "axios"
import MyContext from "../context";
function Rating() {
    const [Rating,setRating] = useState(0)
    const [feedback,setfeedback] = useState("")
    const [hover,sethover] = useState(null)
    const { RatingCpt,setRatingCpt,mode,setmode } = useContext(MyContext)
    const HandleRating=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:5000/rating`,{ Rating,feedback })
        alert("Thanks for the Feedback!")
        setRatingCpt(false)
        setRating(0);
        setfeedback("")
    }   
    return (
    <form className={RatingCpt ? "block" : "hidden"} onSubmit={HandleRating}>
        <div className={mode ? "flex flex-col gap-10 p-5 w-4/6 items-center bg-gray-950 rounded-xl min-h-[2oem] m-auto" : "flex flex-col gap-10 p-5 w-4/6 items-center bg-stone-50 rounded-xl min-h-[2oem] m-auto"}>
            <div className="flex pt-4">
                <p className="text-slate-700 font-bold">How did we do?</p>
                <FaWindowClose onClick={setRatingCpt(false)} className={mode ? "relative left-56 cursor-pointer text-white" : "relative left-56 cursor-pointer"}/>
            </div>
            <p className="text-[1em] w-[30em] text-center text-slate-500">Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!</p>
            <div className="flex gap-4"> 
            { [...Array(5)].map((item,i)=>{
                const ratingCount = i + 1
                return <div className="cursor-pointer">
                    <input type="radio" name="rating" value={ratingCount} onClick={()=>{setRating(ratingCount)}} className="hidden"/>
                    <FaStar
                    onClick={()=>{setRating(ratingCount)}}
                    size={50}
                    color={ratingCount <= (hover || Rating) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={()=> sethover(ratingCount)}
                    onMouseLeave={()=>{sethover(null)}}
                    />
                </div>
            }) }
            </div>
            <label htmlFor="input" className="flex flex-col gap-3 relative top-[-1em]">
                <p></p>
                <input type="text" className={mode ? "w-[29em] pb-10 outline-1 bg-gray-900 outline-slate-900 rounded-lg p-5 text-[.7em]" : "w-[29em] pb-10 outline-1 outline-orange-300 rounded-lg p-5 text-[.7em]"} value={feedback} placeholder="give us feedback here..." required onChange={(e)=>{setfeedback(e.target.value)}}/>
                <button type="submit" className="w-[20.4em] p-2 hover:opacity-80 duration-200 active:opacity-70 m-auto bg-orange-500 text-white rounded-md">submit</button>
            </label>
        </div>
    </form>
      );
}

export default Rating;