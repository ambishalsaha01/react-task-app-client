import React from 'react';
import Todo from '../ToDo/ToDo';
import AddTodo from './AddTodo';

const Home = () => {
    return (
        <div>
            <AddTodo></AddTodo>
            <Todo></Todo>
        </div>
    );
};

export default Home;