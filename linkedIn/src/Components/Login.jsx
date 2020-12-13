import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { userLogin } from '../Redux/AuthRedux/loginAction';
import LinkedIn from '../images/linkedIn.png';
import styled from 'styled-components';

const FORM = styled.div`
input[type=text], input[type=password] {
    width: 60%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 2px;
  }
  input[type=submit] {
    background-color: #115293;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width:60%;
    border-radius: 30px;
  }
  
  input[type=submit]:hover {
    opacity: 0.8;
  }
`
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    
    handleChange = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const {username, password} = this.state
        let payload = {
            username: username,
            password: Number(password),
        }
        const {userLogin} = this.props
        userLogin(payload)
    }
    render() {
        const {username, password} = this.state
        const {isLoading, isAuth, error, data} = this.props
        console.log(data, "logged user data")
        if(isAuth){
            return(
                <Redirect to='/dashboard' />
            )
        }
        else{
            return (
                <>
                    
                    <div>
                        <div style={{fontWeight: '600', color:'#015f92',marginTop:20 }}>
                            Linked
                            <img src={LinkedIn} alt="vinod" width="20px" height="15px"/>
                        </div>
                        <div style={{marginTop:30, marginBottom:20}}>
                            <h3>Welcome Back</h3>
                            <span style={{color:'#9e9e9e'}}>Don't miss your next opportunity. Sign in to stay updated on your professional world.</span>
                        </div>
                        <FORM>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="username"/>
                                <br />
                                <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="password"/>
                                <br />
                                <input type="submit" value="Login" />
                            </form>
                        </FORM>
                        <div style={{color:'#015f92'}}>Forgot Password?</div>
                        <div style={{marginTop:10}}>
                            New to LinkedIn? <span style={{color:'#015f92'}}><Link to='/register'>Join now</Link></span>
                        </div>
                        <hr />
                        use below credentials<br/>
                        useraname: vinod/Shanthi/Nrupul<br />
                        password: 123
                        <br />
                        <div>
                        {isLoading && "...loading"}
                        {error && error}
                        </div>
                    </div>
                    
                </>
            )
        }
    }
}

const mapStateToProps = (state)=>({
    isAuth: state.login.isAuth,
    isLoading: state.login.isLoading,
    error: state.login.error,
    data: state.login.data
})

const mapDispatchToProps = (dispatch)=>({
    userLogin: (payload)=>(dispatch(userLogin(payload)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)