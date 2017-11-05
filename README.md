#blacksheep-react-canvas

An abstraction/convenience layer for react

##Installation

```
npm install --save blacksheep-react-canvas
```

##Usage

You'll be doing something like this:


```


import {Canvas, CanvasCore} from 'blacksheep-react-canvas';

class MyApp extends React.Component {


  componentWillMount() {

    let cc = new CanvasCore(1); //Canvas has one layer
    let drawingSource = new SomeDrawingSource();  
    cc.setDrawingSource(drawingSource);

    this.setState({
      canvasCore: cc
      drawingSource: drawingSource
      });


  }


  render () {

    return (<div>   <Canvas id ="test-canvas" canvasCore = {this.state.canvasCore} /> </div> );
  }
}


rah rah rah i'm tireed. 

```
