import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styles from './Task.module.css'
import Input from '../../component/base/Input/Input'
import Button from '../../component/base/Button/Button'
import Navbar from '../../component/module/Navbar/Navbar'
import {useDispatch, useSelector} from 'react-redux'
import {getTaskById, UpdateTask} from '../../configs/redux/actions'

export default function EditTask(props) {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const taskState = useSelector(state => state.task.taskById)
    const {id} = props.match.params
    const history = useHistory()
    const goHome = () => {
        history.push('/home')
    }

    const handleChangeTask = (task) => {
        setTask(task)
    }

    const handleEditTask = (event) => {
        event.preventDefault()
        const data = {
            task
        }
        dispatch(UpdateTask(id, data))
        history.push('/home')
    }

    useEffect(() => {
        dispatch(getTaskById(id))
    }, [])

    return (
        <div>
            <Navbar />
            <span onClick={goHome} className={styles.home}>go Home</span>
            <div className={styles.task}>
                <div className={styles.text}>
                    <h4>Edit Task {taskState.task}</h4>
                </div>
                <form>
                    <Input value={task} className={styles['input-task']} type='text' id='task' placeholder='type task' onChange={handleChangeTask} />
                    <Button title='Edit' onClick={handleEditTask} />
                </form>
            </div>
        </div>
    )
}
