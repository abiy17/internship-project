import { useContext } from "preact/hooks";
import Nav from "../components/Nav";
import MyContext from "../context";

function Dashboard() {
    const { CommentsData,SetCommentsData,ratingData,setratingData } = useContext(MyContext)
    let LastRating = ratingData[ratingData.length - 1]
    let LastElement = CommentsData[CommentsData.length-1]
    console.log(LastRating)
    console.log(LastElement)
    return (
        <div className="dashboardDep">
            <Nav />
            <div className="flex gap-12  justify-center items-center w-11/12 bg-white rounded-xl m-auto min-h-[37em] mt-5 ">
                <div className="w-3/5 flex hover:p-1 duration-200 flex-col gap-16 min-h-[33em] bg-stone-50">
                <p className="ml-10 font-serif font-semibold text-2xl pt-10">Department Dashboard</p>
                <div className="w-4/5 flex flex-col gap-5 ml-14">
                    <li>Explore through all over departments and manage the departments in this company.</li>
                    <li>Here you can view all departments,create new departments,update department that you want,and remove department</li>
                    <li>someTimes clients may Rate this Website performance which it will help us to improve our weakness.you can visit rating page and view all Ratings</li>
                    <li>Also Clients can Add comments to the selected department.the Comment section contain the name of department that the client give feedback to It,Rating component,and Clinet FeedBack Section</li>
                    <li>you can view all comments in the comment pages</li>
                </div>
                </div>
                <div className="w-2/6  min-h-[37em] flex flex-col gap-4 pt-10">
                <div className="min-h-[12em] rounded-lg hover:p-8 text-white p-7 duration-300 bg-slate-700">
                        <p className="text-center font-serif font-semibold text-lg pt-5">Latest rating by clients</p>
                        <p className="font-bold">Star: {LastRating === undefined ? "" : LastRating.Rating}</p>
                        <p className="font-bold">Feedback: {LastRating === undefined ? "" : LastRating.feedback}</p>
                    </div>
                    <div className="min-h-[19.5em] rounded-lg hover:p-1 duration-300 bg-stone-50">
                        <p className="text-center font-serif font-semibold text-lg pt-7">Latest Comments by clients</p>
                        <p className="text-sm font-bold mt-5">የስራ ክፍል: {LastElement === undefined ? "" : LastElement.SelectedDep}</p>
                        <p>ግልዕነት: {LastElement === undefined ? "" : LastElement.optionOne}</p>
                        <p>ቅንነት: {LastElement === undefined ? "" : LastElement.optiontwo}</p>
                        <p>አገልግሎት: {LastElement === undefined ? "" : LastElement.optionThree}</p>
                        <p>ቅልጥፍና: {LastElement === undefined ? "" : LastElement.optionFour}</p>
                        <p>አስተያየት: {LastElement === undefined ? "" : LastElement.FeedBack}</p>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Dashboard;