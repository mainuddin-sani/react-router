import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfo = (props) => {
    const {name,id} = props.man;
    const navigate = useNavigate();

    const eventHandler = (id)=>{
        navigate(`/user/${id}`)
    }
    return (
        <div>
            <h3>{name}</h3>
            <button onClick={()=>eventHandler(id)}>button {id} </button>
        </div>
    );
};

export default UserInfo;