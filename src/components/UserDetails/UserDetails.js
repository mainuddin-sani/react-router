import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const UserDetails = () => {
    const {userId} = useParams();
    const [user, setUser] = useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(data=>setUser(data.data))
    },[])
    console.log(user)
    return (
        <div>
            <h1>Details {userId}</h1>

            <p>Name {user.name}</p>
            <p>Phone {user.phone}</p>
        </div>
    );
};

export default UserDetails;