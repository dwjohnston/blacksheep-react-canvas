import React from 'react';
import "./style.scss";
import {ClearAll} from "blacksheep-geometry"; 

class Canvas extends React.Component {

	constructor() {
		super();
		this.refLayers = [];

		this.state = {
			size: 500,
			container: null,
			layers: null,
		};


	}


	componentWillMount() {

		for (let i in this.props.layers) {
			this.refLayers.push(React.createRef());
		}

		this.props.canvasCore.refLayers = this.refLayers;
		this.setState({ canvasCore: this.props.canvasCore });

	}


	componentDidMount() {

		let contexts = [];
		for (let i in this.props.layers) {
			let canvas = this.refLayers[i].current;
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

		this.props.getJpeg({
			image: image,
			width: this.state.size,
			height: this.state.size,
		});
	}

	// clearAll() {
	// 	for (let context of this.state.contexts) {
	// 		context.clearRect(0, 0, this.size, this.size);
	// 	}
	// }

	drawAnimationFrame() {


		// //I don't like this
		// if (this.state.canvasCore.getRequiresClear()) {
		// 	console.log("clear all");
		// 	this.clearAll();
		// }

		if (this.state.canvasCore.getJpegRequested()) {
			this.handleJpegRequest();
		}


		let pq = this.state.canvasCore.getPaintQueue();

		for (let key in pq) {

			let q = pq[key];

			if (q.length > 0) {

				let newCanvas = document.createElement("canvas");
				newCanvas.width = this.state.size;
				newCanvas.height = this.state.size;
				let newContext = newCanvas.getContext('2d');


				for (var obj of q) {
					if(obj.isClearAll) {
						obj.draw(this.state.contexts[key]); 
					}

					if (obj) {
						obj.draw(newContext);
					}
				}

				this.state.contexts[key].drawImage(newCanvas, 0, 0);
			}
		}

		window.requestAnimationFrame(() => {
			this.drawAnimationFrame();
		});

	}


	componentDidUpdate() {

	}

	myPaint(object, canvas = this.state.contexts[0]) {

		if (object) {
			object.place(canvas);
		}
	}

	renderLayers() {


		let layers = [];

		console.log(this.props.layers);
		for (let i = 0; i < this.props.layers.length; i++) {
			layers.push(<canvas width={500} height={500} ref={this.refLayers[i]} key={"canvas-" + i} />);
		}

		return layers;
	}



	render() {
		return <div className="Canvas" id={this.props.id} >
			{this.renderLayers()}
		</div>;
	}
}

export default Canvas;
