import * as React from 'react';
import * as ReactDOM from 'react-dom';
let useMount = require('../src');
let mountHook = useMount.default || useMount;

let App = () => {
  let [isActive, setToggle] = React.useState(true);

  let onMount = node => console.log('onMount', node);
  let onUnMount = node => console.log('onUnMount', node);

  let ref = mountHook({ onMount, onUnMount });

  return (
    <div>
      <button onClick={() => setToggle(s => !s)}>Toggle</button>
      {isActive && <div ref={ref}>Hello</div>}
    </div>
  );
};

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
