import {adjustPosition, adjustSize} from "../../util/adjust";
import {pointOnCircle} from "../../util/geo";

import DrawableObject from "./DrawableObject"
import Position from "../Position"

import AbstractPolygon from "../abstract/AbstractPolygon";

class Polygon  extends DrawableObject {

	constructor(size, color, position, nSides=3, phase=0, solid = true, width = 3){
		super();
		this.size = size;
		this.color = color;
    this.nSides = nSides;
    this.phase = phase;
		this.position = position;

		this.solid = solid;

    this.width = width;


		let p = new AbstractPolygon(nSides, size, phase, position);
    this.points =p.getPoints();




	}

	draw(context){



		if (this.solid) {
			context.fillStyle = this.color.toString();
		}
		else {
			context.strokeStyle = this.color.toString();
      context.lineWidth = this.width;
		}





		context.beginPath();

		this.place(context);

		context.closePath();

		if (this.solid) {
			context.fill();

		}

		else {
			context.stroke();
		}
	}

	place(context) {


		let p = adjustPosition(context, this.position);
		let s = adjustSize(context, this.size);


    let pInit = pointOnCircle(p, s, this.phase);
    context.moveTo(pInit.x,pInit.y);

    for (let pp of this.points) {
      pp=  adjustPosition(context, pp);
      context.lineTo(pp.x, pp.y);
    }



	}

}


export default Polygon;
