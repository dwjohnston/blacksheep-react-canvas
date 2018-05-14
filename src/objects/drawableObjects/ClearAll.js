import Rect from "./Rect";
import Color from "../Color";
import Position from "../Position";

import {adjustPosition} from "../../util/adjust";
import DrawableObject from "./DrawableObject"

/**
A simple object to pass through to completely clear the canvas
*/


class ClearAll extends DrawableObject{

  constructor(color = new Color(0, 0, 0, 1)){
    super();
    this.color = color;
  }


  draw(context) {

    //hardcoded black for now
    let max = adjustPosition(context, new Position(1,1));
    context.clearRect(0, 0, max.x, max.y )

    if (this.color !== true) {
      new Rect(1, this.color, new Position(0,0)).draw(context);
    }




  }


}

export default ClearAll;
