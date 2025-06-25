function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    function namedFn() {
      return 'I am named';
    }
    return namedFn;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      return 'I am anonymous';
    };
  }
  
