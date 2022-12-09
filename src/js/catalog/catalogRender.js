import { plaids, listTitle } from '../data/plaid';
import renderPlaidLayout from './renderLayout/plaidLayout';

const refs = {
  container: document.querySelector('.catalog__list-container'),
};
let layout;

const renderLayout = id => {
  console.log(id);

  switch (id) {
    case 'plaid':
      layout = JSON.stringify(renderPlaidLayout(plaids, listTitle));
      const parsedLayout = JSON.parse(layout);
      console.log(parsedLayout);
      refs.container.insertAdjacentHTML('beforeend', parsedLayout);
      break;
    case 'bathroom':
      layout;
  }
};

export default renderLayout;
