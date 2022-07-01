import {  Link } from "react-router-dom";

const ToDoData = ({ task }) => {
    const { name, _id } = task;

    return (
        <div className="col-lg-5 mx-auto bg-warning py-2 px-3 rounded-pill my-2 d-flex">
            <input className='my-auto me-2' type="checkbox" name="" id="" />
            <h3 className='text-white'>{name}</h3>
            <button className='btn btn-dark ms-auto'>Edit Task</button>
        </div>
    );
};

export default ToDoData;