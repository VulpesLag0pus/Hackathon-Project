import React from 'react';
import { FaHome, FaClipboardList, FaCalendarAlt, FaGamepad } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column vh-100 p-3 bg-light" style={{ width: '250px' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img src="./Sipnplay.png" alt="Logo" className="bi me-2" width="40" height="32" />
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="/" className="nav-link text-dark">
                        <FaHome className="me-2" />
                        Home
                    </a>
                </li>
                <li>
                    <a href="/order" className="nav-link text-dark">
                        <FaClipboardList className="me-2" />
                        Order
                    </a>
                </li>
                <li>
                    <a href="/events" className="nav-link text-dark">
                        <FaCalendarAlt className="me-2" />
                        Events
                    </a>
                </li>
                <li>
                    <a href="/games" className="nav-link text-dark">
                        <FaGamepad className="me-2" />
                        Games
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;