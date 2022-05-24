import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';

const User = () => {
    const [User, setUser] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(data=>setUser(data.data))
    }, [])
    return (
        <div>
            <h1>User</h1>
            {
                User.map(man=><UserInfo key={man.id} man={man}></UserInfo>)
            }
        </div>
    );
};

export default User;