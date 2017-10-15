/***
A container of objects to be rendered in one go.

All objects will be the same color, but (future state) you can apply a gradient.
*/
import Color from "./Color";

class Batch {



  constructor(list = [], color = new Color(200,200,200,0.5)) {
    this.list = list;
    this.color = color;
  }


  add(obj) {
    this.list.push(obj);
  }

  draw(context) {

    context.fillStyle = this.color.toString();
    context.beginPath();

    this.place(context);

    context.closePath();
    context.fill();

  }

  place(context) {

    //Assumes everything has a place method.
    for (let obj of this.list) {
      obj.place(context);


    }

  }

}


export default Batch;
