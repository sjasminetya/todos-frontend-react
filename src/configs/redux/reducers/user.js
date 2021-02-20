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
    }
}

const userReducer = (state = initialStateData, action) => {
    if (action.type === 'LOGIN') {
        console.log('login', action.payload.data)
        return {
            ...state,
            login: action.payload.data,
            userLogin: action.payload.get
        }
    } else {
        return state
    }
}

export default userReducer