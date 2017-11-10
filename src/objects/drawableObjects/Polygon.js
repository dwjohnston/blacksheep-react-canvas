import {adjustPosition, adjustSize} from "../../util/adjust";
import {pointOnCircle} from "../../util/geo";

import DrawableObject from "./DrawableObject"
import Position from "../Position"

import AbstractPolygon from "../abstract/AbstractPolygon";

class Polygon  extends DrawableObject {

	constructor(polygon, color,  solid = true, width = 3){
		super();

		this.color = color;
  	this.solid = solid;

    this.width = width;



    this.points =polygon.getPoints();




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

    let pInit = adjustPosition(context, this.points[this.points.length-1]);
    context.moveTo(pInit.x,pInit.y);

    for (let pp of this.points) {
      pp=  adjustPosition(context, pp);
      context.lineTo(pp.x, pp.y);
    }



	}

}


export default Polygon;
