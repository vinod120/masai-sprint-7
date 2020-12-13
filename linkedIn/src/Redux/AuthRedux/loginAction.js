import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './actionTypes';
import axios from 'axios'

export const loginRequest = (payload)=>({
    type: LOGIN_REQUEST,
    payload
})

export const loginSuccess = (payload)=>({
    type: LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload)=>({
    type: LOGIN_FAILURE,
    payload
})

export const userLogin = (payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(loginRequest(payload))
    return axios.get('https://json-server-mocker-vinod.herokuapp.com/users')
    .then(res=>res.data)
    .then(res=>{
        let loggedUser = res.find(item=>item.username==payload.username)
        console.log(loggedUser)
        if(loggedUser.password == payload.password){
            return dispatch(loginSuccess({data:loggedUser}))
        }
    })
    .catch(err=>dispatch(loginFailure(err)))
}