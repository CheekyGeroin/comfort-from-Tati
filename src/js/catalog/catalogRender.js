import { plaids } from '../data/plaid';
import renderPlaidLayout from './renderLayout/plaidLayout';

const refs = {
  list: document.querySelector('.catalog-layout__list'),
};

const renderLayout = id => {
  console.log(id);

  switch (id) {
    case 'plaid':
      const layout = renderPlaidLayout(plaids);
      refs.list.insertAdjacentHTML('beforeend', layout.join(''));
  }
};

export default renderLayout;
