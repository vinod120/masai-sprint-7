import React, { Component } from 'react'
import styles from './SinglePosts.module.css';

export default class CommentsDisplay extends Component {
    render() {
        console.log(this.props, "display comments ")
        const {comment, image_url} = this.props
        const {comment_author, comment_body} = comment
        return (
            <>
                <div className={styles.commentDisplay}>
                    <span>
                        <img src={image_url} alt="author" width="20px" height="20px" style={{borderRadius:"50%",marginRight:5}}/>
                    </span>
                    <span style={{fontWeight:600, marginRight: 10}}>{comment_author}</span>
                    <br />
                    <span style={{textAlign:"right", marginLeft:50}}>{comment_body}</span>
                </div>
            </>
        )
    }
}
