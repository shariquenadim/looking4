import React, { useEffect } from 'react';
import axios from '../../axios';

export default function Dashboard() {

    useEffect(() => {
        axios.get("/dashboard")
            .then(res => console.log(res))
            .catch(err => console.log({...err }));
    })


    return ( <
        div > Dashboard
        for admin < /div>
    )
}