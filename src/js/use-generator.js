import { assert, showSeparateLine } from './assert';

(function() {
  function* WeaponGenerator() {
    yield 'Katana';
    yield 'Wakizashi';
  }
  const weaponsIterator = WeaponGenerator();

  const result1 = weaponsIterator.next();
  assert(
    typeof result1 === 'object' && result1.value === 'Katana' && !result1.done,
    'Katana received!'
  );
  const result2 = weaponsIterator.next();
  assert(
    typeof result2 === 'object' && result2.value === 'Wakizashi' && !result2.done,
    'Wakizashi received!'
  );
  const result3 = weaponsIterator.next();
  assert(typeof result3.done, 'finished!');
})();

showSeparateLine();

(function() {
  function* NinjaGenerator(action) {
    const imposter = yield 'Hattori ' + action;

    assert(imposter === 'Hanzo', 'The generator has been infiltrated');

    yield 'Yoshi (' + imposter + ') ' + action;
  }

  const ninjaIterator = NinjaGenerator('skulk');

  const result1 = ninjaIterator.next();
  assert(result1.value === 'Hattori skulk', 'Hattori is skulking');

  const result2 = ninjaIterator.next('Hanzo');
  assert(result2.value === 'Yoshi (Hanzo) skulk', 'We have an imposter!');
})();
