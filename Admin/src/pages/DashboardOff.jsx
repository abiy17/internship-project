import Nav from "../components/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import svg from "../assets/offDash.svg"
import sad from "../assets/sad.svg"
import { useContext } from "preact/hooks";
import MyContext from "../context";
function DashboardOff() {
    const Navigate = useNavigate()
    const { OfficalsData,setOfficalsData } = useContext(MyContext)
    const recentlyCreated = OfficalsData[OfficalsData.length - 1]
    console.log(recentlyCreated)
    return (
        <div className="dashboardOff overflow-y-hidden">
            <div className="w-11/12 bg-white min-h-[4em] text-xl font-bold flex justify-around items-center m-auto">
            <h1>Welcome Admin</h1>
            <ul className="flex gap-8 items-center">
                <NavLink className="hover:opacity-10 active:opacity-70 duration-700" to="Officals">Create</NavLink>
                <NavLink className="hover:opacity-10 active:opacity-70 duration-700" to="edit"><li>Edit</li></NavLink>
                <NavLink className="hover:opacity-10 active:opacity-70 duration-700" onClick={()=>Navigate(-1)}>Home</NavLink>
            </ul>
        </div>
            <div className="flex gap-12  justify-center items-center w-11/12 bg-white rounded-xl m-auto min-h-[37em] mt-5 ">
                <div className="w-3/5 flex hover:p-1 duration-200 flex-col gap-5 min-h-[33em] bg-slate-700 rounded-lg text-white">
                <p className="ml-10 font-serif font-semibold text-2xl pt-10">Officials Dashboard</p>
                <div className="w-4/5 flex flex-col gap-2 ml-14">
                <img src={svg} alt="" className="w-[14.2em]"/>
                    <li>Explore and manage all Officials in Mint,</li>
                    <li>Here you can view all Officials,create new Officials,update what you want,and remove it from database</li>
                    <li>someTimes clients may Rate this Website performance which it will help us to improve our weakness.you can visit rating page and view all Ratings</li>
                </div>
                </div>
                <div className="w-2/6  min-h-[37em] flex flex-col gap-4 pt-10">
                <div className="min-h-[12em] rounded-lg hover:p-8 text-black p-7 duration-300 bg-stone-50">
                        <p className="font-bold font-serif mb-5">Recently Created Officials</p>
                        <div className="flex items-center gap-3">
                        {recentlyCreated === undefined || recentlyCreated === {} || recentlyCreated === null ? 
                        <div className="flex items-center gap-3">
                            <img src={sad} alt="" className="w-10"/>
                            <p>opps!,you haven,t created new Officials</p>
                        </div> : 
                            <div>
                                <p className="font-semibold">Full Name: {recentlyCreated.Officials}</p>
                                <p className="font-semibold">Detail: {recentlyCreated.OfficalsDet}</p>
                                <p className="font-semibold">Direction: {recentlyCreated.OfficalsDir}</p>
                            </div>}
                        </div>
                    </div>
                    <div className="h-[19.5em] overflow-y-scroll pl-8 pt-5 rounded-lg duration-300 bg-stone-50">
                        <p className="font-bold font-serif mb-12 text-xl">List of all Officials</p>
                        <ul className="flex flex-col ml-5 gap-4">
                            {OfficalsData.length === 0 ? <p className="text-center">There is no Officals data</p> : OfficalsData.map(item => {
                                return <li className="border-2 hover:p-4 duration-300 cursor-pointer w-11/12 p-3 border-slate-800 rounded-lg">{item.Officials}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default DashboardOff;