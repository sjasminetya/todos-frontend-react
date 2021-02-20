import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styles from './Task.module.css'
import Input from '../component/base/Input/Input'
import Button from '../component/base/Button/Button'
import Navbar from '../component/module/Navbar/Navbar'
import {useDispatch, useSelector} from 'react-redux'
import {getLabelById} from '../configs/redux/actions'

export default function Task(props) {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const labelState = useSelector(state => state.label.labelById)
    const history = useHistory()
    const goHome = () => {
        history.push('/home')
    }

    const handleChangeTask = (task) => {
        setTask(task)
    }

    useEffect(() => {
        const {id} = props.match.params
        console.log(props)
        console.log(id)
        dispatch(getLabelById(id))
    }, [])

    return (
        <div>
            <Navbar />
            <span onClick={goHome} className={styles.home}>go Home</span>
            <div className={styles.task}>
                <div className={styles.text}>
                    <h4>{labelState.label}</h4>
                </div>
                <form>
                    <Input value={task} className={styles['input-task']} type='text' id='task' placeholder='type task' onChange={handleChangeTask} />
                    <Button title='Add' />
                </form>
                <div className={styles['list-task']}>
                    <div className={styles['card-task']}>
                        <span>Belajar Matematika</span>
                        <div className={styles['group-btn']}>
                            <Button title='Edit' />
                            <Button title='Delete' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
