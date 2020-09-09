import axios from 'axios';
import React from 'react';
import {
  shallow, mount, render, configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';

describe('<App /> rendering', () => {
    it('should render three <div>s', () => {
      let wrapper = shallow(<App />);
      expect(wrapper.children('div')).toHaveLength(3);
    });
});

configure({ adapter: new Adapter() });

describe('A suite', function () {
    
    it('Should return a div element', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.type()).toEqual('div');
    })

    it('Should render correctly', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});