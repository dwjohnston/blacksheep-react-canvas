

function adjustX(context, value) {
	let sizeX = context.canvas.width;

  return sizeX * value;
}

function adjustY(context, value) {
	let sizeY = context.canvas.height;

  return sizeY * value;
}

var adjustSize = function(context, size) {
	return {
		x: adjustX(context, size),
		y: adjustY(context, size)
	};
}

var adjustPosition = function(context, position) {

  return {
    x: adjustX(context, position.x),
    y: adjustY(context, position.y)
  }

}

module.exports = {
  adjustPosition: adjustPosition,
	adjustSize: adjustSize, 

}
