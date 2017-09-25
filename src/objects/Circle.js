class Circle   {

	constructor(size, color, position){

		this.size = size;
		this.color = color;
		this.position = position;

	}

	draw(context){

		console.log(this);


		context.fillStyle = this.color;

		context.beginPath();
		context.arc(this.position.x, this.position.y, this.size,  0, 2*Math.PI, false);
		context.closePath();
		context.fill();
	}

}


export default Circle;
