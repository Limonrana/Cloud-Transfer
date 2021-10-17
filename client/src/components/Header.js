import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/cloud-icon.png';

const Header = () => (
    <header className="nav d-flex justify-content-between">
        <div className="brand">
            <img src={Logo} width="50px" alt="logo" />
            <span className="brandName">Cloud Transfer</span>
        </div>
        <div className="menu">
            <ul className="navbar">
                <li className="navItem">
                    <a className="navLink" href="#about">
                        About
                    </a>
                </li>
                <li className="navItem">
                    <a className="navLink" href="#feature">
                        Feature
                    </a>
                </li>
                <li className="navItem">
                    <Link className="navLink join" to="/">
                        Transfer
                    </Link>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;
