import React, { useState, useContext } from 'react'
import {NavLink} from 'react-router-dom'
import {FaBars, FaSignInAlt, FaUserAlt, FaUserCircle, FaBell} from 'react-icons/fa'
import {ContextApi} from '../../Contexts/Contexts'
import './Navbar.css'


export default function Navbar() {

    const [open, setOpen] = useState(false)
    const [isAuth, setIsAuth] = useState(false)

    const {state} = useContext(ContextApi)
    
    const toggleMenu = () => setOpen(!open)

    const links = [
        {text:'Home', path:'/'},
        {text:'For Sale', path:'/store'},
        {text:'Rental', path:'/rental'},
        {text:'Freelancers', path:'/freelance'},
        {text:'Aucation', path:'/aucation'},
        {text:'Services', path:'/services'},
        {text:'About', path:'/about'},
    ]

    const navigationLinks = (
        <ul className="nav">
            {links.map( link =>(
                <li className="nav-item">
                    <NavLink className="nav-link" to={link.path} onClick={toggleMenu}> 
                        {link.text}
                    </NavLink>
                </li>
            ))}
        </ul>
    )

    const guestLink = (
        <ul className="nav">
            <li className="nav-item">
                <NavLink className="nav-link nav-icon-box px-3" to="/sale">Sale </NavLink> 
            </li>
            <li className="nav-item">
                <NavLink className="nav-link nav-icon-box" to="/login"><FaSignInAlt /> Sign in</NavLink> 
            </li>
            <li className="nav-item">
                <NavLink className="nav-link nav-icon-box" to="/signup"><FaUserAlt /> Sign up</NavLink> 
            </li>
        </ul>
    )

    const authUserLink = (
        <ul className="nav">
            <li className="nav-item">
                <NavLink className="nav-link nav-icon-box px-3" to="/create-resume">Create resume </NavLink> 
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/login"><FaBell className="navbar-icon" /> </NavLink> 
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/profile"><FaUserCircle className="navbar-icon" /></NavLink> 
            </li>
        </ul>
    )
    return (
        <nav className="navbar-wraper">
            <div className="logo-wraper">
                <h3>Online <span className="colored-text">Store</span></h3>
            </div>
            <div className="navbar-links-wraper">
                <div className="menu-container">
                    <FaBars className="menu-icon" onClick={toggleMenu} />
                </div>
                <div className="links-container">
                    {navigationLinks}
                </div>
                <div className={open ? "mobile-menu-links-container show" : "mobile-menu-links-container hide"}>
                    {navigationLinks}
                </div>
                <div className="navbar-buttons-wraper">
                    {state.user ? authUserLink : guestLink}
                </div>
            </div>
        </nav>
    )
}
