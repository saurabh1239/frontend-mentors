import React from 'react'
import logo from "../../public/images/logo.svg"

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <ul className="menuItem">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
                <ul className="profile">
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </div>
        </div>
    )
}

export default Header