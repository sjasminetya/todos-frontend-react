import React, {useState} from 'react'
import styles from './Register.module.css';
import Input from '../../component/base/Input/Input'
import Button from '../../component/base/Button/Button'
import {useDispatch} from 'react-redux'
import {login} from '../../configs/redux/actions'
import {useHistory, Link} from 'react-router-dom'

export default function Register() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChangeName = (name) => {
        setName(name)
    }
    
    const handleChangeUsername = (username) => {
        setUsername(username)
    }

    const handleChangePassword = (password) => {
        setPassword(password)
    }

    const handleClick = (event) => {
        event.preventDefault()
        const data = {
            name,
            username,
            password
        }
        dispatch(login(data))
        history.push('/home')
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles['todos-login']}>
                            <h4>Todos Register</h4> 
                            <form>
                                <Input value={name} type='text' id='name' label='Name:' placeholder='type name' onChange={handleChangeName} />
                                <Input value={username} type='text' id='username' label='Username:' placeholder='type username' onChange={handleChangeUsername} />
                                <Input value={password} type='password' id='password' label='Password:' placeholder='type password' onChange={handleChangePassword} />
                                <Button title='Register' onClick={handleClick} />
                                <h6>Have account? <Link to="/login">Login</Link></h6>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
