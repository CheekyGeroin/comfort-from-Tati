import { onOpenMenu } from './js/openBurgerMenu';

const refs = {
  openBtn: document.querySelector('.burger__btn'),
  menu: document.querySelector('.menu'),
  closeBtn: document.querySelector('.close__btn'),
};

refs.openBtn.addEventListener('click', onOpenMenu);
