import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from './actionTypes'


const initState = {
    isLoading: false,
    error: false,
    isAuth: false,
}

const registerReducer = (state=initState, {type, payload})=>{
    switch (type) {
        case REGISTER_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                isLoading: false,
            }
        case REGISTER_FAILURE:
            return{
                ...state,
                error: 'something went wrong'
            }

        default:
            return state
    }
}

export default registerReducer;