import TodoList from './TodoList.jsx';
import TodoInput from './TodoInput';
import Heading from './Heading.jsx';
import { useState,useEffect, useReducer,useRef } from 'react';
import Log from './Log.jsx';

let logStatements = [];
export default function TodoApp() {
    return (
        <div className="flex flex-col">
            <div className='flex bg-stone-800'>
                    <div className='basis-3/4 p-5 text-stone-300'>
                        <Heading>To Do List</Heading>
                        <TodoList/>
                    </div>
                    <TodoInput ></TodoInput>
            </div>
            <Log></Log>
        </div>
    );
}