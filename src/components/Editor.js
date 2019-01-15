import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Editor extends Component{
  onChange = (e)=>{
    this.props.updateText(e.target.value);
  }
  render(){
    return (
      <div className="content" style={editorContainer}>
          <p>*Editor</p>
          <textarea rows="10" style={editorStyle} className="displayArea"
          id="editor"
          onChange={this.onChange}>
          </textarea>
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
