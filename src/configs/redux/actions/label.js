import axios from 'axios'

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