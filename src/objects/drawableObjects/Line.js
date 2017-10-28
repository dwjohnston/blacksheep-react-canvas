import DrawableObject from "./DrawableObject"
import {adjustPosition} from "../../util/adjust";

/**
This one looks like it's likley broken. Remove this message if it's not.
*/
class Line extends DrawableObject {



	constructor(p1, p2, color, size = 1) {
		super();
		this.p1 = p1;
		this.p2 = p2;
		this.color= color;

		this.size = size;
	}

	setupContext(context) {
		context.strokeStyle = this.color.toString();
		context.lineWidth = this.size;
		context.beginPath();
	}

	draw(context){


		this.setupContext(context);


		this.place(context);


		this.finishContext(context);

	}

	finishContext(context) {
		context.stroke();
	}


	place(context) {

		let p1 = adjustPosition(context, this.p1);
		let p2 = adjustPosition(context, this.p2);

		context.moveTo(p1.x, p1.y);
		context.lineTo(p2.x, p2.y);
	}
}

export default Line;
