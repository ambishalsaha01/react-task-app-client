import React, { useEffect, useState } from 'react';
import ToDoData from './ToDoData';

const Todo = () => {
    const [tasks, setTasks] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/task')
        .then(res=> res.json())
        .then(data=> setTasks(data))
    },[])
    return (
        <div className='mt-5'>
            {
                tasks.map(task => <ToDoData
                    key={task._id}
                    task={task}
                ></ToDoData>)
            }
        </div>
    );
};

export default Todo;