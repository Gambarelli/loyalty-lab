import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductGrid from '../components/ProductGrid/ProductGrid';

storiesOf('ProductGrid', module)
  .add('default', () =>  <ProductGrid></ProductGrid>);
  