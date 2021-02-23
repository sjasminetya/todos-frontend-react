import React, {useEffect} from 'react'
import styles from './Navbar.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {userLogin, logout} from '../../../configs/redux/actions'

export default function Navbar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const userState = useSelector(state => state.user.userLogin)

    const goLogout = (event) => {
        event.preventDefault()
        dispatch(logout())
        history.push('/login')
    }

    useEffect(() => {
        dispatch(userLogin())
    }, [])
    return (
        <div>
            <nav className={styles.nav}>
                <div className="container">
                    <h4 style={{fontSize: "34px"}}>Todos App</h4>
                </div>

                <div className={styles.item}>
                    <ul className={styles['navbar-nav']}>
                        <li className={styles['nav-item']}>
                            <h4>{userState.username}</h4>
                        </li>
                        <li className={styles['nav-item']} onClick={goLogout}>
                            <h4>logout</h4>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
