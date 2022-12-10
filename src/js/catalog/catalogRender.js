import { bathroom, bathTitle } from '../data/bathroom';
import { kids, kidsTitle } from '../data/kids';
import { plaids, listTitle } from '../data/plaid';
import bathLayout from './renderLayout/bathLayout';
import indLayout from './renderLayout/indLayout';
import kidsLayout from './renderLayout/kidsLayout';
import renderPlaidLayout from './renderLayout/plaidLayout';

const refs = {
  container: document.querySelector('.catalog__list-container'),
};
let layout;
let parsedLayout;

const clearResult = () => {
  refs.container.innerHTML = '';
};

const renderLayout = id => {
  console.log(id);
  clearResult();

  switch (id) {
    case 'plaid':
      layout = JSON.stringify(renderPlaidLayout(plaids, listTitle));
      parsedLayout = JSON.parse(layout);
      refs.container.insertAdjacentHTML('beforeend', parsedLayout);
      break;
    case 'kids':
      layout = JSON.stringify(kidsLayout(kids, kidsTitle));
      parsedLayout = JSON.parse(layout);
      refs.container.insertAdjacentHTML('beforeend', parsedLayout);
      break;
    case 'bathroom':
      layout = JSON.stringify(bathLayout(bathroom, bathTitle));
      parsedLayout = JSON.parse(layout);
      refs.container.insertAdjacentHTML('beforeend', parsedLayout);
      break;
    case 'individual':
      layout = JSON.stringify(indLayout());
      parsedLayout = JSON.parse(layout);
      refs.container.insertAdjacentHTML('beforeend', parsedLayout);
      break;
  }
};

export default renderLayout;
