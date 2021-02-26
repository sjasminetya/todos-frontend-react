import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styles from './EditLabel.module.css'
import Input from '../../../component/base/Input/Input'
import Button from '../../../component/base/Button/Button'
import Navbar from '../../../component/module/NavbarComponent'
import {useDispatch, useSelector} from 'react-redux'
import {getLabelById, updateLabel} from '../../../configs/redux/actions'

export default function EditLabel(props) {
    const [label, setLabel] = useState('')
    const dispatch = useDispatch()
    const labelState = useSelector(state => state.label.labelById)
    const {id} = props.match.params
    const history = useHistory()
    const goHome = () => {
        history.push('/home')
    }

    const handleChangeLabel = (label) => {
        setLabel(label)
    }

    const handleEditLabel = (event) => {
        event.preventDefault()
        const data = {
            label
        }
        dispatch(updateLabel(id, data))
        history.push('/home')
    }

    useEffect(() => {
        dispatch(getLabelById(id))
    }, [])

    return (
        <div>
            <Navbar />
            <span onClick={goHome} className={styles.home}>go Home</span>
            <div className={styles.task}>
                <div className={styles.text}>
                    <h4>Edit label {labelState.label}</h4>
                </div>
                <form>
                    <Input value={label} className={styles['input-task']} type='text' id='task' placeholder='edit label' onChange={handleChangeLabel} />
                    <Button title='Edit' onClick={handleEditLabel} />
                </form>
            </div>
        </div>
    )
}
