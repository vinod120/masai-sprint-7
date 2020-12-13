import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllPosts } from '../Redux/Data/getDataAction';
import { postData } from '../Redux/Data/postDataAction';
import SinglePost from './SinglePost';
import styles from './Profile.module.css';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            url: '',
            togglePostForm: false
        }
    }
   
    handleChange = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount(){
        const {getAllPosts} = this.props
        getAllPosts()
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const {title, body, url} = this.state
        const {data, userData} = this.props
        const {id, username, avatar_url} = userData
        console.log(data, "all post data")
        console.log(id, username, "user data logged")
        let payload = {
            author_id: id,
            author_name: username,
            author_image: avatar_url,
            post_image: url,
            author_title: title,
            body: body,
            comments: [],
            likes: []
        }
        const {postData, getAllPosts} = this.props
        postData(payload)
        getAllPosts()
        this.setState({
            togglePostForm: !this.state.togglePostForm
        })
    }
    handlePostForm = ()=>{
        this.setState({
            togglePostForm: !this.state.togglePostForm
        })
        getAllPosts()
    }
    render() {
        const {title, body, url, togglePostForm} = this.state
        const {data} = this.props
        console.log(data, "all data")
                return (
                    <>
                        
                            <div className={styles.sharePost}>
                                <div style={{padding:10, display:'flex', borderBottom: '1px solid #84878a'}}>
                                    <div style={{flex:'0.3'}}>
                                        <span onClick={this.handlePostForm} style={{color:'blue', cursor:'pointer'}}><FontAwesomeIcon icon={faEdit} /></span>
                                        <span style={{marginLeft:10}}>Start a Post</span>
                                    </div>
                                    {
                                        togglePostForm ? 
                                        <div>
                                            <form onSubmit={this.handleSubmit}>
                                                <input type="title" name="title" value={title} placeholder="title" onChange={this.handleChange}/>
                                                <br />
                                                <input type="text" name="body" value={body} placeholder="body" onChange={this.handleChange}/>
                                                <br />
                                                <input type="url" name="url" value={url} placeholder="post your image" onChange={this.handleChange} />
                                                <br/>
                                                <input type="submit" value="Post" />
                                            </form>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                                <div className={styles.postSubSection} style={{padding:10}}>
                                    <div className={styles.Events}>
                                        <span style={{color:'#03a9f4', cursor:'pointer', marginRight:5}}><FontAwesomeIcon icon={faImage} /></span>
                                        <span style={{fontWeight:'600'}}>Photo</span>
                                    </div>
                                    <div className={styles.Events}>
                                        <span style={{color:'#ff9800', cursor:'pointer', marginRight:5}}><FontAwesomeIcon icon={faVideo} /></span>
                                        <span style={{fontWeight:'600'}}>Video</span>
                                    </div>
                                    <div className={styles.Events}>
                                        <span style={{color:'#64b5f6', cursor:'pointer', marginRight:5}}><FontAwesomeIcon icon={faCalendarAlt} /></span>
                                        <span style={{fontWeight:'600'}}>Event</span>
                                    </div>
                                    <div className={styles.Events}>
                                        <span style={{color:'#4caf50', cursor:'pointer', marginRight:5}}><FontAwesomeIcon icon={faNewspaper} /></span>
                                        <span style={{fontWeight:'600'}}>Article</span>
                                    </div>
                                </div>
                            </div>
                        <div>
                            {
                                data && data.map(item=>{
                                    return <SinglePost key={item.id} post={item} />
                                })
                            }
                        </div>
                    </>
                )
        }
    }


const mapStateToProps = (state)=>({
    data: state.allData.data, 
    userData: state.login.data,
    isAuth: state.login.isAuth
})

const mapDispatchToProps = (dispatch)=>({
    getAllPosts: (payload)=>(dispatch(getAllPosts(payload))),
    postData: (payload)=>(dispatch(postData(payload)))
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)