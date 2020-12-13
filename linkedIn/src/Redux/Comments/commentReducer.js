import {POST_COMMENTS_FAILURE, POST_COMMENTS_REQUEST, POST_COMMENTS_SUCCESS} from './actionTypes'

export const initState = {
    isLoading: false,
    error: false,
}

const commentReducer = (state=initState, {type, payload})=>{
    switch (type) {
        case POST_COMMENTS_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case POST_COMMENTS_SUCCESS:
            return{
                ...state,
                isLoading: false
            }
        case POST_COMMENTS_FAILURE:
            return{
                ...state,
                isLoading: true,
                error: true
            }
    
        default:
            return state
    }
}

export default commentReducer
