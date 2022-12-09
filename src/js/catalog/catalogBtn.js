const refs = {
  list: document.querySelector('.switcher__list'),
};

refs.list.addEventListener('click', onBtnClick);
function onBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const currentActiveBtn = document.querySelector('.switcher__buttons--active');

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('switcher__buttons--active');
  }
  e.target.classList.add('switcher__buttons--active');
  console.log(e.target.id);
}
export default onBtnClick;
