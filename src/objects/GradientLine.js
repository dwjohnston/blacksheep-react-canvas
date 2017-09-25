class GradientLine {



	constructor(cp1, cp2) {
		this.cp1 = cp1;
		this.cp2= cp2;

		this.color = '#fff';
	}


	draw(context){


		var gradient = context.createLinearGradient(this.cp1.position.x,this.cp1.position.y,this.cp2.position.x,this.cp2.position.y);
		gradient.addColorStop(0, this.cp1.color);
		gradient.addColorStop(1, this.cp2.color);
		context.strokeStyle = gradient;
		context.lineWidth = 3;

		context.beginPath();
		context.moveTo(this.cp1.position.x, this.cp1.position.y);
		context.lineTo(this.cp2.position.x, this.cp2.position.y);
		context.stroke();

	}

}

export default GradientLine;
