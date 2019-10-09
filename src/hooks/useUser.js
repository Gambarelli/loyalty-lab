import { useState } from 'react';

const useUser = (_user) => {

    const [ user, setUser ] = useState(_user);

    const setUserPoints = (points) => {
        setUser({...user, points })
    }

    return [user, setUser, setUserPoints,];
}

export default useUser;