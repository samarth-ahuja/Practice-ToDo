import {useRef} from 'react';
export default function Input({clickHandler}){
    const inputRef = useRef();
    return (
        <div className="flex flex-col space-y-2">
            <label>Task Name : </label>
            <input ref={inputRef} type="text" className="text-stone-900 p-2"/>
            <button onClick={ ()=>{clickHandler(inputRef.current.value);inputRef.current.value = '';}} type="submit" className='rounded bg-green-700 py-2 hover:text-stone-300'>Submit</button>
        </div>
    );
}