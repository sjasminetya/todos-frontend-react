import React, {useEffect} from 'react'
import styles from './Home.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {userLogin} from '../configs/redux/actions'

export default function Home() {

    const dispatch = useDispatch()
    const userState = useSelector(state => state.user.userLogin)
    console.log(userState)
    useEffect(() => {
        dispatch(userLogin())
    }, [])
    
    return (
        <div>
            <nav className={styles.nav}>
                <div className="container">
                    <h4 style={{fontSize: "34px"}}>Todos</h4>
                </div>

                <div className={styles.item}>
                    <ul className={styles['navbar-nav']}>
                        <li className={styles['nav-item']}>
                            <h4>{userState.username}</h4>
                        </li>
                        <li className={styles['nav-item']}>
                            <h4>logout</h4>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
