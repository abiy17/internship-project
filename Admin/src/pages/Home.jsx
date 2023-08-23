import { NavLink } from "react-router-dom"
function Home() {
    return (
        <div className="home-admin bg-white flex-col gap-10 rounded-lg flex items-center m-auto justify-center">
            <p className="p text-slate-700 text-[5em]">Welcome Admin</p>
            <ul className="flex gap-10">
                <button className="button"><NavLink clasname to="DashboardMin"><span>Minsters</span></NavLink></button>
                <button className="button"><NavLink  to="dashboardOff"><span>Officials</span></NavLink></button>
                <button className="button"><NavLink to="dashboardDep"><span>Departements</span></NavLink></button>
                <button className="button"><NavLink to="ratings"><span>Ratings</span></NavLink></button>
            </ul>
        </div>
      );
}

export default Home;