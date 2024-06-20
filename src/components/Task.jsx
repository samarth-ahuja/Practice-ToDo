import SubHeading from "./SubHeading";
export default function Task({info,deleteHandler,stateChangeHandler}){
    return (
        <div className="flex flex-col rounded bg-stone-700 m-3 p-2">
            <SubHeading>{info.title}</SubHeading>
            <div className="flex justify-between">
                <button className='rounded px-4 bg-stone-600 py-2 hover:bg-green-600' onClick={()=>stateChangeHandler(info)}>{info.completed?"Undo":"Complete"}</button>
                <button className="rounded px-4 bg-red-500 py-2 hover:bg-red-400" onClick={()=>deleteHandler(info)}>Delete</button>
            </div>
        </div>
    );
}