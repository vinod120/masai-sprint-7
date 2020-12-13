import {GET_POST_DATA_REQUEST, GET_POST_DATA_SUCCESS, GET_POST_DATA_FAILURE } from './actionTypes'

const initState = {
    isLoading: false,
    error: false,
    data: []
}

const getDataReducer = (state=initState, {type, payload})=>{
    switch (type) {
        case GET_POST_DATA_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case GET_POST_DATA_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: payload.data
            }
        case GET_POST_DATA_FAILURE:
            return{
                ...state,
                error: 'something went wrong',
                isLoading: true,
            }
    
        default:
            return state;
    }
}
export default getDataReducer