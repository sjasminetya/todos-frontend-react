import axios from 'axios'
import Swal from 'sweetalert2'

export const getAllLabel = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_BACKEND}/label`)
    .then(res => {
        console.log('label', res)
        dispatch({type: 'GET_ALL_LABEL', payload: res.data.result})
    })
}

export const getLabelById = (id) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_BACKEND}/label/${id}`)
    .then(res => {
        console.log('label by id', res)
        dispatch({type: 'GET_LABEL_BY_ID', payload: res.data.result[0]})
    })
}

export const addLabel = (data) => (dispatch) => {
    axios.post(`${process.env.REACT_APP_BACKEND}/label/admin/add-label`, data)
    .then(res => {
        console.log('add label', res)
        dispatch({type: 'ADD_LABEL', payload: {data}})
        dispatch(getAllLabel())
            Swal.fire({
                icon: 'success',
                title: 'Success add label',
                showConfirmButton: false,
                timer: 2000
            })
    })
}

export const deleteLabel = (id) => (dispatch) => {
    axios.delete(`${process.env.REACT_APP_BACKEND}/label/${id}`)
    .then(res => {
        dispatch({type: 'DELETE_LABEL', payload: res.data.result})
        dispatch(getAllLabel())
            Swal.fire({
                icon: 'success',
                title: 'Success delete label',
                showConfirmButton: false,
                timer: 2000
            })
    })
}