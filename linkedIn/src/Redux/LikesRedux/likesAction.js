import Axios from 'axios'
import {POST_LIKES_FAILURE, POST_LIKES_REQUEST, POST_LIKES_SUCCESS} from './actionTypes'

export const postLikesRequest = (payload)=>({
    type: POST_LIKES_REQUEST,
    payload
})

export const postLikesSuccess = (payload)=>({
    type: POST_LIKES_SUCCESS,
    payload
})

export const postLikesFailure = (payload)=>({
    type: POST_LIKES_FAILURE,
    payload
})

export const postLikesData = (payload)=>(dispatch)=>{
    let {id, username, postId, postLikes} = payload
    let obj = postLikes.find(like=>like.user_id == id)
    if(obj){
        postLikes = postLikes.filter(like=>like.user_id!=id)
    }
    else{
        postLikes = [...postLikes, {user_id:id, username: username}]
    }
    console.log(payload)
    dispatch(postLikesRequest(payload))
    return Axios.patch('https://json-server-mocker-vinod.herokuapp.com/posts/'+postId,{
        likes: postLikes
    })
    .then(res=>res.data)
    .then(res=>dispatch(postLikesSuccess(res)))
    .catch(err=>dispatch(postLikesFailure(err)))
}