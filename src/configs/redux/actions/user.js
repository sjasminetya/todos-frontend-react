import axios from 'axios'
import Swal from 'sweetalert2'
import setAuthorization from '../utils/setAuthorization'

export const login = (data) => (dispatch) => {
    axios.post(`${process.env.REACT_APP_BACKEND}/users/login`, data)
    .then((res) => {
        const get = res.data.result
        const token = res.data.result.token
        const id = res.data.result.id
        localStorage.setItem('id', id)
        localStorage.setItem('token', token)
        setAuthorization(token)
        if (res.data.status === 'success') {
            dispatch({type: 'LOGIN', payload: {data, get}})
            Swal.fire({
                icon: 'success',
                title: 'Login success',
                showConfirmButton: false,
                timer: 2000
            })
        }
    })
    .catch(err => {
        if (err.response.err.error === "Login failed, wrong password") {
            Swal.fire({
                icon: 'error',
                title: 'Login failed, wrong password',
                showConfirmButton: false,
                timer: 2000
            })
        }
    })
}

export const userLogin = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_BACKEND}/users/${localStorage.id}`)
    .then(res => {
        console.log('user login', res)
        dispatch({type: 'GET_USER_LOGIN', payload: res.data.result[0]})
    })
    .catch(err => {
        console.log(err.response)
    })
}