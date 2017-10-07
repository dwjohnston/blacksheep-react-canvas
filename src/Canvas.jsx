import React from 'react';
import ReactDOM from 'react-dom';
require("./style.scss");

class Canvas extends React.Component {


	componentWillMount(){
		this.setState({canvasCore: this.props.canvasCore});
	}

	resize() {

		this.w = this.container.clientHeight;
		this.h =  this.container.clientHeight

		this.drawCanvas.width = this.w;
		this.paintCanvas.width = this.w;
		this.drawCanvas.height = this.h;
		this.paintCanvas.height = this.h;

	}

	componentDidMount() {

		this.resize();
		//this.context = ReactDOM.findDOMNode(this).getContext('2d');

		this.drawContext = this.drawCanvas.getContext('2d');
		this.drawContext.globalAlpha = 1;



		this.paintContext = this.paintCanvas.getContext('2d');
	}


	componentDidUpdate() {

		if(this.state.canvasCore.getRequiresClear()){

			this.clearAll();

		}


		this.drawContext.clearRect(0, 0, this.w, this.h);
		for (var obj of this.state.canvasCore.getDrawQueue()){
			this.myDraw(obj);
		}

		this.drawContext.restore();



		for (var obj of this.state.canvasCore.getPaintQueue()){
			this.myPaint(obj);

			

		}
	}

	myPaint(object) {
		object.draw(this.paintContext);
	}

	myDraw(object) {
		object.draw(this.drawContext);
	}


	clearAll() {

		this.drawContext.clearRect(0, 0, this.w, this.h);
		this.paintContext.clearRect(0, 0, this.w, this.h);
	}




	render() {
		return <div className = "Canvas canvas-container" id = {this.props.id} ref = {(div) => {this.container = div}}>
			<canvas className = "paint-canvas" ref = {(canvas) => {this.paintCanvas = canvas} }/>
			<canvas className = "draw-canvas"  ref = {(canvas) => {this.drawCanvas = canvas} }/>
		</div>
		;
	}
}

export default Canvas;
