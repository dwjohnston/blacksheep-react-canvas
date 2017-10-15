import {adjustPosition} from "../util/adjust";


class Circle   {

	constructor(size, color, position){

		this.size = size;
		this.color = color;
		this.position = position;

	}

	draw(context){



		context.fillStyle = this.color.toString();




		context.beginPath();
		this.place(context);
		context.closePath();
		context.fill();
	}

	place(context) {

		let sizeX = context.canvas.width;
		let sizeY = context.canvas.height;


		let p = adjustPosition(context, this.position);


		context.moveTo(p.x,p.y);
		context.arc(p.x, p.y, this.size * (sizeX > sizeY ? sizeY:sizeX),  0, 2*Math.PI, false);

	}

}


export default Circle;
