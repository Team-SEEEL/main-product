import axios from 'axios';
import React from 'react';
import {
  shallow, mount, render, configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/App';

describe('Api test', () => {
  test('Ajax request to endpoint /api/products should return data', () => {
    return axios.get('http://localhost:3001/products/api/mainProduct')
      .then((results) => {
        expect(results.data).toHaveLength(100);
      });
  });
});

