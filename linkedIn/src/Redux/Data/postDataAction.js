import { POST_FAILURE, POST_REQUEST, POST_SUCCESS } from './actionTypes';
import axios from 'axios'

export const postRequest = (payload)=>({
    type: POST_REQUEST,
    payload
})

export const postSuccess = (payload)=>({
    type: POST_SUCCESS,
    payload
})

export const postFailure = (payload)=>({
    type: POST_FAILURE,
    payload
})

export const postData = (payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(postRequest(payload))
    return axios.post('https://json-server-mocker-vinod.herokuapp.com/posts', payload)
    .then(res=>res.data)
    .then(res=>dispatch(postSuccess(res)))
    .catch(err=>dispatch(postFailure(err)))

}