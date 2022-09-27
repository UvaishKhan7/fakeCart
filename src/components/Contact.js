import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <NavLink to="/">
                    <img src="/Shopaholic.png" alt="logo" style={{ height: "50px" }} />
                </NavLink>
                <h1 className="display-5 fw-bold">Contact Us</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">For any kind of inquiry, you can contact on below mail or number</p>
                    <div>
                        <div>example@abc.com</div>
                        <div>+911234567890</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;