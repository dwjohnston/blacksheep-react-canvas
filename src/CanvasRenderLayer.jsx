import React from 'react';
import ReactDOM from 'react-dom';

class CanvasRenderLayer extends React.Component {


  render() {
    return <canvas className = "blacksheep-canvas" width = {this.props.width} height = {this.props.height} />;
  }
}

export default CanvasRenderLayer;
