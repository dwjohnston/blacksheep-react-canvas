/**
  Probably replace this with an existing library
*/


class Color {

	constructor(r, g, b, opacity){
		this.r = r;
    this.g = g;
    this.b = g;
    this.opacity = opacity;
	}

  toString() {
    return ["rgba(",this.r,",",this.g,",",this.b,",", this.opacity,")"].join("");
  }
}


 export default Color;
