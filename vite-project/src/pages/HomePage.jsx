import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"
import { useContext } from "preact/hooks";
import MyContext from "../context";
import mintImage from "../assets/mint.png"
function Homepage() {
    const {mode,setmode} = useContext(MyContext)
    return ( 
        <motion.div  id={mode ? "homePage" : "homePage-light"} className="flex items-center justify-center min-h-[42.46em">
            <div className="flex absolute top-5 left-10">
                <img className="block sm:hidden rounded-lg w-14" src={mintImage} alt="" />
            </div>
            <div  className="relative left-[-1.2em] sm:relative sm:left-0 mt-48 lg:mt-0">
            <h1 className={mode ? "text-3xl sm:text-[2.5em] ml-8 md:text-[3.4em] lg:text-[4.4em] text-white pb-2" : "text-3xl ml-8 md:text-[3.4em] sm:text-[2.5em]  lg:text-[4.4em] text-slate-800 pb-2"}>ወዴት መሄድ ይፈልጋሉ ?</h1>
            <p className={mode ? "text-gray-300 text-2xl sm:mt-4 text-center pb-6" : "text-slate-700 sm:mt-4 text-2xl text-center pb-6"}>Direction indicator</p>
            <div  className="flex justify-center items-center relative left-16 w-[10em] m-auto">
                <motion.div initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}} className=" md:gap-[2em] lg:flex gap-[3em] pt-4 relative left-[-3em] pb-24">
                    <NavLink to="personal"><button className={mode ? "button md:h-[6em] lg:h-[4em]" : "button-light md:h-[6em] lg:h-[4em]"}><span className={mode ? "flex pl-3 flex-col" : "flex pl-2 flex-col"}>የስራ ሐላፊዎች  Officials</span></button></NavLink>
                    <NavLink to="department"><button className={mode ? "button md:h-[6em] lg:h-[4em]" : "button-light md:h-[6em] lg:h-[4em]"}> <span>የስራ ክፍሎች  Departments</span></button></NavLink>
                    <NavLink to="minister"><button className={mode ? "button md:h-[6em] md:mb-[400px] lg:h-[4em] lg:mb-0" : "button-light lg:h-[4em] md:h-[6em] mb-[400px] lg:mb-0"}> <span>ሚኒስተር/ዴኤታዎች Minister</span></button></NavLink>
                </motion.div>
            </div>
        </div>
        </motion.div>
     );
}

export default Homepage;