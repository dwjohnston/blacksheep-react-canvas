import React from 'react';
import ReactDOM from 'react-dom';
require("./style.scss");

import Color from "./objects/Color";

class Canvas extends React.Component {


	componentWillMount(){
		this.setState({canvasCore: this.props.canvasCore});


		this.layers = [];
		this.refLayers = {}
		for (let i in this.props.layers){
				this.layers.push(			<canvas className = "blacksheep-canvas" key ={"canvas-layer-"+i} ref = {(canvas) => {
				console.log(this);
				console.log(canvas);
				this.refLayers[i] = canvas;
				//this.layers[i] = canvas
			}}  />); //}

		}


		console.log(this.layers);
		console.log(this.refLayers);


	}

	resize() {

		this.w = this.container.clientWidth;
		this.h =  this.container.clientHeight;


		for (let i in this.layers) {

			this.refLayers[i].width = this.w;
			this.refLayers[i].height = this.h;
		}
		//
		// this.drawCanvas.width = this.w;
		// this.paintCanvas.width = this.w;
		// this.drawCanvas.height = this.h;
		// this.paintCanvas.height = this.h;

	}

	componentDidMount() {
		console.log("mount");

		this.resize();
		//this.context = ReactDOM.findDOMNode(this).getContext('2d');

		this.contexts = [];
		for (let i in this.layers) {
			console.log(i);
			let canvas = this.refLayers[i];
			this.contexts.push(canvas.getContext("2d"));

		}
		//
		// this.drawContext = this.drawCanvas.getContext('2d');
		// this.drawContext.globalAlpha = 1;
		//
		//
		//
		// this.paintContext = this.paintCanvas.getContext('2d');


		window.requestAnimationFrame(() => {
			this.drawAnimationFrame();
		});

	}


	drawAnimationFrame() {

		if(this.state.canvasCore.getRequiresClear()){
			this.clearAll();
		}

		// this.drawContext.clearRect(0, 0, this.w, this.h);
		//
		//
		// for (var obj of this.state.canvasCore.getDrawQueue()){
		// 	//	this.myDraw(obj);
		// }
		//
		// this.drawContext.restore();

		let q = this.state.canvasCore.getPaintQueue();

		if( q.length > 0) {

			let newCanvas = document.createElement("canvas");
			newCanvas.width = this.w;
			newCanvas.height = this.h;
			let newContext = newCanvas.getContext('2d');


			for (var obj of q){
				obj.draw(newContext);

			}

			this.contexts[0].drawImage(newCanvas,0,0);

		}



		window.requestAnimationFrame(() => {
			this.drawAnimationFrame();
		});

	}


	componentDidUpdate() {

	}

	myPaint(object, canvas =  this.contexts[0]) {



		if (object){
			//object.draw(canvas);
			object.place(canvas);
		}
	}



	clearAll() {

		for (let context of this.contexts) {
			context.clearRect(0,0, this.w, this.h);
		}
		//
		// this.drawContext.clearRect(0, 0, this.w, this.h);
		// this.paintContext.clearRect(0, 0, this.w, this.h);
	}




	render() {

		return <div className = "Canvas canvas-container" id = {this.props.id} ref = {(div) => {this.container = div}}>
			 {/*<canvas className = "paint-canvas" ref = {(canvas) => {this.paintCanvas = canvas} }/>
			 <canvas className = "draw-canvas"  ref = {(canvas) => {this.drawCanvas = canvas} }/>*/}

			{this.layers}

		</div>
		;
	}
}

export default Canvas;
