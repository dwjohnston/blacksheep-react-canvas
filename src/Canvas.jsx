import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss";

import ResizeAware from 'react-resize-aware';


import Color from "./objects/Color";
import ClearAll from "./objects/ClearAll";

class Canvas extends React.Component {


	componentWillMount(){
		this.setState({canvasCore: this.props.canvasCore});


		this.layers = [];
		this.refLayers = {}
		for (let i in this.props.layers){
			this.layers.push(			<canvas className = "blacksheep-canvas" key ={"canvas-layer-"+i} ref = {(canvas) => {

				this.refLayers[i] = canvas;
				//this.layers[i] = canvas
			}}  />); //}

		}

	}

	resize() {

		this.w = this.container.clientWidth;
		this.h =  this.container.clientHeight;

		for (let i in this.layers) {

			this.refLayers[i].width = this.w;
			this.refLayers[i].height = this.h;
		}

	}

	componentDidMount() {

		this.resize();

		this.contexts = [];
		for (let i in this.layers) {
			console.log(i);
			let canvas = this.refLayers[i];
			this.contexts.push(canvas.getContext("2d"));

		}

		window.requestAnimationFrame(() => {
			this.drawAnimationFrame();
		});

	}


	drawAnimationFrame() {


		console.log("draw animation frame");
		if(this.state.canvasCore.getRequiresClear()){
			this.clearAll();
		}

		let pq = this.state.canvasCore.getPaintQueue();

		console.log(pq);

		for (let key in pq){

			let q = pq[key];

			if( q.length > 0) {

				let newCanvas = document.createElement("canvas");
				newCanvas.width = this.w;
				newCanvas.height = this.h;
				let newContext = newCanvas.getContext('2d');



				for (var obj of q){

					if (obj) {
						obj.draw(newContext);
					}

				}


				let degrade = this.props.layers[key].degradeLayer;




				new ClearAll(degrade).draw(this.contexts[key]);
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
			//object.draw(canvas);
			object.place(canvas);
		}
	}



	clearAll() {


		console.log("clear");

		for (let context of this.contexts) {
			context.clearRect(0,0, this.w, this.h);
		}
		//
		// this.drawContext.clearRect(0, 0, this.w, this.h);
		// this.paintContext.clearRect(0, 0, this.w, this.h);
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
