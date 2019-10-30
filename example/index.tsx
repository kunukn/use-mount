import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useMount from '../.';
//import useMount from '../dist/.';

let MyComponent = ({ children }) => {
  let onMount = node => console.log('I mounted with this node:', node);
  let onUnmount = node => console.log('I unmounted with this  node:', node);
  let ref = useMount({ onMount, onUnmount });
  return <div ref={ref}>{children}</div>;
};

let App = () => {
  let [isActive, setToggle] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggle(s => !s)}>toggle</button>
      {isActive && <MyComponent>This is my component</MyComponent>}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
