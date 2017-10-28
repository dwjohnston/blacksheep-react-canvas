import {adjustPosition} from "../../util/adjust";

import DrawableObject from "./DrawableObject"

class GradientLine extends DrawableObject {



	constructor(cp1, cp2, size = 1) {
		super();
		this.cp1 = cp1;
		this.cp2= cp2;

		this.size = size;

		this.color = '#fff';
	}


	draw(context){

		let p1 = adjustPosition(context, this.cp1.position);
		let p2 = adjustPosition(context, this.cp2.position);

		var gradient = context.createLinearGradient(p1.x,p1.y,p2.x,p2.y);


		gradient.addColorStop(0, this.cp1.color.toString());
		gradient.addColorStop(1, this.cp2.color.toString());
		context.strokeStyle = gradient;
		context.lineWidth = this.size;

		context.beginPath();
		context.moveTo(p1.x, p1.y);
		context.lineTo(p2.x, p2.y);
		context.stroke();

	}

}

export default GradientLine;
