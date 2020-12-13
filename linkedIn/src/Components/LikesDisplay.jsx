import React, { Component } from 'react'

export default class LikesDisplay extends Component {
    render() {
        console.log(this.props)
        const {like} = this.props
        const {username} = like
        return (
            <>
                <div style={{fontSize:"13px"}}>{username}</div>
            </>
        )
    }
}
