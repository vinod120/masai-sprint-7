import {POST_COMMENTS_FAILURE, POST_COMMENTS_REQUEST, POST_COMMENTS_SUCCESS} from './actionTypes'
import Axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
export const postCommentsRequest = (payload)=>({
    type: POST_COMMENTS_REQUEST,
    payload
})

export const postCommentsSuccess = (payload)=>({
    type: POST_COMMENTS_SUCCESS,
    payload
})

export const postCommentsFailure = (payload)=>({
    type: POST_COMMENTS_FAILURE,
    payload
})

export const postCommentsData = (payload)=>(dispatch)=>{
    let {username, postId, postComments, commentText} = payload
 
        postComments = [...postComments, {id:uuidv4(), comment_body:commentText, timeStamp: Date.now(), comment_author: username}]
    console.log(payload)
    dispatch(postCommentsRequest(payload))
    return Axios.patch('https://json-server-mocker-vinod.herokuapp.com/posts/'+postId,{
        comments: postComments
    })
    .then(res=>res.data)
    .then(res=>dispatch(postCommentsSuccess(res)))
    .catch(err=>dispatch(postCommentsFailure(err)))
}
