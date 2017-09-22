# blacksheep react canvas

Get the AMD module located at `blacksheep-react-canvas.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'BlacksheepReactCanvas': 'blacksheep-react-canvas'
  }
});

require(['react', 'BlacksheepReactCanvas'], function(React, BlacksheepReactCanvas) {

  React.render(React.createElement(BlacksheepReactCanvas), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
