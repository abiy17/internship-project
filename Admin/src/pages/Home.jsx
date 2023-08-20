import { NavLink } from "react-router-dom"
function Home() {
    return (
        <div className="bg-white w-11/12 flex-col gap-10 rounded-lg flex items-center m-auto justify-center h-[40em] mt-6">
            <p className="p text-slate-800 text-[5em]">Welcome Admin</p>
            <ul className="flex gap-10">
                <button className="button"><NavLink clasname to="minister"><span>Minsters</span></NavLink></button>
                <button className="button"><NavLink  to="Officals"><span>Officials</span></NavLink></button>
                <button className="button"><NavLink to="dashboardDep"><span>Departements</span></NavLink></button>
            </ul>
        </div>
      );
}

export default Home;