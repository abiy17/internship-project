function MinisterCont(props) {
    return (
        <div className="w-10/12 md:flex hover:w-[35em] m-auto bg-stone-50 cursor-pointer duration-300 rounded-lg min-h-[15em] mt-5">
            <div className="">
                <img src={props.MinImage} className="image hover:scale-110 duration-300"/>
            </div>
            <div className="min-h-[6em] hover:block ml-10 mt-5">
                <p className="text-2xl text-slate-800 ">{props.minister}</p>
                <p className="text-stone-600 text-lg mt-3 w-56 mb-5">{props.detail}</p>
                <p className="text-slate-700">Address:-  {props.Mindirection}</p>
            </div>
        </div>
      );
}

export default MinisterCont;