import axios from 'axios'
import Swal from 'sweetalert2'

export const getTaskByLabel = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_BACKEND}/label/task/${localStorage.id}`)
    .then(res => {
        console.log('task by id', res)
        dispatch({type: 'GET_TASK_BY_LABEL', payload: res.data.result})
    })
}

export const addTask = (data) => (dispatch) => {
    axios.post(`${process.env.REACT_APP_BACKEND}/task/add-task`, data)
    .then(res => {
        console.log('add task', res)
        if (res.data.result.message === 'Success add task') {
            dispatch({type: 'ADD_TASK', payload: {data}})
            dispatch(getTaskByLabel())
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

export const getTaskById = (id) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_BACKEND}/task/${id}`)
    .then(res => {
        console.log('task by id', res)
        dispatch({type: 'GET_TASK_BY_ID', payload: res.data.result[0]})
    })
}

export const deleteTask = (id) => (dispatch) => {
    axios.delete(`${process.env.REACT_APP_BACKEND}/task/${id}`)
    .then(res => {
        console.log('delete task', res)
        if (res.data.result.message === 'success delete task') {
            dispatch({type: 'DELETE_TASK', payload: res.data.result})
            dispatch(getTaskByLabel())
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

export const UpdateTask = (id, data) => (dispatch) => {
    axios.patch(`${process.env.REACT_APP_BACKEND}/task/${id}`, data)
    .then(res => {
        console.log('update task', res)
        const message = res.data.result.message
        if (message === 'Success update task') {
            dispatch({type: 'UPDATE_TASK', payload: {data}})
            Swal.fire({
                icon: 'success',
                title: 'Success update task',
                showConfirmButton: false,
                timer: 2000
            })
        }
    })
    .catch(err => {
        console.log(err.response)
    })
}