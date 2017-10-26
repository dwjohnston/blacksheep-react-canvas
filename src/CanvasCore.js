import Rect from "./objects/Rect";
import Color from "./objects/Color";
import Position from "./objects/Position";


class CanvasCore {


	/**


		FUTURE STATE

		rather than just having a paint queue and a draw queue, you can have n layers

	*/

	constructor(paintBgColor="#000000", paintBgDegradeRate=0, layers=1) {


		this.layers = layers;

		this.requiresClear = false;

		this.paintBgColor = paintBgColor;	//OK COLOR DOESN'T WORK, CBF DOING THIS FOR NOW
		this.paintBgDegradeRate = paintBgDegradeRate;

		this.clearQueue();


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

		console.log("req cle");

	}

	getRequiresClear() {
		let b =  this.requiresClear;

		this.requiresClear = false; 

		return b;
	}


	getPaintQueue() {

		var temp = this.paintQueue;

		this.clearQueue();
		//
		// if (this.paintBgDegradeRate !== 0){
		// 	//this.paintQueue.push(new Rect(1, new Color(0, 0, 0, this.paintBgDegradeRate), new Position(0,0)));
		// }

		return temp;
	}

}

export default CanvasCore;
