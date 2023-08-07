import { motion } from "framer-motion";
import PersonalNav from "../components/personalNav";
import PersonalMain from "../components/PersonalMain";
import MyContext from "../context";
import { useContext } from "preact/hooks";
function PersonalPage() {
    const {mode,setmode} = useContext(MyContext)
    window.scroll(0,0)
    return ( 
        <motion.div id="personal" className={mode ? "personal-dark" : "personal"}>
            <PersonalNav />
            <PersonalMain />
        </motion.div>
     );
}

export default PersonalPage;