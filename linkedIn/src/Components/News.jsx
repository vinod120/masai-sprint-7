import React, { Component } from 'react'
import styles from './News.module.css'
export default class News extends Component {
    render() {
        return (
            <>
                <div className={styles.news}>
                    <div style={{marginTop:10}}>
                    LinkedIn News
                    <div>
                            <div style={{textAlign:"left", marginLeft:10}}>
                                <span style={{fontSize:"15px", color:'#3492ca', marginRight:5}}>•</span> Stuck in your career?
                            </div>
                            <span style={{margin:'0px 5px'}}>32m ago </span> 
                            <span style={{margin:'0px 5px'}}>•</span> 
                            <span style={{margin:'0px 5px'}}>2,889 readers</span>
                            <div style={{textAlign:"left", marginLeft:10}}>
                            <span style={{fontSize:"15px", color:'#3492ca', marginRight:5}}>•</span>IT sector’s hiring outlook
                            </div>
                            <span style={{margin:'0px 5px'}}>3d ago </span> 
                            <span style={{margin:'0px 5px'}}>•</span> 
                            <span style={{margin:'0px 5px'}}>171 readers</span>
                            <div style={{textAlign:"left", marginLeft:10}}>
                            <span style={{fontSize:"15px", color:'#3492ca', marginRight:5}}>•</span>More millennials are buying 
                            </div>
                        </div>
                    </div>
                    <span style={{margin:'0px 5px'}}>32m ago </span> 
                            <span style={{margin:'0px 5px'}}>•</span> 
                            <span style={{margin:'0px 5px'}}>2,889 readers</span>
                            <div style={{textAlign:"left", marginLeft:10}}>
                            <span style={{fontSize:"15px", color:'#3492ca', marginRight:5}}>•</span>IT sector’s hiring outlook
                            </div>
                            <span style={{margin:'0px 5px'}}>3d ago </span> 
                            <span style={{margin:'0px 5px'}}>•</span> 
                            <span style={{margin:'0px 5px'}}>171 readers</span>
                            <div style={{textAlign:"left", marginLeft:10}}>
                            <span style={{fontSize:"15px", color:'#3492ca', marginRight:5}}>•</span>More millennials are buying 
                            </div>
                            <span style={{margin:'0px 5px'}}>32m ago </span> 
                            <span style={{margin:'0px 5px'}}>•</span> 
                            <span style={{margin:'0px 5px'}}>2,885 readers</span>
                </div>
            </>
        )
    }
}