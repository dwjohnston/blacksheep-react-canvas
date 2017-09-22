import React from 'react/addons';
import BlacksheepReactCanvas from '../lib/blacksheep-react-canvas.jsx';

describe('BlacksheepReactCanvas', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <BlacksheepReactCanvas/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('blacksheep-react-canvas');
  });
});
