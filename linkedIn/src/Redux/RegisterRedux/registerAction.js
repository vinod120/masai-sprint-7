import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from './actionTypes';
import axios from 'axios'

export const registerRequest = (payload)=>({
    type: REGISTER_REQUEST,
    payload
})

export const registerSuccess = (payload)=>({
    type: REGISTER_SUCCESS,
    payload
})

export const registerFailure = (payload)=>({
    type: REGISTER_FAILURE,
    payload
})

export const postRegister = (payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(registerRequest(payload))
    return axios.post('https://json-server-mocker-vinod.herokuapp.com/users', payload)
    .then(res=>res.data)
    .then(res=>dispatch(registerSuccess(res)))
    .catch(err=>dispatch(registerFailure(err)))

}