import css from '../css/assert.css';

export default function assert(value, desc) {
  const li = document.createElement('li');
  li.className = value ? 'pass' : 'fail';
  li.appendChild(document.createTextNode(desc));
  let result = document.getElementById('results');
  if (!result) {
    result = document.createElement('div');
    result.setAttribute('id', 'results');
    document.getElementsByTagName('body')[0].appendChild(result);
  }
  result.appendChild(li);
}
