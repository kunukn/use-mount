import * as React from 'react';

function useMount({ onMount = null, onUnmount = null } = {}) {
  let ref = React.useRef();

  let callbackRef = React.useCallback(
    node => {
      if (node) {
        ref.current = node;
        onMount && onMount(node);
      }
    },
    [onMount]
  );

  React.useEffect(() => {
    return () => {
      onUnmount && onUnmount(ref.current);
    };
  }, [onUnmount]);

  return callbackRef;
}

module.exports = useMount;
