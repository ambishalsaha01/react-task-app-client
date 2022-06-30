import React from 'react';
import { Form } from 'react-bootstrap';

const AddTodo = () => {
    const handleTaskForm = event =>{
        event.preventDefault()
        const name = event.target.task.value;
        const task = {name}
        console.log(task)
        // send to the server
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className="col-lg-5 mx-auto py-5">
            <form onSubmit={handleTaskForm} className='d-flex'>
                <input className='border-warning form-control' type="text" name='task' placeholder='Enter Your Task Name' />
                <button className='btn btn-dark p-3 px-5' type='submit'>Enter</button>
            </form>
        </div>
    );
};

export default AddTodo;