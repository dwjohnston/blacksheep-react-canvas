
class CanvasCore {

	constructor() {

		this.paintQueue = [];
		this.drawQueue = [];

		this.requiresClear = false;
	}

	addDrawable(drawable) {
		this.draqQueue.push(drawable);
	}

	addPaintable(paintable) {
		this.paintQueue.push(paintable);
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
		return temp;
	}

	getDrawQueue() {
		var temp = this.drawQueue;
		this.drawQueue = [];
		return temp;
	}




}

export default CanvasCore;
