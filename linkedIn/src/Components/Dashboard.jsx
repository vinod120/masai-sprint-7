import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import Posts from './Posts';
import News from './News'
import styles from './Dashboard.module.css'
import Profile from './Profile';
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from '../images/home.png'
import Network from '../images/network.png'
import Job from '../images/job.png'
import Message from '../images/message.png'
import Notification from '../images/notification.png'
import Grid from '../images/grid.png'
import LinkedIn from '../images/linkedIn.png'
// import Search from '../images/search.png'
class Dashboard extends Component {
    render() {
        console.log(this.props)
        const { isAuth }= this.props
        const {userData} = this.props
        if(!isAuth){
            return(
                <Redirect to='/' />
            )
        }
        
        else{
            return (
                <><div style={{backgroundColor:'#eeeeee', paddingTop:10, marignTop:10}}>
                    <div className={styles.navbar}>
                        <div className={styles.header}>
                            <div>
                                <img src={LinkedIn} alt="home" width="50px" height="40px"/>
                            </div>
                            <div style={{marginRight:25, marginTop:10}}>
                                {/* <img src={Search} alt="vinod" width="20px" height="20px"/> */}
                                <input type="text" placeholder=" Search" style={{borderStyle:'none', borderRadius:2}}/> 
                            </div>
                            <div>
                                <img src={Home} alt="home" width="20px" height="20px"/>
                                <div style={{fontSize:"14px"}}>Home</div>
                            </div>
                            <div>
                                <img src={Network} alt="home" width="20px" height="20px"/>
                                <div style={{fontSize:"14px"}}>My Network</div>
                            </div>
                            <div>
                                <img src={Job} alt="home" width="20px" height="20px"/>
                                <div style={{fontSize:"14px"}}>Jobs</div>
                            </div>
                            <div>
                                <img src={Message} alt="home" width="20px" height="20px"/>
                                <div style={{fontSize:"14px"}}>Messaging</div>
                            </div>
                            <div>
                                <img src={Notification} alt="home" width="20px" height="20px"/>
                                <div style={{fontSize:"14px"}}>Notification</div>
                            </div>
                            <div>
                                <img src={userData.avatar_url} alt="home" width="20px" height="20px" style={{borderRadius:"50%"}}/>
                                <div style={{fontSize:"14px"}}>Me</div>
                            </div>
                            <div>
                                <img src={Grid} alt="home" width="20px" height="20px"/>
                                <div style={{fontSize:"14px"}}>Work</div>
                            </div>
                            <div>
                                <div style={{fontSize:"14px", color:'#ff9800'}}>Try Premium Free <br />for 1 Month</div>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', margin:'0px 20px'}}>
                        <div style={{flex:'0.5',margin:5}}>
                           { <Profile />}
                        </div>
                        <div style={{flex:'2', margin:5}}>
                            {<Posts />}
                        </div>
                        <div style={{flex:'0.5', margin:5}}>
                            {<News />}
                        </div>
                    </div>
                </div>
                </>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.login.isAuth,
    userData: state.login.data,
    
  });

export default connect(mapStateToProps, null)(Dashboard);