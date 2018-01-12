import { assert, showSeparateLine, report, pass, fail } from './assert';
import utils from './utils';

(function () {

  console.log('start!');

  const ninjaPromise = new Promise((resolve, reject) => {
    resolve('Hattori');
  });

  ninjaPromise.then(ninja => {
    assert(ninja === 'Hattori', 'We were promised Hattori!');
  }, error => {
    fail("Then shouldn't be an error");
  });


} ());

setTimeout(() => {
  showSeparateLine();
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

  // 現在のイベントループで実行するため、他の処理をblockしていることを確認する用のこの処理を追加
  const arr = Array.from(Array(300000)).map((v, k) => k);
  report(arr.join(''));

  report('At code end');

}, 10);

setTimeout(() => {
  showSeparateLine();
  report('error example start!');

  const promise = new Promise((resolve, reject) => {
    undeclaredVariable++;
  });

  promise.then(() => fail("Happy path, won't be called!"))
    .catch(error => pass("Third promise was also rejected"));

}, 50);

setTimeout(() => {
  showSeparateLine();
  utils.getJSON("data/ninjas.json").then(ninjas => {
    assert(ninjas !== null, "Ninjas obtained!");
  }).catch(e => fail("Shouldn't be here:" + e));
}, 100);