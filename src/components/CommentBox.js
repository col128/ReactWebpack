/**
 * Author: TRwin7SP1
 * Date:2016/12/7
 * Version:1.0.1
 * Desciption:
 *
 */

import React from 'react';


class  Comment extends React.Component{
  render(){
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}
class  CommentList extends React.Component{
  render(){
    return <div className="CommentList">
      {/*Hello, world! I am a CommentList.*/}
      <Comment author="Pete Hunt">This is one comment</Comment>
      <Comment author="Jordan Walke">This is *another* comment</Comment>
    </div>
  }
}


class  CommentForm extends React.Component{
  render(){
    return <div className="CommentForm">
      Hello, world! I am a CommentForm.
    </div>
  }
}





class  CommentBox extends React.Component{
  render(){
    return (
      <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>

    );
  }

}
export {CommentBox};
