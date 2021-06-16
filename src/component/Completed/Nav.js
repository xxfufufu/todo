import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../style/Nav.css'

function Nav() {

    const active = {
        color :'#2F80ED',
        
    }

    const menu__link = {
        textDecoration: 'none',
        fontFamily: 'var(--fontContent)',
        fontSize: '18px',
        fontWeight: '500',
        color: '#333',
    }

    return (
        <nav className="nav__container">
            <ul className="nav__link">
                <NavLink style={menu__link} exact activeStyle={active} to="/">
                    <li>All</li>
                </NavLink>
                <NavLink style={menu__link} activeStyle={active} to="/active">
                    <li>Active</li>
                </NavLink>
                <NavLink style={menu__link} activeStyle={active} to="/completed">
                    <li>Completed</li>
                </NavLink>
            </ul>
            <hr></hr>
        </nav>
    )
}

export default Nav
