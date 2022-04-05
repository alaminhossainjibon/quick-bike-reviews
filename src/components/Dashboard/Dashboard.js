import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLinChart from '../MyLinChart/MyLinChart';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard: ----</h1>
            <MyLinChart></MyLinChart>
            <MyBarChart></MyBarChart>
        </div>
    );
};

export default Dashboard;