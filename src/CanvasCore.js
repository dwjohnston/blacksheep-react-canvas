import Rect from "./objects/drawableObjects/Rect";
import Color from "./objects/Color";
import Position from "./objects/Position";


class CanvasCore {


	/**


	FUTURE STATE

	rather than just having a paint queue and a draw queue, you can have n layers

	*/


	/**
	We're not going to have a background color or degrade rate or whatever defined here.

	Let the algorithm handle that.
	*/
	constructor(layers=1) {


		this.layers = layers;
		this.requiresClear = false;
		this.jpegRequested = false;

		this.imagePromise = null; 

		this.clearQueue();
	}


	setDrawingSource(source) {
		this.drawingSource = source;
	}

	stopDraw() {

	}

	startDraw() {

	}


	clearQueue() {

		this.paintQueue = {};
		for (let i = 0; i< this.layers; i++){
			this.paintQueue[i] = [];
		}


	}

	addPaintable(drawable) {


		this.paintQueue = drawable;
		//this.draqQueue.push(...drawable);
	}

	setRequiresClear(bool){
		if (bool === null || bool === true || bool === undefined){
			this.requiresClear = true;
		}


		else this.requiresClear = bool;


	}

	getRequiresClear() {
		let b =  this.requiresClear;

		this.requiresClear = false;

		return b;
	}


	getPaintQueue() {
		if(this.drawingSource !== undefined){
			return this.drawingSource.tick();
		}
	}

	getJpegRequested() {
		let b = this.jpegRequested;
		this.jpegRequested = false;
		return b;
	}

	requestJpeg() {

		this.imagePromise = new Promise((resolve, reject) => {

		}); 


		this.jpegRequested = true;
	}

}

export default CanvasCore;
