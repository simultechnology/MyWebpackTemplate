import { assert, showSeparateLine, report } from './assert';

(function () {

  console.log('start!');

  const ninjaPromise = new Promise((resolve, reject) => {
    resolve('Hattori');
  });

  ninjaPromise.then(ninja => {
    assert(ninja === 'Hattori', 'We were promised Hattori!');
    showSeparateLine();
  }, error => {
    fail("Then shouldn't be an error");
  });


} ());

setTimeout(() => {
  report('At code start');

  const ninjaDelayedPromise = new Promise((resolve, reject) => {
    report('ninjaDelayedPromise executor');
    setTimeout(() => {
      report('Resolving ninjaDelayedPromise');
      resolve('Hattori');
    });
  });

  assert(ninjaDelayedPromise !== null, 'After creating ninjaDelayedPromise');

  ninjaDelayedPromise.then(ninja => {
    assert(ninja === 'Hattori', 'ninjaDelayedPromise resolve handled with Hattori');
  });

  const ninjaImmediatePromise = new Promise((resolve, reject) => {
    report('ninjaImmediatePromise executor. Immediate resolve.');
    resolve('Yoshi');
  });

  ninjaImmediatePromise.then(ninja => {
    assert(ninja === 'Yoshi', 'ninjaImmediatePromise resolve handled with Yoshi');
  });

  report('At code end');

}, 100);