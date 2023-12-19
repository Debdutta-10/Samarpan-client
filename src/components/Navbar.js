import React, {useState } from 'react';
import './styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav>
            <div>
                <h2 className='navhead'>Samarpan</h2>
            </div>
            <div>
                <ul className={clicked ? "navbar active" : "navbar"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>

            <div id='mobile' onClick={handleClick}>
                <i style={{color:'white'}} id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
    );
}

export default Navbar;
