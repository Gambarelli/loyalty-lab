import React from 'react';
import Product from "../components/Product/Product"
import { storiesOf } from '@storybook/react';

const product = {
    _id: "5a0b35c1734d1d08bf7084c3",
    name: "iPhone 8",
    cost: 800,
    category: "Phones",
    img: {
      url: "https://aerolab-challenge.now.sh/images/iPhone8-x1.png",
      hdUrl: "https://aerolab-challenge.now.sh/images/iPhone8-x2.png"
    }
}

storiesOf('Product', module)
  .add('default', () =>  <Product product={product} ></Product>);
  