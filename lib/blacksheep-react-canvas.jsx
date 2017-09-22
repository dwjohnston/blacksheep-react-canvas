import React from 'react';
import './blacksheep-react-canvas.scss';


export default React.createClass({

  componentWillMount(){
    this.setState({appModel: this.props.appModel});
  }

  resize() {
    this.w = this.drawCanvas.clientWidth;
    this.h = this.drawCanvas.clientHeight;

    this.drawCanvas.width = this.drawCanvas.clientWidth;
    this.paintCanvas.width = this.paintCanvas.clientWidth;
    this.drawCanvas.height = this.drawCanvas.clientHeight;
    this.paintCanvas.height = this.paintCanvas.clientHeight;

    this.w = 1000;
    this.h = 1000;

    this.drawCanvas.width = 1000;
    this.paintCanvas.width = 1000;
    this.drawCanvas.height = 1000;
    this.paintCanvas.height = 1000;
  }

  componentDidMount() {

    this.resize();

    this.context = this.drawCanvas.getContext('2d');
    this.context.globalAlpha = 1;



    this.paintContext = this.paintCanvas.getContext('2d');
  }

  updateDimensions() {

  }


  componentDidUpdate() {

    if(this.state.appModel.getClearState()){
      this.clearAll();
    }


    this.context.clearRect(0, 0, this.w, this.h);
    for (var obj of this.state.appModel.getDrawables()){
      this.myDraw(obj);
    }

    this.context.restore();



    for (var obj of this.state.appModel.getPaintQueue()){
      this.myPaint(obj);
    }
  }

  myPaint(object) {
    object.draw(this.paintContext);
  }

  myDraw(object) {
    object.draw(this.context);
  }


  clearAll() {
    this.context.clearRect(0, 0, this.w, this.h);
    this.paintContext.clearRect(0, 0, this.w, this.h);
  }




  render() {
    return <div className = "blacksheep-react-canvas canvas-outer">
      <div className = "canvas-container">
        <canvas className = "paint-canvas" ref = {(canvas) => {this.paintCanvas = canvas} }/>
        <canvas className = "draw-canvas"  ref = {(canvas) => {this.drawCanvas = canvas} }/>
      </div>      
    </div>
    ;
  }
});
