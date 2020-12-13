import React, { Component } from 'react'
import { connect } from 'react-redux';
import { postCommentsData } from '../Redux/Comments/commentAction';
import { getAllPosts } from '../Redux/Data/getDataAction';
import { postLikesData } from '../Redux/LikesRedux/likesAction';
import CommentsDisplay from './CommentsDisplay';
import LikesDisplay from './LikesDisplay';
import styles from './SinglePosts.module.css';
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
            status: false,
            likeToggle:false
        }
    }
    
    handleChange = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLike = (postId, postLikes)=>{
        const {userData, postLikesData, getAllPosts} = this.props
        const {id, username} = userData
        postLikesData({id, username, postId, postLikes})
        getAllPosts()
        
    }
    handleComment = (postId, postComments)=>{
        const {userData, postCommentsData, getAllPosts} = this.props
        const {username} = userData
        const {commentText} = this.state
        postCommentsData({username, postId, postComments, commentText})
        
        this.setState({
            status: !this.state.status
        })
        getAllPosts()
        
    }
    toggleCommentButton = ()=>{
        this.setState({
            status: !this.state.status
        })

    }
    handleLikes = (AllLikes)=>{
        console.log(AllLikes, "all likes")
        this.setState({
            likeToggle: !this.state.likeToggle
        })
    }
    render() {
        const {post, userData} = this.props
        const {avatar_url}= userData
        const {commentText, status, likeToggle} = this.state
        console.log(post, "single post data here")
        let obj = post.likes.find(like=>like.user_id == userData.id)
        return (
            <>
                <div>
                    <div  style={{margin:'10px 10px', padding:10}} className={styles.sharePost}>
                        <div className={styles.postHeading}>
                            <div>
                                <img src={post.author_image} alt="author" width="80px" height="80px" style={{borderRadius:'50%', marginRight:10}}/>
                            </div>
                            <div style={{display:'grid', marginLeft:5, textAlign:'left'}}>
                                <div> 
                                    <span style={{fontWeight:600}}>{post.author_title}</span>
                                </div>
                                <div style={{fontSize:12}}>
                                    12452 followers
                                </div>
                                <div style={{fontSize:12}}>
                                    Promoted
                                </div>
                            </div>
                        </div>
                        <br />
                        <div style={{textAlign:'left'}}>
                            {post.body}
                        </div>
                        <div>
                            <img src={post.post_image} alt="nothing" width="80%"/>
                        </div>
                        <div style={{textAlign:"left", alignItems:'left', alignContent:'left'}} className={styles.likes}>
                            {
                                likeToggle ? 
                                <div>
                                        {
                                            post.likes && post.likes.map(item=>{
                                                return <LikesDisplay like={item}/>
                                            })
                                        }
                                </div>
                                :
                                null
                            }
                        <span onClick={()=>this.handleLikes(post.likes)} >{post.likes.length} likes</span> • <span>{post.comments.length} comments</span>
                        </div>
                        <div style={{borderBottom:'1px solid #84878a', marginTop:10, marginBottom:10}}></div>
                        <div className={styles.interActive}>
                            <div style={{marginRight:10, marginLeft:10}}>
                            <div className={styles.Events}><span onClick={()=>this.handleLike(post.id, post.likes)} style={{color:obj?'#64b5f6':null, cursor:'pointer', marginRight:10}}><FontAwesomeIcon icon={faThumbsUp} /></span><span>Like</span></div>               
                            </div>
                            <div style={{marginRight:10}}> 
                                <div className={styles.Events}><span onClick={this.toggleCommentButton} style={{cursor:'pointer', marginRight:10}}><FontAwesomeIcon icon={faCommentAlt} /></span><span>Comments</span></div>
                                {
                                    status ? <div>
                                        <input type="text" name="commentText" onChange={this.handleChange} value={commentText} />
                                        <div className={styles.Events}><span onClick={()=>this.handleComment(post.id, post.comments)} style={{color:'#76ff03', cursor:'pointer', marginRight:10}}><FontAwesomeIcon icon={faCommentAlt} /></span><span>Submit</span></div>
                                        <div>
                                            {
                                                post.comments && post.comments.map(item=>{
                                                    return <CommentsDisplay comment ={item} image_url = {avatar_url}/>
                                                })
                                            }
                                        </div>
                                        </div> 
                                        : 
                                        null
                                }
                            </div>
                            <div className={styles.Events}><span style={{cursor:'pointer', marginRight:10}}><FontAwesomeIcon icon={faShareAlt} /></span><span>Share</span></div>
                            <div className={styles.Events}><span style={{cursor:'pointer', marginRight:10, marginLeft:10}}><FontAwesomeIcon icon={faPaperPlane} /></span><span>Send</span></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state)=>({
    userData: state.login.data,
})
const mapDispatchToProps = (dispatch)=>({
    postLikesData: (payload)=>(dispatch(postLikesData(payload))),
    getAllPosts: (payload)=>(dispatch(getAllPosts(payload))),
    postCommentsData: (payload)=>(dispatch(postCommentsData(payload)))


})
export default connect(mapStateToProps, mapDispatchToProps)(SinglePost)