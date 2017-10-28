import DrawableObject from "./DrawableObject"

/**
	This one looks like it's likley broken. Remove this message if it's not.
*/
class Line extends DrawableObject {



	constructor(p1, p2, color) {
		super();
		this.p1 = p1;
		this.p2 = p2;
		this.color= color;
	}


	draw(context){

		context.strokeStyle = this.color.toString();
		context.lineWidth = 3;

		context.beginPath();
		context.moveTo(this.p1.x, this.p1.y);
		context.lineTo(this.p2.x, this.p2.y);
		context.stroke();

	}

}

export default Line;
