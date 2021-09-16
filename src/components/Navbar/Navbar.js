import React from 'react'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav className="navbar">
            <span><FontAwesomeIcon icon={faCity} /></span>
            <p>Japan Tour</p>
            <ul className="nav-links">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/" className="nav-link">About</a></li>
                <li><a href="/" className="nav-link active">Tours</a></li>
            </ul>
        </nav>
    )
}
