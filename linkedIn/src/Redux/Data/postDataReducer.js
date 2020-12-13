import { POST_FAILURE, POST_REQUEST, POST_SUCCESS } from './actionTypes'

const initState = {
    isLoading: false,
    error: false,
}

const postReducer = (state=initState, {type, payload})=>{
    switch (type) {
        case POST_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case POST_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case POST_FAILURE:
            return{
                ...state,
                error: 'something went wrong',
                isLoading: true,
            }
    
        default:
            return state;
    }
}
export default postReducer