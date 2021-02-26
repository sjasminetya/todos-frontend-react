import React from 'react'
import {useHistory} from 'react-router-dom'
import Button from '../../component/base/Button/Button'
import styles from './Main.module.css'

export default function Main() {
    const history = useHistory()

    const goLogin = () => {
        history.push('/login')
    }

    const goRegister = () => {
        history.push('/register')
    }

    return (
        <div>
            <main className="text-center bg-dark">
                <h1>Welcome to Todos App</h1>
                <div className={styles['btn-group']}>
                    <Button title="Login" onClick={goLogin} className={styles.btn} />
                    <Button title="Register" onClick={goRegister} className={styles.btn} />
                </div>
            </main>
        </div>
    )
}
