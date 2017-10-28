
/**this here is just a empty non-used object for now.

This is mean to be a way of enforcing static typing.

You can use this as hints for how to use the other objects


*/



class DrawableObject   {

	constructor(){

	}


	/**
		A complete standalone draw of the object. Bad performance.
	*/
	draw(context){

		//define the fill style, etc.

		this.place(context);


		// End path etc.

	}

	/**
		Place the object on a canvas for batch rendering.

		Anything that is batch rendered will have to be the same color;
	*/
	place (context) {
		throw new Error("This method should be overridden by extending class");
	}

}


export default DrawableObject;
