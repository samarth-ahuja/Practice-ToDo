import Heading from './Heading.jsx';
import Input from './Input.jsx';
export default function TodoInput({clickHandler}){
    return (
        <div className='basis-1/4 h-fit m-5 rounded bg-slate-700 p-5 text-stone-400' >
            <Heading>Add Task</Heading>
            <Input clickHandler={clickHandler}></Input>
        </div>
    );
}