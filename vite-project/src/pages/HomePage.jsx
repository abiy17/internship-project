import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"
import { useContext } from "preact/hooks";
import MyContext from "../context";
function Homepage() {
    const {mode,setmode} = useContext(MyContext)
    return ( 
        <motion.div  id={mode ? "homePage" : "homePage-light"} className="flex items-center justify-center min-h-[42.46em">
            <div  className="">
            <h1 className={mode ? "text-[2.5em] DI  md:text-[5.4em] text-white pb-2" : "text-[2.5em] DI  md:text-[5.4em] text-slate-800 pb-2"}>ወዴት መሄድ ይፈልጋሉ ?</h1>
            <p className={mode ? "text-gray-300 text-2xl text-center pb-6" : "text-slate-800 text-2xl text-center pb-6"}>Where Do You want to Go?</p>
            <div  className="flex flex-col justify-center items-center relative left-16 w-[10em] m-auto">
                <motion.div initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}} className="sm:flex gap-[3em] pt-4 relative left-[-3em] pb-24">
                    <NavLink to="personal"><button className={mode ? "button" : "button-light"}><span>ስራ አስኪያጅ  Officials</span></button></NavLink>
                    <NavLink to="department"><button className={mode ? "button" : "button-light"}> <span>የስራ ክፍል  Department</span></button></NavLink>
                </motion.div>
            </div>
        </div>
        </motion.div>
     );
}

export default Homepage;