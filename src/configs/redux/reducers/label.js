const initialStateData = {
    listLabel: [{
        id: 'id',
        label: 'label',
        desc: 'label'
    }],
    id: '',
    label: '',
    labelById: [{
        id: 'id',
        label: 'label',
        desc: 'label'
    }]
}

const labelReducer = (state = initialStateData, action) => {
    if (action.type === 'GET_ALL_LABEL') {
        console.log(action.payload)
        return {
            ...state,
            listLabel: action.payload
        }
    } else if (action.type === 'GET_LABEL_BY_ID') {
        return {
            ...state,
            labelById: action.payload,
            id: action.payload.id
        }
    } else if (action.type === 'ADD_LABEL') {
        return {
            ...state,
            label: action.payload.data
        }
    } else if (action.type === 'DELETE_LABEL') {
        return {
            ...state,
            id: action.payload.id
        }
    } else if (action.type === 'UPDATE_LABEL') {
        return {
            ...state,
            label: action.payload.data
        }
    } else {
        return state
    }
}

export default labelReducer