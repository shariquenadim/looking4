import React, { useEffect } from 'react';
import axios from '../../axios';

import './index.css';
import Sidebar from '../../components/Sidebar/SideBar'
import NewPatient from '../../components/NewPatient/NewPatient';
export default function Dashboard() {

    useEffect(() => {
        axios.get("/dashboard")
            .then(res => console.log(res))
            .catch(err => console.log({...err }));
    })


    return ( 
        <div className='Dashboard-container'>
        <div className='sidebar'>
        <Sidebar/>
        </div>
        <div className='MainPage'>
            <NewPatient/>
        </div>
        </div>
    )
}