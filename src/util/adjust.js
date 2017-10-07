

function adjustX(context, value) {
	let sizeX = context.canvas.width;

  return sizeX * value;
}

function adjustY(context, value) {
	let sizeY = context.canvas.height;

  return sizeY * value;
}

var adjustPosition = function(context, position) {

  return {
    x: adjustX(context, position.x),
    y: adjustY(context, position.y)
  }

}

module.exports = {
  adjustPosition: adjustPosition

}
