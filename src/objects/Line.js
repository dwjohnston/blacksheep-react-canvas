class Line {



	constructor(p1, p2, color, opacity) {
		this.p1 = p1;
		this.p2 = p2;
		this.color=  color.replace(')', ", "+ opacity + ")").replace("rgb", "rgba");
	}


	draw(context){

		context.strokeStyle = this.color;
		context.lineWidth = 3;

		context.beginPath();
		context.moveTo(this.p1.x, this.p1.y);
		context.lineTo(this.p2.x, this.p2.y);
		context.stroke();

	}

}

export default Line;
