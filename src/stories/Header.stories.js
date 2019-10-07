import React from 'react';
import Header from "../components/Header/Header";
import { storiesOf } from '@storybook/react';


storiesOf('Header', module)
  .add('default', () =>  <Header></Header>);
  