/**
 * Author: TRwin7SP1
 * Date:2016/12/7
 * Version:1.0.1
 * Desciption:
 *
 */

import React from 'react';
const mStyle = {
  color:'red',
  fontSize:20
}
class  Link extends React.Component{
  render(){
    return (
      <div style={mStyle}>
        Hello my Link!!!!
        <button onClick={this.clickhandle} >click me!!</button>
      </div>

    );
  }
  clickhandle(){
    alert('button is clicked!!')
  }
}
export default  Link;
