

import React, { Component } from 'react'
import data from './data.json'
import LikeDislike from './LikeDislike'
import '../App.css'

class SocialCard extends Component {
    render() {
        return (
      <div >
       {data.map((data,index)=>{
           return (
         <div >
             <div >
           <img src={data.profPic} Style={  "display: inline-block;" } className="rounded-circle"/> {data.time}ago,{data.profName}</div>
           <br></br>
            <div><img className="rounded mx-auto d-block" src={require('../assets/'+ data.content)} alt="Card image cap"></img></div>
           <LikeDislike like={data.like} dislike={data.dislike}/>
            <div className="card-body">{data.description}</div>
           <hr className="hrtag"/>
            </div>
     
       
       )
       }
       )
       }
        </div>
    )
}
}
export default SocialCard
