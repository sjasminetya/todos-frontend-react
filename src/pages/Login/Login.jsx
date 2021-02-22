import React, {useState} from 'react'
import styles from './Login.module.css';
import Input from '../../component/base/Input/Input'
import Button from '../../component/base/Button/Button'
import {useDispatch} from 'react-redux'
import {login} from '../../configs/redux/actions'
import {useHistory} from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  
  const handleChangeUsername = (username) => {
    setUsername(username)
  }

  const handleChangePassword = (password) => {
    setPassword(password)
  }

  const handleClick = (event) => {
    event.preventDefault()
    const data = {
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
              <h4>Todos Login</h4> 
              <form>
                <Input value={username} type='text' id='username' label='Username:' placeholder='type username' onChange={handleChangeUsername} />
                <Input value={password} type='password' id='password' label='Password:' placeholder='type password' onChange={handleChangePassword} />
                <Button title='Login' onClick={handleClick} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
