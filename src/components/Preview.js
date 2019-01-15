import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Preview extends Component{
  render(){
    return (
      <div className="content">
          <p>*Preview</p>
          <div id="preview" className="displayArea" style={previewStyles}></div>
      </div>
    )
  }
}
const previewStyles = {
  minHeight:"200px",
  textAlign:"left"
}
export default Preview;
