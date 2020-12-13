import React, { Component } from 'react'
import { connect } from 'react-redux';
import { postRegister } from '../Redux/RegisterRedux/registerAction';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FORM = styled.div`
input[type=text], input[type=password], input[type=url] {
    width: 100%;
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
    width:100%;
    border-radius: 30px;
  }
  
  input[type=submit]:hover {
    opacity: 0.8;
  }
`
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            fullname: '',
            avatar_url: '',
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
        const {username, password,fullname, avatar_url} = this.state
        let payload = {
            username: username,
            password: Number(password),
            user_fullname: fullname,
            avatar_url: avatar_url
        }
        const {postRegister} = this.props
        postRegister(payload)
    }
    render() {
        const {username, password, avatar_url, fullname} = this.state
        return (
            <>
                <div>
                        <div>
                            <h1>Register</h1>
                        </div>
                    <FORM>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="fullname" placeholder="fullname" value={fullname} onChange={this.handleChange}/>
                            <br />
                            <input type="text" name="username" placeholder="username" value={username} onChange={this.handleChange}/>
                            <br />
                            <input type="password" name="password" placeholder="password" value={password} onChange={this.handleChange}/>
                            <br />
                            <input type="url" name="avatar_url" placeholder="avatar_url" value={avatar_url} onChange={this.handleChange}/>
                            <br />
                            <input type="submit" value="Register"/>
                        </form>
                    </FORM>
                    <div style={{marginTop:10}}>
                            Already you have LinkedIn account? <span style={{color:'#015f92'}}><Link to='/'>Sign in</Link></span>
                        </div>
                    
                </div>
            </>
        )
    }
}

const mapDispatchToPros = (dispatch)=>({
    postRegister: (payload)=>(dispatch(postRegister(payload)))
})

export default connect(null, mapDispatchToPros)(Register)