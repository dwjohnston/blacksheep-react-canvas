import Toolbox from "../util/toolbox";


class ColorPoint {

	constructor(position, color){
		this.position =  Toolbox.clone(position);
		this.color = Toolbox.clone(color);
	}
}


 export default ColorPoint;
