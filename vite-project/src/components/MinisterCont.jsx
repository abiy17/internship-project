import { useContext } from "preact/hooks";
import MyContext from "../context";

function MinisterCont(props) {
    const { mode } = useContext(MyContext)
    return (
        <div className={mode ? "w-10/12 pl-14 pt-5 pb-5 sm:pb-0 sm:pt-0 sm:pl-0  md:flex hover:w-11/12 m-auto bg-gray-950 cursor-pointer duration-300 rounded-lg min-h-[15em] mt-5" : "w-10/12 pl-14 pt-5 pb-5 sm:pb-0 sm:pt-0 sm:pl-0 md:flex hover:w-11/12 m-auto bg-stone-50 cursor-pointer duration-300 rounded-lg min-h-[15em] mt-5"}>
            <div className="">
                <img src={props.MinImage} className="image hover:scale-110 rounded-lg duration-300"/>
            </div>
            <div className="min-h-[6em] hover:block ml-10 mt-5">
                <p className={mode ? "text-2xl text-stone-600 " : "text-2xl text-slate-800 "}>{props.minister}</p>
                <p className="text-stone-600 text-lg mt-3 w-56 mb-5">{props.detail}</p>
                <p className="text-slate-500">Address:-  {props.Mindirection}</p>
            </div>
        </div>
      );
}

export default MinisterCont;