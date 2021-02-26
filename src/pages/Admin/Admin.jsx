import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLabel, addLabel, deleteLabel } from '../../configs/redux/actions'
import Input from '../../component/base/Input/Input'
import { Toast, ToastBody, ToastHeader, Container, Spinner, Button } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEdit,
    faTrash,
    faPlus
} from "@fortawesome/free-solid-svg-icons"

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
    }, [dispatch])

    return (
        <div>
            <div className="p-3 bg-dark my-2 mt-5 rounded" style={{ width: '480px', margin: 'auto', display: 'flex' }}>
                <Input value={label} type='text' id='label' placeholder='type label' onChange={handleChangeLabel} />
                <Button onClick={handleAddLabel} className="mr-2 mt-4" style={{ width: 'max-content' }}>
                    <FontAwesomeIcon icon={faPlus} /> Add New Label
                </Button>
            </div>
            <Container>
                {labelState ? (
                    <div className="p-3 bg-dark my-2 mt-3 rounded" style={{ width: 'max-content', margin: 'auto' }}>
                        <h3 style={{ color: '#FFFFFF' }} className="text-center">List Label</h3>
                        {labelState.map((item) => (
                            <div style={{display: 'flex'}}>
                                <Toast key={item.id} onClick={() => goTask(item.id)} className="mt-3 mb-3 ml-5 mr-5" style={{ width: '220px', cursor: 'pointer' }}>
                                    {item.label === 'important' ? (
                                        <div>
                                            <ToastHeader icon="danger">
                                                {item.label}
                                            </ToastHeader>
                                            <ToastBody>
                                                {item.desc}
                                            </ToastBody>
                                        </div>
                                    ) : (
                                            <div>
                                                <ToastHeader icon="info">
                                                    {item.label}
                                                </ToastHeader>
                                                <ToastBody>
                                                    {item.desc}
                                                </ToastBody>
                                            </div>
                                        )}
                                </Toast>
                                <Button color="info" className="mt-4" onClick={() => goEditLabel(item.id)}>
                                    <FontAwesomeIcon icon={faEdit} /> Edit
                                </Button>
                                <Button color="info" style={{width: '120px'}} className="mt-4" onClick={() => handleDeleteLabel(item.id)}>
                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                </Button>
                            </div>
                        ))}
                    </div>
                ) : (
                        <div className="text-center p-3 bg-dark my-2 rounded" style={{width: '520px', margin: 'auto'}}>
                            <Spinner color="primary" />
                        </div>
                    )}
            </Container>
        </div>
    )
}
