import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand text-primary" href="/">
                        <img src="" alt="VLMS" style={{ width: "40px"}}/>
                    </a>
                    <button
                        className="navbar-toggler btn-white"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className='nav-item'><Link to="/" className='nav-link text-primary'>Home</Link></li>
                            <li className='nav-item'><Link to="/signin" className='nav-link text-primary'>Login</Link></li>
                            {/* <li className='nav-item'><Link to="/signup" className='nav-link text-primary'>SignUp</Link></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
    
        </>
    )
}

export default Navbar