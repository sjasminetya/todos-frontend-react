import React, {useState} from 'react'
import styles from './App.module.css';
import Input from './component/base/Input/Input'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleChangeUsername = (username) => {
    console.log(username)
    setUsername(username)
  }

  const handleChangePassword = (password) => {
    console.log(password)
    setPassword(password)
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
