import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Input from '../../component/base/Input/Input'
import Navbar from '../../component/module/NavbarComponent'
import {useDispatch, useSelector} from 'react-redux'
import {getTaskById, UpdateTask} from '../../configs/redux/actions'
import { Container, Button } from 'reactstrap'
import {BackComponent} from '../../component/module/BackComponent'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEdit,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons"

export default function EditTask(props) {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const taskState = useSelector(state => state.task.taskById)
    const {id} = props.match.params
    const history = useHistory()

    const handleChangeTask = (task) => {
        setTask(task)
    }

    const goBack = () => {
        history.goBack()
    }

    const handleEditTask = (event) => {
        event.preventDefault()
        const data = {
            task
        }
        dispatch(UpdateTask(id, data))
        history.goBack()
    }

    useEffect(() => {
        dispatch(getTaskById(id))
    }, [])

    return (
        <div>
            <Navbar />
            <Container>
                <Button color="dark" style={{width: 'max-content'}} onClick={goBack}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </Button>
                <div className="p-3 bg-dark my-2 mt-5 rounded" style={{width: '520px', margin: 'auto'}}>
                    <h4 style={{color: '#FFFFFF', paddingLeft: '20px'}}>Edit Task {taskState.task}</h4>
                    <div style={{display: 'flex'}}>
                        <Input value={task} type='text' id='task' placeholder='type task' onChange={handleChangeTask} />
                        <Button onClick={handleEditTask} className="mr-2 mt-4" style={{width: 'max-content'}}>
                            <FontAwesomeIcon icon={faEdit} /> Edit Task
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
