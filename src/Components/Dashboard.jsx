import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-header">Welcome, {user?.username || 'User'}</h1>
            <p className="dashboard-welcome">Experience your personalized dashboard</p>
            <div className="logout-container">
                <button className="dashboard-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;
