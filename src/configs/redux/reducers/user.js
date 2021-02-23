import isEmpty from 'lodash/isEmpty'

const initialStateData = {
    auth: {
        username: '',
        password: ''
    },
    userLogin: {
        username: 'username',
        id: 'id',
        role: 'role',
        name: 'name'
    },
    isAuthenticated: false
}

const userReducer = (state = initialStateData, action) => {
    if (action.type === 'LOGIN') {
        return {
            ...state,
            auth: action.payload.data
        }
    } else if (action.type === 'GET_USER_LOGIN') {
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            userLogin: action.payload
        }
    } else if (action.type === 'REGISTER') {
        console.log('register', action.payload.data)
        return {
            ...state,
            auth: action.payload.data
        }
    } else if (action.type === 'LOGOUT') {
        return {
            ...state,
            userLogin: {},
            isAuthenticated: false
        }
    } else {
        return state
    }
}

export default userReducer