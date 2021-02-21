import axios from 'axios'
import Swal from 'sweetalert2'

export const getTaskByIdUser = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_BACKEND}/users/task/${localStorage.id}`)
    .then(res => {
        console.log('task by id', res)
        dispatch({type: 'GET_TASK_BY_ID_USER', payload: res.data.result})
    })
}

export const addTask = (data) => (dispatch) => {
    axios.post(`${process.env.REACT_APP_BACKEND}/task/add-task`, data)
    .then(res => {
        console.log('add task', res)
        if (res.data.result.message === 'Success add task') {
            dispatch({type: 'ADD_TASK', payload: {data}})
            dispatch(getTaskByIdUser())
            Swal.fire({
                icon: 'success',
                title: 'Success add task',
                showConfirmButton: false,
                timer: 2000
            })
        }
    })
    .catch(err => {
        console.log(err.response)
    })
}

export const deleteTask = (id) => (dispatch) => {
    axios.delete(`${process.env.REACT_APP_BACKEND}/task/${id}`)
    .then(res => {
        console.log('delete task', res)
        if (res.data.result.message === 'success delete task') {
            dispatch({type: 'DELETE_TASK', payload: res.data.result})
            dispatch(getTaskByIdUser())
            Swal.fire({
                icon: 'success',
                title: 'Success delete task',
                showConfirmButton: false,
                timer: 2000
            })
        }
    })
    .catch(err => {
        console.log(err.response)
    })
}