import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './Task.module.css'
import Input from '../../component/base/Input/Input'
import Navbar from '../../component/module/NavbarComponent'
import {BackComponent} from '../../component/module/BackComponent'
import {useDispatch, useSelector} from 'react-redux'
import {getLabelById, getTaskByLabel, addTask, deleteTask} from '../../configs/redux/actions'
import { Container, Toast, ToastHeader, ToastBody, Button } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEdit,
    faTrash,
    faPlus
} from "@fortawesome/free-solid-svg-icons"

export default function Task(props) {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const labelState = useSelector(state => state.label.labelById)
    const taskState = useSelector(state => state.task.taskByLabel)
    const {id} = props.match.params
    const history = useHistory()

    const goEditTask = (id) => {
        history.push('/task/edit/' + id)
    }

    const handleChangeTask = (task) => {
        setTask(task)
    }

    const handleAddTask = (event) => {
        event.preventDefault()
        const data = {
            labelId: id,
            task
        }
        dispatch(addTask(data))
        setTask('')
    }

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id))
    }

    useEffect(() => {
        dispatch(getLabelById(id))
        dispatch(getTaskByLabel())
    }, [])

    return (
        <div>
            <Navbar />
            <Container>
                <BackComponent />
                <div className="p-3 bg-dark my-2 mt-5 rounded" style={{width: '520px', margin: 'auto', display: 'flex'}}>
                    <Input value={task} type='text' id='task' placeholder='type task' onChange={handleChangeTask} />
                    <Button onClick={handleAddTask} className="mr-2 mt-4" style={{width: 'max-content'}}>
                        <FontAwesomeIcon icon={faPlus} /> Add New Task
                    </Button>
                </div>
                <div className="p-3 bg-dark my-2 mt-3 rounded" style={{width: 'max-content', margin: 'auto'}}>
                <Toast>
                    <ToastHeader icon="danger">
                        {labelState.label}
                    </ToastHeader>
                </Toast>
                {taskState.map((item) => (
                    item.userId === localStorage.id && item.labelId === id ? (
                        <div style={{display: 'flex'}}>
                            <Toast key={item.id} style={{cursor: 'pointer'}}>
                                <ToastBody style={{fontWeight: 'bold'}}>
                                    {item.task}
                                </ToastBody>
                            </Toast>
                            <Button color="info" className="mr-2 mt-2" onClick={() => goEditTask(item.id)}>
                                <FontAwesomeIcon icon={faEdit} /> Edit
                            </Button>
                            <Button color="info" style={{width: '120px'}} className="mr-2 mt-2" onClick={() => handleDeleteTask(item.id)}>
                                <FontAwesomeIcon icon={faTrash} /> Delete
                            </Button>
                        </div>
                    ) : null
                ))}
                </div>
            </Container>
        </div>
    )
}
