import {adjustPosition, adjustSize} from "../../util/adjust";
import DrawableObject from "./DrawableObject"


class Circle  extends DrawableObject {

	constructor(size, color, position, solid = true, lineWidth=2){
		super();
		this.size = size;
		this.color = color;
		this.position = position;
		this.lineWidth = lineWidth;

		this.solid = solid;

	}

	draw(context){



		if (this.solid) {
			context.fillStyle = this.color.toString();
		}
		else {
			context.strokeStyle = this.color.toString();
			context.lineWidth = this.lineWidth;
		}





		context.beginPath();

		this.place(context);

		context.closePath();

		if (this.solid) {
			context.fill();

		}

		else {
			context.stroke();
		}
	}

	place(context) {


		let p = adjustPosition(context, this.position);
		let s = adjustSize(context, this.size);


		context.moveTo(p.x + s.x,p.y);
		context.ellipse(p.x, p.y, s.x, s.y, 0, 0, 2*Math.PI, false);

	}

}


export default Circle;
