import TodoList from './TodoList.jsx';
import TodoInput from './TodoInput';
import Heading from './Heading.jsx';
import {useState} from 'react';

export default function TodoApp(){
    const [taskList,setTaskList] = useState([]);
    function newTaskHandler(text){
        let newTask = {
            title:text,
            id:Math.floor(Math.random()*10000),
            completed:false
        };
        setTaskList((prevList)=>{
            return [...prevList,newTask];
        })
    }
    function deleteHandler(item){
        setTaskList((prevList)=>{
            return prevList.filter(listItem=>listItem.id!=item.id)
        })
    }
    function stateChangeHandler(item){
        setTaskList((prevList)=>{
            let newList=[];
            for(let x of prevList){
                if(x.id===item.id){
                    newList.push({...x,completed:!x.completed})
                }
                else{
                    newList.push(x);
                }
            }
            return newList;
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