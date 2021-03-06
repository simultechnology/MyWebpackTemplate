import css from '../css/assert.css';

export { assert, showSeparateLine, report, pass, fail };

function assert(value, desc) {
  const li = document.createElement('li');
  li.className = value ? 'pass' : 'fail';
  li.appendChild(document.createTextNode(desc));
  let result = document.getElementById('results');
  if (!result) {
    result = document.createElement('ul');
    result.setAttribute('id', 'results');
    document.getElementsByTagName('body')[0].appendChild(result);
  }
  result.appendChild(li);
}

let getResultsArea = () => {
  let results = document.getElementById('results');
  if (results) {
    return results;
  }
  let ul = document.createElement('ul');
  ul.setAttribute('id', 'results');
  document.body.appendChild(ul);
  return ul;
};

function showSeparateLine(headline = '') {
  const li = document.createElement('li');
  li.appendChild(
    document.createTextNode(headline + ' --------------------------------------------------')
  );
  let results = getResultsArea();
  results.appendChild(li);
}

function report(text) {
  const li = document.createElement('li');
  li.appendChild(
    document.createTextNode(text)
  );
  let results = getResultsArea();
  results.appendChild(li);
}

const pass = report;

function fail(text) {
  const li = document.createElement('li');
  li.appendChild(
    document.createTextNode(text)
  );
  li.className = 'fail';
  let results = getResultsArea();
  results.appendChild(li);
}
