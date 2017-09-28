class Circle   {

	constructor(size, color, position){

		this.size = size;
		this.color = color;
		this.position = position;

	}

	draw(context){


		let sizeX = context.canvas.width;
		let sizeY = context.canvas.height;

		context.fillStyle = this.color.toString();


		context.beginPath();
		context.arc(this.position.x * sizeX, this.position.y * sizeY, this.size * (sizeX > sizeY ? sizeY:sizeX),  0, 2*Math.PI, false);
		context.closePath();
		context.fill();
	}

}


export default Circle;
