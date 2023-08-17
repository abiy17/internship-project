function MinisterCont(props) {
    return (
        <div className="w-[15em] hover:w-[35em] m-auto bg-stone-50 cursor-pointer duration-300 rounded-lg min-h-[15em] mt-5">
            <div className="">
                <img src={props.MinImage} className="image hover:scale-110 duration-300"/>
            </div>
            <div className="min-h-[6em] hover:block ml-10 mt-5">
                <p className="text-2xl text-slate-800 ">{props.minister}</p>
                <p className="text-stone-600 text-sm mt-3">{props.detail}</p>
                <p>{props.Mindirection}</p>
            </div>
        </div>
      );
}

export default MinisterCont;