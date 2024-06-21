import TodoList from './TodoList.jsx';
import TodoInput from './TodoInput';
import Heading from './Heading.jsx';
import {useReducer} from 'react';

function taskListReducer(state,action){
    if(action.type==="ADD_TASK"){
        let newTask = {
            title:action.payload.text,
            id:Math.floor(Math.random()*10000),
            completed:false
        };
        return [...state,newTask];
    }
    if(action.type==='REMOVE_TASK'){
        return state.filter(listItem=>listItem.id!=action.payload.item.id)
    }
    if(action.type==='STATE_CHANGE'){
        let newList=[];
        for(let x of state){
            if(x.id===action.payload.item.id){
                newList.push({...x,completed:!x.completed})
            }
            else{
                newList.push(x);
            }
        }
        return newList;
    }
}

export default function TodoApp(){
    const [taskList,taskListDispatcher] = useReducer(taskListReducer,[]);
    function newTaskHandler(text){
        taskListDispatcher({
            type:'ADD_TASK',
            payload:{
                text:text,
            }
        })
    }
    function deleteHandler(item){
        taskListDispatcher({
            type:'REMOVE_TASK',
            payload:{
                item:item,
            }
        })
    }
    function stateChangeHandler(item){
        taskListDispatcher({
            type:'STATE_CHANGE',
            payload:{
                item:item,
            }
        })
    }
    return (
        <div className='flex'>
            <div className='basis-3/4 p-5 text-stone-300'>
                <Heading>To Do List</Heading>
                <TodoList taskList={taskList} deleteHandler={deleteHandler} stateChangeHandler={stateChangeHandler}/>
            </div>
            <TodoInput clickHandler={newTaskHandler}></TodoInput>                
        </div>
    );
}