import TodoList from './TodoList.jsx';
import TodoInput from './TodoInput';
import Heading from './Heading.jsx';
import { useState,useEffect, useReducer,useRef } from 'react';
import Log from './Log.jsx';

function taskListReducer(state, action) {
    if (action.type === "ADD_TASK") {
        let newTask = {
            title: action.payload.text,
            id: Math.floor(Math.random() * 10000),
            completed: false
        };
        action.log({id:Math.floor(Math.random()*1000000),log:'Added a task with ' + newTask.id});
        return [...state, newTask];
    }
    if (action.type === 'REMOVE_TASK') {
        action.log({id:Math.floor(Math.random()*1000000),log:'Deleted a task with ' + action.payload.item.id});
        return state.filter(listItem => listItem.id != action.payload.item.id)
    }
    if (action.type === 'STATE_CHANGE') {
        let newList = [];
        for (let x of state) {
            if (x.id === action.payload.item.id) {
                action.log({id:Math.floor(Math.random()*1000000),log:'Task with id ' + x.id + ' is ' + (!x.completed ? 'completed.' : 'pending')});
                newList.push({ ...x, completed: !x.completed })
            }
            else {
                newList.push(x);
            }
        }
        return newList;
    }
}

let logStatements = [];
export default function TodoApp() {
    const [taskList, taskListDispatcher] = useReducer(taskListReducer, []);
    const [logState,setLogState] = useState([]);
    function handleLog(log){
        console.log('Logging:', log);
        setLogState(prev=>[...prev,log])
    }
    function newTaskHandler(text) {
        taskListDispatcher({
            type: 'ADD_TASK',
            payload: {
                text: text,
            },
            log:handleLog
        })
    }
    function deleteHandler(item) {
        taskListDispatcher({
            type: 'REMOVE_TASK',
            payload: {
                item: item,
            },
            log:handleLog
        })
    }
    function stateChangeHandler(item) {
        taskListDispatcher({
            type: 'STATE_CHANGE',
            payload: {
                item: item,
            },
            log:handleLog
        })
    }
    return (
        <div className="flex flex-col">
            <div className='flex bg-stone-800'>
                <div className='basis-3/4 p-5 text-stone-300'>
                    <Heading>To Do List</Heading>
                    <TodoList taskList={taskList} deleteHandler={deleteHandler} stateChangeHandler={stateChangeHandler} />
                </div>
                <TodoInput clickHandler={newTaskHandler}></TodoInput>
            </div>
            <Log logs={logState}></Log>
        </div>
    );
}