/***
A container of objects to be rendered in one go.

All objects will be the same color, but (future state) you can apply a gradient.
*/
import Color from "../Color";
import DrawableObject from "./DrawableObject"

class Batch extends DrawableObject {



  constructor(list = [], color = new Color(200,200,200,0.5), lineWidth = 3) {
    super();
    this.list = list;
    this.color = color;

    this.lineWidth=3;
  }


  add(obj) {
    this.list.push(obj);
  }

  draw(context) {

    context.fillStyle = this.color.toString();
    context.strokeStyle = this.color.toString();

    context.lineWidth = this.lineWidth;


    context.beginPath();

    this.place(context);

    context.closePath();
    context.fill();
    context.stroke();

  }

  place(context) {

    //Assumes everything has a place method.
    for (let obj of this.list) {
      obj.place(context);


    }

  }

}


export default Batch;
