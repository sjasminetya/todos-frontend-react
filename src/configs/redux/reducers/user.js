import isEmpty from 'lodash/isEmpty'

const initialStateData = {
    login: {
        username: '',
        password: ''
    },
    userLogin: {
        username: '',
        token: '',
        id: '',
        role: '',
        name: ''
    },
    isAuthenticated: false
}

const userReducer = (state = initialStateData, action) => {
    if (action.type === 'LOGIN') {
        console.log('login', action.payload.data)
        return {
            ...state,
            login: action.payload.data
        }
    } else if (action.type === 'GET_USER_LOGIN') {
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            userLogin: action.payload
        }
    } else {
        return state
    }
}

export default userReducer