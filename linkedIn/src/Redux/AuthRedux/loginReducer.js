import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionTypes'

const initState = {
    isLoading: false,
    error: false,
    isAuth: false,
    data:[]
}

const loginReducer = (state=initState, {type, payload})=>{
    switch (type) {
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: payload.data,
                isAuth: true
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                error: 'something went wrong',
                isLoading: true,
                isAuth: false
            }
    
        default:
            return state;
    }
}
export default loginReducer