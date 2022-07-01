import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateTask = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(()=>{
        const url = `https://cryptic-crag-92201.herokuapp.com/task/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div>
            <h2>{id}</h2>
            <p>{user.name}</p>
        </div>
    );
};

export default UpdateTask;