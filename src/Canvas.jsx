import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss";

import ResizeAware from 'react-resize-aware';


import Color from "./objects/Color";
import ClearAll from "./objects/drawableObjects/ClearAll";

class Canvas extends React.Component {


	componentWillMount(){


		this.layers = [];
		this.refLayers = {}
		for (let i in this.props.layers){
			this.layers.push(			<canvas className = "blacksheep-canvas" key ={"canvas-layer-"+i} ref = {(canvas) => {

				this.refLayers[i] = canvas;
				//this.layers[i] = canvas
			}}  />); //}

		}

		this.props.canvasCore.refLayers = this.refLayers;
		this.setState({canvasCore: this.props.canvasCore});


	}

	resize() {

		this.w = this.container.clientWidth;
		this.h =  this.container.clientHeight;

		for (let i in this.layers) {

			this.refLayers[i].width = this.w;
			this.refLayers[i].height = this.h;


			let style;
			if (this.w > this.h) {
				let marginLeft = ["margin-left: ", (this.w - this.h)/2, "px;"].join('');
				style =  ["width: ", this.h ,"px; height:",  this.h, "px;", marginLeft ].join('');
			}
			else {
				let marginTop = ["margin-top: ", (this.h - this.w)/2, "px;"].join('');
				style =  ["width: ", this.w ,"px; height:",  this.w, "px;", marginTop ].join('');

			}
			
			this.refLayers[i].style = style;

			console.log(this.refLayers[i]);
		}

	}

	componentDidMount() {

		this.resize();

		this.contexts = [];
		for (let i in this.layers) {
			let canvas = this.refLayers[i];
			this.contexts.push(canvas.getContext("2d"));

		}

		window.requestAnimationFrame(() => {
			this.drawAnimationFrame();
		});

	}


	handleJpegRequest() {


		let image = this.refLayers[0].toDataURL("image/png");

		this.props.getJpeg(image);
	}

	drawAnimationFrame() {


		if(this.state.canvasCore.getRequiresClear()){
			this.clearAll();
		}

		if(this.state.canvasCore.getJpegRequested()) {
			this.handleJpegRequest();
		}

		let pq = this.state.canvasCore.getPaintQueue();


		for (let key in pq){

			let q = pq[key];

			if( q.length > 0) {

				let newCanvas = document.createElement("canvas");
				newCanvas.width = this.w;
				newCanvas.height = this.h;
				let newContext = newCanvas.getContext('2d');


				//Total hack for now
				if (q[0] instanceof  ClearAll) {
					q[0].draw(this.contexts[key]);
				}

				for (var obj of q){
					if (obj) {
						obj.draw(newContext);
					}
				}

				this.contexts[key].drawImage(newCanvas,0,0);
			}
		}

		window.requestAnimationFrame(() => {
			this.drawAnimationFrame();
		});

	}


	componentDidUpdate() {

	}

	myPaint(object, canvas =  this.contexts[0]) {

		if (object){
			object.place(canvas);
		}
	}



	clearAll() {

		for (let context of this.contexts) {
			context.clearRect(0,0, this.w, this.h);
		}

	}




	render() {

		return	<div className = "Canvas canvas-container" id = {this.props.id} ref = {(div) => {this.container = div}}>
			<ResizeAware style={{ position: 'absolute', width: "100%", height: "100%"}}
				onResize = {() => {
					this.resize();
				}}
				>
				{this.layers}
			</ResizeAware>


		</div>	;
	}
}

export default Canvas;
