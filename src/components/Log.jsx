import { useContext } from "react";
import Heading from "./Heading";
import {TasksContext} from './TasksContext.jsx';

export default function Log(){
    const {logState} = useContext(TasksContext);
    const logs = logState;
    return (
        <div className="p-5 container w-full my-5 rounded-lg bg-stone-800 text-stone-300 space-y-3">
            <Heading> Logs </Heading>
            <table className="table-auto border border-slate-500 m-auto">   
                <thead className="border border-slate-500">
                    <tr className="border border-slate-500">
                        <th className="border border-slate-500">Log ID</th>  
                        <th className="border border-slate-500">Log Message</th>  
                    </tr> 
                </thead>
                <tbody className="border border-slate-500">
                    {logs.length!==0 && logs.map((item)=>{
                        return <tr key={item.id} className="border border-slate-500">
                            <td className="border border-slate-500">{item.id}</td>
                            <td className="border border-slate-500">{item.log}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}