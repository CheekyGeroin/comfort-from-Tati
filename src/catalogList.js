import onBtnClick from './js/catalog/catalogBtn';

const refs = {
  list: document.querySelector('.switcher__list'),
};

refs.list.addEventListener('click', onBtnClick);
