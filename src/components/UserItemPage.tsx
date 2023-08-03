import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from '../types/types';
import axios from 'axios';


const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams();

    useEffect(() => {
        fetchUser();
    }, []);

    console.log(params);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(
                'https://jsonplaceholder.typicode.com/users/' + params.id
            );
            setUser(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <button>back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>{user?.email}</div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;