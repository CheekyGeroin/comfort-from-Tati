const refs = {
  openBtn: document.querySelector('.burger__btn'),
  menu: document.querySelector('.menu'),
  closeBtn: document.querySelector('.close__btn'),
};

refs.openBtn.addEventListener('click', onOpenMenu);

export const onOpenMenu = () => {
  refs.menu.classList.add('open');
  refs.closeBtn.addEventListener('click', onCloseMenu);
};

export const onCloseMenu = () => {
  refs.menu.classList.remove('open');
};

export * from './openBurgerMenu';
