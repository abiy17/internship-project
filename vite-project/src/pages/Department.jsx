import DepartmentMainCont from "../components/DepartmentMainCont";
import DepartmentNav from "../components/DepartmentNav";
import { useContext, useState } from "preact/hooks";
import MyContext from "../context";
function Department() {
    const {mode,setmode} = useContext(MyContext)
    window.scroll(0,0)
    return (
        <div className={mode ? "departementDark" : "departementlight"}>
            <DepartmentNav />
            <DepartmentMainCont />
        </div>
      );
}

export default Department;