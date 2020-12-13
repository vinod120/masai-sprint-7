import {POST_LIKES_FAILURE, POST_LIKES_REQUEST, POST_LIKES_SUCCESS} from './actionTypes'

export const initState = {
    isLoading: false,
    error: false,
}

const likeReducer = (state=initState, {type, payload})=>{
    switch (type) {
        case POST_LIKES_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case POST_LIKES_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case POST_LIKES_FAILURE:
            return{
                ...state,
                isLoading: true,
                error: true
            }
    
        default:
            return state
    }
}

export default likeReducer