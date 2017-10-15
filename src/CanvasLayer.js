import Color from "./objects/Color";

class CanvasLayer {

  constructor(backgroundColor = new Color(0,0,0,1), degradeLayer = new Color(0,0,0,0)) {

    this.backgroundColor = backgroundColor;
    this.degradeLayer = degradeLayer;
  }

}


export default CanvasLayer;
