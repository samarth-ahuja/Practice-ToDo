import Task from './Task.jsx';
import SubHeading from './SubHeading.jsx';
export default function TodoList({ taskList, deleteHandler,stateChangeHandler }) {
    const currentTasks = taskList.filter(item => item.completed === false);
    const completedTasks = taskList.filter(item => item.completed === true);
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