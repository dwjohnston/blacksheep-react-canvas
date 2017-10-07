import Rect from "./objects/Rect";
import Color from "./objects/Color";
import Position from "./objects/Position";


class CanvasCore {


	/**


		FUTURE STATE

		rather than just having a paint queue and a draw queue, you can have n layers

	*/

	constructor(paintBgColor="#000000", paintBgDegradeRate=0) {

		this.paintQueue = [];
		this.drawQueue = [];

		this.requiresClear = false;

		this.paintBgColor = paintBgColor;	//OK COLOR DOESN'T WORK, CBF DOING THIS FOR NOW
		this.paintBgDegradeRate = paintBgDegradeRate;

	}

	addDrawable(drawable) {



		this.draqQueue.push(...drawable);
	}

	addPaintable(paintable) {
		this.paintQueue.push(...paintable);
	}

	setRequiresClear(bool){
		if (bool === null || bool === true){
			this.requiresClear = true;
		}

		else this.requiresClear = bool;
	}

	getRequiresClear() {
		return this.requiresClear;
	}


	getPaintQueue() {




		var temp = this.paintQueue;
		this.paintQueue = [];

		if (this.paintBgDegradeRate !== 0){
			this.paintQueue.push(new Rect(1, new Color(0, 0, 0, this.paintBgDegradeRate), new Position(0,0)));
		}

		return temp;
	}

	getDrawQueue() {
		var temp = this.drawQueue;
		this.drawQueue = [];
		return temp;
	}




}

export default CanvasCore;
