import React, { Component } from 'react'

class LikeDislike extends Component { 
  state = {
    like: this.props.like,
    dislike: this.props.dislike,
    likeActive: false,
    dislikeActive: false
  };

  setDislike() {
    this.setState({
      dislikeActive: !this.state.dislikeActive,
      dislike: this.state.dislikeActive
        ? this.state.dislike - 1
        : this.state.dislike + 1
    });
  }
  setLike() {
    this.setState({
      likeActive: !this.state.likeActive,
      like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
    });
  }

  handleLike() {
    if (this.state.dislikeActive) {
      this.setLike();
      this.setDislike();
    }
    this.setLike();
  }

  handleDislike() {
    if (this.state.likeActive) {
      this.setDislike();
      this.setLike();
    }
    this.setDislike();
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={() => this.handleLike()}><i className="fa fa-thumbs-up"></i> 
       </button> {this.state.like} Likes
        <button className="btn"onClick={() => this.handleDislike()}><i className="fa fa-thumbs-down"></i> 
        </button>
        {this.state.dislike} Dislikes
      </div >
    );
  }
}




  

export default LikeDislike
