# use-mount

Mount and UnMount callback hook.

```jsx
import useMount from '@kunukn/useMount';

let MyComponent = ({ children }) => {
  let onMount = node => console.log('I mounted with this node:', node);
  let onUnmount = node => console.log('I unmounted with this  node:', node);
  let ref = useMount({ onMount, onUnmount });
  return <div ref={ref}>{children}</div>;
};
```
