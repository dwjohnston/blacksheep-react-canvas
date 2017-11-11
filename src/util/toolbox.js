let Toolbox = {


  clone: function (o) {
    return Object.assign( Object.create( Object.getPrototypeOf(o)), o)
  }
}

export default Toolbox;
