import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useMount from '../.';
//import useMount from '../dist/.';
let App = () => {
  let [isActive, setToggle] = React.useState(true);

  let onMount = node => console.log('onMount', node);
  let onUnMount = node => console.log('onUnMount', node);

  let ref = useMount({ onMount, onUnMount });

  return (
    <div ref={ref}>
      <button onClick={() => setToggle(s => !s)}>Toggle</button>
      {isActive && <div ref={ref}>Hello</div>}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
