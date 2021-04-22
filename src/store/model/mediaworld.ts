import {Store} from './store';

export const Mediaworld: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: '.product-add-to-cart',
      text: ['Aggiungi al carrello'],
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.mediaworld.it/product/k-1006319',
    }
    ,
    // {
    //   brand: 'sony',
    //   model: 'ps5 digital',
    //   series: 'sonyps5de',
    //   url:
    //     'https://www.unieuro.it/online/Playstation-5/PlayStation-5-Digital-Edition-pidSONPS5DIGITAL',
    // }
  ],
  name: 'mediaworld',
};
