import React from 'react'
import commentsService from '../services/comment-service'
import Comment from './Comment/Comment'
class Comments extends React.Component {
    state = {
        comments: null
    }

    imageInput = null;

    setTextInputRef = element => {
        this.textInput = element;
      };

    componentDidMount() {
        // commentsService.load().then(comments => {
        //     this.setState({ comments })
        // })
    }

    inputChangeHandler = (e) => {
        console.log(e.target.value);
      }

      render() {
          const {comments} = this.state;
          return <div>
             <input type="text" ref={this.setTextInputRef} onChange={this.inputChangeHandler} />
          {comments ? 
             <div className="Coments">
                {comments.map((comment) => <Comment key={comment.id} commentName={comment.name} commentEmail={comment.email}>{comment.body}</Comment>)}
             </div> : <div>Loading...</div>
          }         
          </div>
      }
}

export default Comments;