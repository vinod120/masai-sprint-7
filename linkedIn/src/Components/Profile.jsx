import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Profile.module.css'
class Profile extends Component {
    render() {
        const {userData} = this.props
        const {avatar_url, user_fullname} = userData
        return (
            <>
                <div className={styles.Profile}>
                    <div style={{marginTop:10}}>
                        <img src={avatar_url} alt="" style={{borderRadius:'50%', marginTop:20}} width="50px" height="50px"/>
                    </div>
                    <div style={{fontWeight:600, marginTop:10}}>{user_fullname}</div>
                    <div>
                    Learning MERN Stack, Aspiring Full Stack Developer at Masai School
                    </div>
                    <div style={{borderBottom:'1px solid #84878a'}}></div>
                    <div>
                        Connections: 80
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state)=>({
    userData: state.login.data
})
export default connect(mapStateToProps, null)(Profile)