class Rect   {

	constructor(size, color, position){

		this.size = size;
		this.color = color;
		this.position = position;

	}

	draw(context){


		let sizeX = context.canvas.width;
		let sizeY = context.canvas.height;

		context.fillStyle = this.color.toString();


		context.fillRect(this.position.x * sizeX, this.position.y * sizeY, (this.position.x + this.size) * sizeX,  (this.position.y + this.size) * sizeY );

	}

}


export default Rect;
