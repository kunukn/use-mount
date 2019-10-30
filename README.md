# use-mount

## About

ReactJS Mount and UnMount callback hook.

```jsx
let ref = useMount({ onMount, onUnmount });
/*
 onMount is an optional callback function,
 onUnmount is an optional callback function.
 The ref is attached to the component where the callbacks should apply.
*/
```

## Usage example

```jsx
import useMount from '@kunukn/use-mount';

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
```

## Demo

https://codesandbox.io/s/gifted-murdock-m3rzk
