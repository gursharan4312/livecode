import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Editor extends Component{
  render(){
    return (
      <div className="content" style={editorContainer}>
          <p>*Editor</p>
          <textarea rows="10" style={editorStyle} className="displayArea" id="editor"></textarea>
      </div>
    )
  }
}
const editorContainer = {
  width:"60%"
}
const editorStyle = {
  overflowY:"scroll"
}
export default Editor;
