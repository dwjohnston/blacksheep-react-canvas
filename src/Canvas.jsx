import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss";

import ResizeAware from 'react-resize-aware';


import Color from "./objects/Color";
import ClearAll from "./objects/drawableObjects/ClearAll";

class Canvas extends React.Component {

	constructor() {
		super(); 
		console.log("hellO");
		console.log(this.props); 
		this.refLayers = [];


		this.state = {
			size: 500, 

			container: null, 
			layers: null, 
		}; 


	}


	componentWillMount(){

		for (let i in this.props.layers){
			this.refLayers.push(React.createRef()); 
		}



		this.props.canvasCore.refLayers = this.refLayers;
		this.setState({canvasCore: this.props.canvasCore}); 

	}

	resize(resizeDimensions) {

		this.setState({size: resizeDimensions.width > resizeDimensions.height ? resizeDimensions.height : resizeDimensions.width});
	}

	componentDidMount() {

		//this.resize();

		let contexts = [];
		for (let i in this.props.layers) {
			let canvas = this.refLayers[i].current;
			console.log(canvas); 

			contexts.push(canvas.getContext("2d"));

		}

		this.setState({
			contexts: contexts
		});

		window.requestAnimationFrame(() => {
			this.drawAnimationFrame();
		});

	}


	handleJpegRequest() {


		let image = this.refLayers[0].current.toDataURL("image/png");
		console.log("foo");

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


				//let size = newCanvas.width > newCanvas.height ? newCanvas.height : newCanvas.width;
				newCanvas.width = this.state.size;
				newCanvas.height = this.state.size;
				let newContext = newCanvas.getContext('2d');
				
				//Total hack for now
				if (q[0] instanceof  ClearAll) {
					q[0].draw(this.state.contexts[key]);
				}

				for (var obj of q){
					if (obj) {
						obj.draw(newContext);
					}
				}

				this.state.contexts[key].drawImage(newCanvas,0,0);
			}
		}

		window.requestAnimationFrame(() => {
			this.drawAnimationFrame();
		});

	}


	componentDidUpdate() {

	}

	myPaint(object, canvas =  this.state.contexts[0]) {

		if (object){
			object.place(canvas);
		}
	}



	clearAll() {

		for (let context of this.state.contexts) {
			context.clearRect(0,0, this.w, this.h);
		}

	}



	renderLayers() {


		let layers =[]; 

		console.log(this.props.layers);
		for (let i = 0; i< this.props.layers.length; i++) {
			layers.push( <canvas ref = {this.refLayers[i]} key = {"canvas-" + i }/>); 
		}

		return layers; 
	}



	render() {
//	{*/ref = {(div) => {this.setState({container: div})}}*/}
//style={{ position: 'absolute', width: "100%", height: "100%"}}
		return	<div className = "Canvas" id = {this.props.id} >
			<ResizeAware 
				onResize = {rd => this.resize(rd)}
				>


							{this.renderLayers()}

			</ResizeAware>





		</div>	;
	}
}

export default Canvas;
