import template from './template.hbs';
import menu from './menu.json';

const ulMenu = document.querySelector('.js-menu');
const markupMenu = menu.reduce((acc, elem) => `${acc}${template(elem)}`, '');

ulMenu.insertAdjacentHTML('beforeend', markupMenu);
