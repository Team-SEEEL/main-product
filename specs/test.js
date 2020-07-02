import React from 'react';
import axios from 'axios';
import App from '../client/src/components/App.jsx';
import { expect } from 'chai';

// test for reviews

describe('<mainProduct />', () => {
    const sampleMainProductData = [
      {
        product_id: ObjectId("5ef13dfcf491609107e6cad2"),
        category: "Beauty",
        company: "Walmart",
        description: "Sample description",
        price: 845,
        prime: true,
        ratings: 4.1,
        title: "Car Freshener",
        best_seller: false
    }];
  
    const { wrapper } = ReviewTest(ReviewData);
  
    it('Should Contain Main Product entry', () => {
      expect(wrapper.find('.mainProduct').exists()).toBe(true);
    });
  });

describe('API photo routes test', () => {
    test('Ajax request to endpoint /api/photos should return data', () => {
        return axios.get('http://localhost:3000/api/photos')
        .then((results) => {
            expect(results.data).to.be.greaterThan.length(0);
        })
    })
})
