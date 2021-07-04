import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = ({ data }) => {
    console.log(data);
    return (
        <nav>
            <h1 className='header'>SMecherie</h1>
            <ul>
                {data.map((item) =>
                (
                    <Link to={item.path}>
                        <li>{item.name}</li>
                    </Link>

                )
                )}
            </ul>
        </nav>
    );
};

export default Sidebar
