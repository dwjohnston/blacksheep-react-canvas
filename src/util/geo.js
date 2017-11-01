import Position from "../objects/Position";

function pointBetween(p1,p2, ratio) {
  return new Position(((p1.x - p2.x) * ratio) + p2.x , ((p1.y -  p2.y)*ratio) + p2.y);
}

function pointOnCircle(center, distance, phase) {

  let position = new Position();

  position.update(
    center.x + (Math.cos(phase) * distance),
    center.y +(Math.sin(phase) * distance)
  );


  return position;


}


module.exports = {

  pointOnCircle: pointOnCircle,
  pointBetween: pointBetween

}
