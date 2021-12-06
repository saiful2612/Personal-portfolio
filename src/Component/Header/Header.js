import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'

const Header = () => {
    return (
        <div className="container header-area">

            <nav className="navbar navbar-expand-lg navbar-custom container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#navbar"></a>

                    <button className="navbar-toggler navbar-toggler-right text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon ">Menu</span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav navbar-custom mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link navbar-element active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-element" href="#about">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-element" href="#project">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navbar-element" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <Home></Home>

        </div>
    );
};

export default Header;