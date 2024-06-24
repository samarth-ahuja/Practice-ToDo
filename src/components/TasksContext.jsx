import {createContext,useReducer,useRef,useState,useEffect} from 'react';

function taskListReducer(state, action) {
    if (action.type === "ADD_TASK") {
        let newTask = {
            title: action.payload.text,
            id: Math.floor(Math.random() * 10000),
            completed: false
        };
        return [...state, newTask];
    }
    if (action.type === 'REMOVE_TASK') {
        return state.filter(listItem => listItem.id != action.payload.item.id)
    }
    if (action.type === 'STATE_CHANGE') {
        let newList = [];
        for (let x of state) {
            if (x.id === action.payload.item.id) {
                newList.push({ ...x, completed: !x.completed })
            }
            else {
                newList.push(x);
            }
        }
        return newList;
    }
}

export const TasksContext = createContext()
export default function TasksContextProvider({children}){
    const [taskList, taskListDispatcher] = useReducer(taskListReducer, []);
    const prevTaskList = useRef([]);
    const [logState,setLogState] = useState([]);
    useEffect(()=>{
        if(prevTaskList.current.length>taskList.length){
            let item = prevTaskList.current.find(x=>!taskList.includes(x));
            setLogState((prev)=>{
                return [...prev,{id:Math.floor(Math.random()*1000000),log:'Deleted a task with ' + item.id }];
            })
        }
        if(prevTaskList.current.length<taskList.length){
            let item = (taskList.find(x=>!prevTaskList.current.includes(x)));
            setLogState((prev)=>{
                return [...prev,{id:Math.floor(Math.random()*1000000),log:'Added a task with ' +item.id}];
            })
        }
        if(prevTaskList.current.length==taskList.length){
            let item = (taskList.find(x=>!prevTaskList.current.includes(x)));
            if(item){
                setLogState((prev)=>{
                    return [...prev,{id:Math.floor(Math.random()*1000000),log:'Task with id ' + item.id + ' is ' + (item.completed ? 'completed.' : 'pending')}];
                })
            }
        }
        prevTaskList.current = taskList;
    },[taskList])
    function newTaskHandler(text) {
        taskListDispatcher({
            type: 'ADD_TASK',
            payload: {
                text: text,
            },
        })
    }
    function deleteHandler(item) {
        taskListDispatcher({
            type: 'REMOVE_TASK',
            payload: {
                item: item,
            },
        })
    }
    function stateChangeHandler(item) {
        taskListDispatcher({
            type: 'STATE_CHANGE',
            payload: {
                item: item,
            },
        })
    }
    const ctxValue = {
        taskList:taskList,
        logState:logState,
        newTaskHandler,
        deleteHandler,
        stateChangeHandler,
    }
    return (
        <TasksContext.Provider value={{...ctxValue}}>
            {children}
        </TasksContext.Provider>
    );
}