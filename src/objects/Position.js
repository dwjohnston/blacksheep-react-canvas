class Position {

	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	update(x,y) {
		this.x = x;
		this.y =y;
	}

	updateFromPosition(pos) {
		this.update(pos.x, pos.y);
	}

	copy() {
		return new Position(this.x, this.y);
	}

}


 export default Position;
