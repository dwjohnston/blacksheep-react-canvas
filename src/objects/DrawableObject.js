class DrawableObject   {

	constructor(color){
		this.color = color;
	}

	draw(context){

		context.fillStyle = this.color;

		context.beginPath();
		context.arc(this.position.x, this.position.y, this.size,  0, 2*Math.PI, false);
		context.closePath();
		context.fill();
	}

}


export default DrawableObject;
