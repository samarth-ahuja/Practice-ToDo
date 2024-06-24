import Task from './Task.jsx';
import SubHeading from './SubHeading.jsx';
import {useContext} from 'react';
import {TasksContext} from './TasksContext.jsx';

export default function TodoList() {
    const {taskList,deleteHandler,stateChangeHandler} = useContext(TasksContext);
    // const taskList = context.ctxValue.taskList;
    // const deleteHandler = context.ctxValue.deleteHandler;
    // const stateChangeHandler = context.ctxValue.stateChangeHandler;
    const currentTasks = taskList?.filter(item => item.completed === false);
    const completedTasks = taskList?.filter(item => item.completed === true);
    return (
        <>
            <div className='flex flex-col'>
                <SubHeading>Todo</SubHeading>
                <div className="grid grid-cols-3">
                    {currentTasks.map((item) => {
                        return <Task info={item} key={item.id} deleteHandler={deleteHandler} stateChangeHandler={stateChangeHandler}></Task>
                    })}
                </div>
            </div>
            <div className='flex flex-col'>
                <SubHeading>Completed</SubHeading>
                <div className="grid grid-cols-3">
                    {completedTasks.map((item) => {
                        return <Task info={item} key={item.id} deleteHandler={deleteHandler} stateChangeHandler={stateChangeHandler}></Task>
                    })}
                </div>
            </div>
        </>
    );
}