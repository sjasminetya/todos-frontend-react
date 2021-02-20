import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar({onClick, username, logout}) {
    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <h4>Todos</h4>
                </div>

                <div className={styles.item}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <h4>{username}</h4>
                        </li>
                        <li className="nav-item">
                            <h4>{logout}</h4>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
