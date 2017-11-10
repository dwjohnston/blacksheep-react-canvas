var _ = require('lodash');

import {pointOnCircle, pointBetween} from "../../util/geo";
import Position from "../Position";

class AbstractPolygon{



  constructor(nsides=3, size=1, phase=0, position = new Position(0,0)) {
    this.nSides=nsides;
    this.size = size;
    this.phase = phase;

    this.position = position;

    let points = [];
    for (let i = 1; i <= this.nSides; i++){
      let phase = this.phase + ((Math.PI * 2) * (i/ this.nSides));
      phase = phase % (Math.PI *2)
      let pp = pointOnCircle(this.position, this.size, phase);
      points.push(pp);
    }

    this.points = points;
  }

  getPoint(phase) {


    let edgeNum = _.floor(((phase/ (Math.PI *2) ) * this.nSides));
    let edgePhase = (phase%((Math.PI*2)/this.nSides))/((Math.PI*2)/this.nSides);
    let position = pointBetween(this.points[(edgeNum+1)%this.nSides], this.points[edgeNum], edgePhase);


    return position;
  }


  getPoints(){



    return this.points;
  }



}



export default AbstractPolygon;
