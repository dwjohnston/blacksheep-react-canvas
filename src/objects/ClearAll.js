import Rect from "./Rect";
import Color from "./Color";
import Position from "./Position";
/**
  A simple object to pass through to completely clear the canvas
*/


class ClearAll{

  constructor(){

  }


  draw(context) {

    //hardcoded black for now
    new Rect(1, new Color(0, 0, 0, 1), new Position(0,0)).draw(context);
  }


}

export default ClearAll;
