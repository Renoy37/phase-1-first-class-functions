function receivesAFunction(callback) {
  // calling the callback
  callback();
}

function returnsANamedFunction() {
  return function named() {
    console.log("named function returned");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("anonymous function returned");
  };
}
