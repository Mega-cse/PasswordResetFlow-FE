import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is authenticated
        const isAuthenticated = !!localStorage.getItem('token');
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [navigate]);

    // Retrieve user data from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            {/* Conditionally display username or a default message */}
            <h1 className="dashboard-header">
                Welcome, {user?.username ? user.username : 'User'}
            </h1>
            <p className="dashboard-welcome">Experience your personalized dashboard</p>
            <div className="logout-container">
                <button className="dashboard-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
