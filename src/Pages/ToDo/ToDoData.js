import {  Link } from "react-router-dom";

const ToDoData = ({ task }) => {
    const { name, _id } = task;

    return (
        <div className="col-lg-5 mx-auto bg-warning py-2 px-3 rounded-pill my-2 d-flex">
            <input className='my-auto me-2' type="checkbox" name="" id="" />
            <h3 className='text-white'>{name}</h3>
            <Link className="ms-auto" to={`/update/:${task._id}`}><button className='btn btn-dark rounded-pill'>Edit Task</button></Link>
        </div>
    );
};

export default ToDoData;