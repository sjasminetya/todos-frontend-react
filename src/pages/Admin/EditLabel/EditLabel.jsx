import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Input from '../../../component/base/Input/Input'
import Navbar from '../../../component/module/NavbarComponent'
import {useDispatch, useSelector} from 'react-redux'
import {getLabelById, updateLabel} from '../../../configs/redux/actions'
import { Container, Button } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEdit,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons"
import './EditLabel.module.css'

export default function EditLabel(props) {
    const [label, setLabel] = useState('')
    const dispatch = useDispatch()
    const labelState = useSelector(state => state.label.labelById)
    const {id} = props.match.params
    const history = useHistory()

    const goBack = () => {
        history.goBack()
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
            <Container>
                <Button color="dark" style={{width: 'max-content'}} onClick={goBack}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </Button>
                <div className="p-3 bg-dark my-2 mt-5 rounded" style={{width: '480px', margin: 'auto'}}>
                    <h4 style={{color: '#FFFFFF', paddingLeft: '20px'}}>Edit label {labelState.label}</h4>
                    <div style={{display: 'flex'}}>
                        <Input value={label} type='text' id='label' placeholder='type label' onChange={handleChangeLabel} />
                        <Button onClick={handleEditLabel} className="mr-2 mt-4" style={{width: 'max-content'}}>
                            <FontAwesomeIcon icon={faEdit} /> Edit Label
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
