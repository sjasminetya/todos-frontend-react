import axios from 'axios'
import Swal from 'sweetalert2'
import setAuthorization from '../utils/setAuthorization'

export const login = (data) => (dispatch) => {
    axios.post(`${process.env.REACT_APP_BACKEND}/users/login`, data)
    .then(async(res) => {
        console.log(res)
        const get = res.data.result
        const token = res.data.result.token
        const id = res.data.result.id
        localStorage.setItem('id', id)
        localStorage.setItem('token', token)
        setAuthorization(token)
        if (res.data.status === 'success') {
            dispatch({type: 'LOGIN', payload: {data, get}})
            let timerInterval
            await Swal.fire({
                title: 'Hi, todos',
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                }, 100)
                },
                willClose: () => {
                clearInterval(timerInterval)
                }
            })
        } else if (res.data.err.error === "Login failed, wrong password") {
            Swal.fire({
                icon: 'error',
                title: 'Login failed, wrong password',
                showConfirmButton: false,
                timer: 2000
            })
        }
    })
    .catch(err => {
        if (err.response.data.err.error === "Login failed, wrong password") {
            Swal.fire({
                icon: 'error',
                title: 'Login failed, wrong password',
                showConfirmButton: false,
                timer: 2000
            })
        }
    })
}