import React from 'react';
import axios from 'axios';
import App from '../client/src/components/App.jsx';

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

