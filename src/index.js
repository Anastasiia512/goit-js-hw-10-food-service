import { Theme } from './themes';
import markup from './markup';
import './styles.css';

const input = document.querySelector('input.js-switch-input');

if (localStorage.getItem('color-theme') !== null) {
  const currentTheme = localStorage.getItem('color-theme');
  document.body.classList.add(currentTheme);
  if (document.body.classList.contains(Theme.DARK)) {
    input.checked = true;
  }
}

const changeTheme = function (e) {
  if (e.target.checked) {
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('color-theme', Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    return;
  }
  document.body.classList.add(Theme.LIGHT);
  localStorage.setItem('color-theme', Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
};

input.addEventListener('change', changeTheme);
