const refs = {
  openBtn: document.querySelector('.burger__btn'),
  menu: document.querySelector('.menu'),
  closeBtn: document.querySelector('.close__btn'),
};

export const onOpenMenu = () => {
  refs.menu.classList.add('open');
  refs.closeBtn.addEventListener('click', onCloseMenu);
};

export const onCloseMenu = () => {
  refs.menu.classList.remove('open');
  refs.closeBtn.removeEventListener('click', onCloseMenu);
};

export * from './openBurgerMenu';
