import React, {useEffect, useState} from 'react'
import styles from './Admin.module.css'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getAllLabel, addLabel, deleteLabel} from '../../configs/redux/actions'
import Input from '../../component/base/Input/Input'
import Button from '../../component/base/Button/Button'

export default function Admin() {
    const [label, setLabel] = useState('')
    const dispatch = useDispatch()
    const labelState = useSelector(state => state.label.listLabel)
    const history = useHistory()

    const goTask = (id) => {
        history.push('/task/' + id)
    }

    const goEditLabel = (id) => {
        history.push('/label/edit/' + id)
    }

    const handleChangeLabel = (label) => {
        setLabel(label)
    }

    const handleAddLabel = (event) => {
        event.preventDefault()
        const data = {
            label,
            desc: label
        }
        dispatch(addLabel(data))
        setLabel('')
    }

    const handleDeleteLabel = (id) => {
        dispatch(deleteLabel(id))
    }
    
    useEffect(() => {
        dispatch(getAllLabel())
    }, [])

    return (
        <div>
            <section>
                <div className={styles.label}>
                    <div className={styles.text}>
                        <h4>Add label</h4>
                    </div>
                    <form>
                        <Input value={label} className={styles['input-label']} type='text' id='label' placeholder='add label' onChange={handleChangeLabel} />
                        <Button title='Add' onClick={handleAddLabel} />
                    </form>
                    {labelState.map((item) => (
                        <div className={styles['item-label']}>
                            <div className={styles['card-label']} key={item.id} onClick={() => goTask(item.id)}>
                                <span>{item.label}</span>
                            </div>
                            <div className={styles['group-btn']}>
                                <Button title='Edit' onClick={() => goEditLabel(item.id)} />
                                <Button title='Delete' onClick={() => handleDeleteLabel(item.id)} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
