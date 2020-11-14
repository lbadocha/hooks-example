import React, { useEffect, useState } from 'react';

const DisplayUsers = () => {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(1);

    useEffect(() => {
        console.log('zmiana komponentu');
        fetch('https://jsonplaceholder.typicode.com/users/'+ userId)
            .then(response => response.json())
            .then(jsonUser => {
                setUser(jsonUser);
            })
    }, [userId]);

    
    return (
        <div className="users">
            {user && <h2>{user.name}</h2>}
            <button onClick={()=>setUserId(userId + 1)}>Get another user</button>
        </div>
    )
}


export default DisplayUsers;