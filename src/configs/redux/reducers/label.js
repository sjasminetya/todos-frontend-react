const initialStateData = {
    listLabel: [{
        id: 'id',
        label: 'label',
        desc: 'label'
    }],
    id: '',
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
    } else {
        return state
    }
}

export default labelReducer