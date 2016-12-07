require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import  Link from './Link';
import {CommentBox} from './CommentBox'
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Link/>
        <CommentBox/>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <div className="notice">hello david I'm from React{this.props.name}-{this.props.no}</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
  name:'david',
  no:1
};

export default AppComponent;
