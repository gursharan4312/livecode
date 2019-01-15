import React,{Component} from 'react';

class PreviewBox extends Component{
render(){
  return (
    <div className="content">
        <p>*Preview</p>
        <div id="preview" className="displayArea" style={previewStyles} >{this.props.text}</div>
    </div>
  )
}
const previewStyles = {
  minHeight:"200px"
}
}
export default PreviewBox;
