/**
  Probably replace this with an existing library
*/


class Color {

	constructor(r, g, b, opacity){
		this.r = r;
    this.g = g;
    this.b = b;
    this.opacity = opacity;
		this.a = opacity;
	}

  toString() {
    return ["rgba(",this.r,",",this.g,",",this.b,",", this.opacity,")"].join("");
  }

	shift(v,w) {

		return new Color(
			Math.floor(this.r +v),
			 Math.floor(this.g +v),
			  Math.floor(this.b +v),
				this.a + w
		);

}
}


 export default Color;
