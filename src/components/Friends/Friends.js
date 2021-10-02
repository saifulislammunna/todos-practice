import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends,setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res =>res.json())
        .then(data => setFriends(data));
    })
    return (
        <div className="p-5">
            <h1> Friends: {friends.length}</h1>
            {
                friends.map(friend => <Friend></Friend>)
            }
        </div>
    );
};

export default Friends;