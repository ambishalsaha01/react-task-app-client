import React from 'react';

const ToDoData = ({task}) => {
    const {name, _id} = task;
    return (
        <div className="col-lg-5 mx-auto bg-warning p-3 rounded-pill my-2 d-flex">
            <input className='my-auto me-2' type="checkbox" name="" id="" />
            <h2 className='text-white'>{name}</h2>
            <button className='btn btn-dark ms-auto rounded-pill'>Update Task</button>
        </div>
    );
};

export default ToDoData;