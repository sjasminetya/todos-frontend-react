import React, {useEffect} from 'react'
import styles from './Home.module.css'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAllLabel} from '../configs/redux/actions'
import Navbar from '../component/module/Navbar/Navbar'

export default function Home() {
    const dispatch = useDispatch()
    const labelState = useSelector(state => state.label.listLabel)
    const history = useHistory()

    const goTask = (id) => {
        history.push('/task/' + id)
    }
    
    useEffect(() => {
        dispatch(getAllLabel())
    }, [])
    
    return (
        <div>
            <Navbar />
            <main>
                <div className={styles.label}>
                    <div className={styles.text}>
                        <h4>List of label</h4>
                    </div>
                    {labelState.map((item) => (
                        <div className={styles['card-label']} key={item.id} onClick={() => goTask(item.id)}>
                            <h4>{item.label}</h4>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
