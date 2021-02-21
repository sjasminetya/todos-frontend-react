const initialStateData = {
    taskById: [{
        id: 'id',
        labelId: 'label',
        task: 'task',
        completed: 2
    }],
    taskByLabel: [{
        id: 'id',
        labelId: 'label',
        task: 'task',
        completed: 2
    }],
    addTask: [{
        labelId: '',
        task: 'task'
    }],
    id: '',
    task: ''
}

const taskReducer = (state = initialStateData, action) => {
    if (action.type === 'GET_TASK_BY_LABEL') {
        return {
            ...state,
            taskByLabel: action.payload
        }
    } else if (action.type === 'ADD_TASK') {
        return {
            ...state,
            addTask: action.payload.data
        }
    } else if (action.type === 'DELETE_TASK') {
        return {
            ...state,
            id: action.payload.id
        }
    } else if (action.type === 'GET_TASK_BY_ID') {
        return {
            ...state,
            taskById: action.payload
        }
    } else if (action.type === 'UPDATE_TASK') {
        return {
            ...state,
            task: action.payload.data
        }
    } else {
        return state
    }
}

export default taskReducer