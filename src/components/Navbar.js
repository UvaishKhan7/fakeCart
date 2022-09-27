import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light fixed-top shadow">
                <div className="container-fluid container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i className="fa fa-bars"></i>
                    </button>
                    <NavLink to="/">
                        <img src="/Shopaholic.png" alt="logo" style={{ height: "50px" }} />
                    </NavLink>
                    <button className="navbar-toggler" type="button">
                        <NavLink to='/Checkout'><i className="fa fa-shopping-cart"></i></NavLink>
                    </button>
                    <NavLink to='/SignIn'>
                        <button className='btn btn-outline-dark'> SignIn </button>
                    </NavLink>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <NavLink to="/">
                                <img src="/Shopaholic.png" alt="logo" style={{ height: "50px" }} />
                            </NavLink>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                            <br />
                        <div className="offcanvas-body text-center">
                            {/*<input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />*/}
                            <NavLink className="text-dark text-decoration-none" to="/Contact">
                                Contact Us
                            </NavLink>
                            <br />
                            <br />
                            <NavLink className="text-dark text-decoration-none" to="/AboutUs">
                                About Us
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;